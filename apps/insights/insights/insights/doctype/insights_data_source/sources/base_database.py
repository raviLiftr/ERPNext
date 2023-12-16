# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from sqlalchemy.sql import text
from tenacity import retry, retry_if_exception_type, stop_after_attempt, wait_fixed

from insights.insights.doctype.insights_table_import.insights_table_import import (
    InsightsTableImport,
)
from insights.utils import ResultColumn

from .utils import (
    add_limit_to_sql,
    cache_results,
    compile_query,
    execute_and_log,
    get_cached_results,
    replace_query_tables_with_cte,
)


class DatabaseConnectionError(frappe.ValidationError):
    pass


class BaseDatabase:
    def __init__(self):
        self.engine = None
        self.data_source = None
        self.connection = None
        self.query_builder = None
        self.table_factory = None

    def test_connection(self):
        with self.connect() as connection:
            res = connection.execute(text("SELECT 1"))
            return res.fetchone()

    @retry(
        retry=retry_if_exception_type((DatabaseConnectionError,)),
        stop=stop_after_attempt(5),
        wait=wait_fixed(1),
        reraise=True,
    )
    def connect(self):
        try:
            return self.engine.connect()
        except BaseException as e:
            frappe.log_error(title="Error connecting to database", message=e)
            raise DatabaseConnectionError(e)

    def build_query(self, query):
        """Used to update the sql in insights query"""
        query_str = self.query_builder.build(query, dialect=self.engine.dialect)
        query_str = self.process_subquery(query_str) if not query.is_native_query else query_str
        return query_str

    def run_query(self, query):
        sql = self.query_builder.build(query, dialect=self.engine.dialect)
        sql = self.escape_special_characters(sql) if query.is_native_query else sql
        return self.execute_query(sql, return_columns=True)

    def execute_query(
        self,
        sql,  # can be a string or a sqlalchemy query object or text object
        pluck=False,
        return_columns=False,
        cached=False,
    ):
        if sql is None:
            return []
        if isinstance(sql, str) and not sql.strip():
            return []

        sql = self.compile_query(sql)
        sql = self.process_subquery(sql)
        sql = self.set_row_limit(sql)

        self.validate_native_sql(sql)

        if cached:
            cached_results = get_cached_results(sql, self.data_source)
            if cached_results:
                return cached_results

        with self.connect() as connection:
            res = execute_and_log(connection, sql, self.data_source)
            cols = [ResultColumn.from_args(d[0]) for d in res.cursor.description]
            rows = [list(r) for r in res.fetchall()]
            rows = [r[0] for r in rows] if pluck else rows
            ret = [cols] + rows if return_columns else rows
            cached and cache_results(sql, self.data_source, ret)
            return ret

    def compile_query(self, query):
        if hasattr(query, "compile"):
            compiled = compile_query(query, self.engine.dialect)
            query = str(compiled) if compiled else None
        return query

    def process_subquery(self, sql):
        allow_subquery = frappe.db.get_single_value("Insights Settings", "allow_subquery")
        if allow_subquery:
            sql = replace_query_tables_with_cte(sql, self.data_source)
        return sql

    def escape_special_characters(self, sql):
        # to fix special characters in query like %
        return text(sql.replace("%%", "%"))

    def set_row_limit(self, sql):
        # set a hard max limit to prevent long running queries
        # there's no use case to view more than 500 rows in the UI
        # TODO: while exporting as csv, we can remove this limit
        max_rows = frappe.db.get_single_value("Insights Settings", "query_result_limit") or 500
        return add_limit_to_sql(sql, max_rows)

    def validate_native_sql(self, query):
        select_or_with = str(query).strip().lower().startswith(("select", "with"))
        if not select_or_with:
            frappe.throw("Only SELECT and WITH queries are allowed")

    def table_exists(self, table: str):
        """
        While importing a table, check if the table exists in the database
        """
        raise NotImplementedError

    def import_table(self, import_doc: InsightsTableImport):
        """
        Imports the table into the database
        """
        raise NotImplementedError

    def sync_tables(self):
        raise NotImplementedError

    def get_table_columns(self, table):
        raise NotImplementedError

    def get_column_options(self, table, column, search_text=None, limit=50):
        raise NotImplementedError

    def get_table_preview(self):
        raise NotImplementedError
