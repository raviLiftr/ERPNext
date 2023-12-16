var d=(a,l,i)=>new Promise((r,n)=>{var s=t=>{try{e(i.next(t))}catch(u){n(u)}},o=t=>{try{e(i.throw(t))}catch(u){n(u)}},e=t=>t.done?r(t.value):Promise.resolve(t.value).then(s,o);e((i=i.apply(a,l)).next())});import{v as m,I as y,x as _,J as c}from"./index-61e7aa99.js";import{V as g}from"./widgets-f5903e20.js";import{f as p}from"./frappe-ui-24524c82.js";const v=m("insights:queries",()=>{const a=y({url:"insights.api.queries.get_queries",doctype:"Insights Query",cache:"queryList",fields:f.map(e=>e.value),filters:{},auto:!0,pageLength:50,orderBy:"creation desc"}),l=p(()=>{var e;return((e=a.list.data)==null?void 0:e.map(t=>(t.created_from_now=_(t.creation).fromNow(),t)))||[]}),i=p(()=>l.value.map(r));function r(e){return{label:e.title,value:e.name,description:e.data_source}}function n(e){return d(this,null,function*(){return c.submit(e).then(t=>(a.list.reload(),t))})}function s(e){return d(this,null,function*(){return a.delete.submit(e).then(()=>{a.list.reload()})})}function o(e){a.filters=e,a.list.reload()}return{list:l,dropdownOptions:i,loading:a.list.loading,creating:c.loading,deleting:a.delete.loading,reload:()=>a.list.reload(),create:n,delete:s,getFilterableFields:()=>f,applyFilters:e=>o(e),getDropdownOptions:()=>i.value}}),f=[{label:"Name",value:"name",fieldname:"name",fieldtype:"Data"},{label:"Title",value:"title",fieldname:"title",fieldtype:"Data"},{label:"Status",value:"status",fieldname:"status",fieldtype:"Select",options:`Pending Execution
Execution Successful
Execution Failed`},{label:"Is Assisted Query",value:"is_assisted_query",fieldname:"is_assisted_query",fieldtype:"Check"},{label:"Is Native Query",value:"is_native_query",fieldname:"is_native_query",fieldtype:"Check"},{label:"Data Source",value:"data_source",fieldname:"data_source",fieldtype:"Link",options:"Insights Data Source"},{label:"Creation",value:"creation",fieldname:"creation",fieldtype:"Datetime"},{label:"Owner",value:"owner",fieldname:"owner",fieldtype:"Link",options:"User"},{label:"Owner Name",value:"owner_name",fieldname:"owner_name",fieldtype:"Data"},{label:"Owner Image",value:"owner_image",fieldname:"owner_image",fieldtype:"Data"},{label:"Chart Type",value:"chart_type",fieldname:"chart_type",fieldtype:"Select",options:g.join(`
`)}],S=v;export{S as u};
