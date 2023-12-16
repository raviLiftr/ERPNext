(() => {
  // frappe-html:/Users/ravikumar/frappe-bench/frappe-bench/frappe-bench/apps/hrms/hrms/public/js/templates/employees_with_unmarked_attendance.html
  frappe.templates["employees_with_unmarked_attendance"] = `{% if data.length %}

<div class="form-message yellow">
	<div>
		{{
			__(
				"Attendance is pending for these employees between the selected payroll dates. Mark attendance to proceed. Refer {0} for details.",
				["<a href='/app/query-report/Monthly%20Attendance%20Sheet'>Monthly Attendance Sheet</a>"]
			)
		}}
	</div>
</div>

<table class="table table-bordered small">
	<thead>
		<tr>
			<th style="width: 14%" class="text-left">{{ __("Employee") }}</th>
			<th style="width: 16%" class="text-left">{{ __("Employee Name") }}</th>
			<th style="width: 12%" class="text-left">{{ __("Unmarked Days") }}</th>
		</tr>
	</thead>
	<tbody>
		{% for item in data %}
			<tr>
				<td class="text-left"> {{ item.employee }} </td>
				<td class="text-left"> {{ item.employee_name }} </td>
				<td class="text-left"> {{ item.unmarked_days }} </td>
			</tr>
		{% } %}
	</tbody>
</table>

{% } else { %}

<div class="form-message green">
	<div>{{ __("Attendance has been marked for all the employees between the selected payroll dates.") }}</div>
</div>

{% } %}`;

  // ../hrms/hrms/public/js/utils.js
  frappe.provide("hrms");
  frappe.provide("hrms.utils");
  $.extend(hrms, {
    proceed_save_with_reminders_frequency_change: () => {
      frappe.ui.hide_open_dialog();
      frappe.call({
        method: "hrms.hr.doctype.hr_settings.hr_settings.set_proceed_with_frequency_change",
        callback: () => {
          cur_frm.save();
        }
      });
    },
    set_payroll_frequency_to_null: (frm) => {
      if (cint(frm.doc.salary_slip_based_on_timesheet)) {
        frm.set_value("payroll_frequency", "");
      }
    },
    get_current_employee: async (frm) => {
      var _a, _b;
      const employee = (_b = (_a = await frappe.db.get_value("Employee", { "user_id": frappe.session.user }, "name")) == null ? void 0 : _a.message) == null ? void 0 : _b.name;
      return employee;
    }
  });
})();
//# sourceMappingURL=hrms.bundle.64AGN5V7.js.map
