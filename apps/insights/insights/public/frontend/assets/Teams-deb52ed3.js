var j=Object.defineProperty,Q=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(_,t,l)=>t in _?j(_,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[t]=l,V=(_,t)=>{for(var l in t||(t={}))O.call(t,l)&&M(_,l,t[l]);if(C)for(var l of C(t))U.call(t,l)&&M(_,l,t[l]);return _},B=(_,t)=>Q(_,L(t));import{s as q,b as E,u as R,_ as F}from"./useTeams-edba4ab4.js";import{r as w,f as b,i as A,M as v,v as o,x as m,N as s,O as x,z as f,F as $,E as D,A as S,L as h,a5 as I,D as z,G as k,H as y,B as T,a as G,Q as P}from"./frappe-ui-24524c82.js";import{_ as N}from"./ListPicker-10d4a6be.js";import{_ as H}from"./Form-5f5c15e9.js";const J={class:"w-1/4 bg-gray-50 p-3 text-gray-600"},K={class:"mb-2 text-lg font-medium text-gray-800"},W={class:"flex-1 space-y-1 pb-4 text-base"},X=["onClick"],Y={__name:"ManageTeamSidebar",emits:["change","delete-team"],setup(_,{emit:t}){const l=w([{label:"Members",icon:"users",current:!0},{label:"Data Sources",icon:"database"},{label:"Tables",icon:"table"},{label:"Dashboards",icon:"monitor"},{label:"Queries",icon:"file-text"},{label:"Delete Team",icon:"trash-2",variant:"solid",theme:"red"}]),d=b({get:()=>l.value.find(a=>a.current).label,set:a=>{l.value=l.value.map(u=>(u.current=u.label==a,u)),t("change",a)}}),r=A("team");function p(a){a.variant=="danger"?n():d.value=a.label}function n(){q({title:"Delete Team",message:"Are you sure you want to delete this team?",icon:{name:"trash",variant:"solid",theme:"red"},primaryAction:{label:"Delete",variant:"solid",theme:"red",action:({close:a})=>r.deleteTeam().then(a).then(()=>t("delete-team"))}})}return(a,u)=>{const i=v("FeatherIcon");return o(),m("div",J,[s("div",K,x(f(r).doc.team_name)+" Team",1),s("nav",W,[(o(!0),m($,null,D(l.value,e=>(o(),m("div",{key:e.label,class:S([e.current?"bg-gray-200/70":"text-gray-600 ",e.variant=="danger"?"text-red-600 hover:bg-gray-200/70 hover:text-red-600":"text-gray-600 hover:bg-gray-200/70 hover:text-gray-800","group flex cursor-pointer items-center rounded px-2 py-1.5 font-medium hover:bg-gray-200/70 hover:text-gray-800"]),onClick:c=>p(e)},[h(i,{name:e.icon,class:S(["mr-3 h-4 w-4 flex-shrink-0"])},null,8,["name"]),I(" "+x(e.label),1)],10,X))),128))])])}}},Z={class:"flex w-full flex-col space-y-3 text-base"},ee={class:"flex flex-shrink-0 flex-col space-y-2"},te=s("div",{class:"text-lg font-medium"},"Members",-1),se={key:0,class:"flex-1 divide-y overflow-y-scroll text-gray-800"},ae={class:"flex items-center space-x-2"},le={class:"text-sm text-gray-600"},ne={class:"flex items-center"},oe={key:1,class:"flex flex-1 items-center justify-center text-gray-500"},re={key:2,class:"flex flex-1 items-center justify-center rounded border border-dashed p-4 font-light text-gray-500"},ie={__name:"ManageTeamMembers",setup(_){const t=A("team"),l=w([]),d=b(()=>{var n;return(n=t.memberOptions)==null?void 0:n.map(a=>({label:a.full_name,description:a.email,value:a.name}))}),r=w(!1);function p(n){r.value=!0,t.addMembers(n.map(a=>a.value)).then(()=>{r.value=!1}).catch(()=>{r.value=!1}),l.value=[]}return(n,a)=>{const u=v("Avatar"),i=v("Button"),e=v("LoadingIndicator");return o(),m("div",Z,[s("div",ee,[te,h(N,{placeholder:"Add a member",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),options:d.value,loading:f(t).search_team_members.loading,onInputChange:a[1]||(a[1]=c=>f(t).searchMembers(c)),onApply:a[2]||(a[2]=c=>p(c))},null,8,["modelValue","options","loading"])]),f(t).members&&f(t).members.length?(o(),m("div",se,[(o(!0),m($,null,D(f(t).members,c=>(o(),m("div",{class:"flex h-12 justify-between px-1",key:c.name},[s("div",ae,[h(u,{label:c.full_name,image:c.user_image},null,8,["label","image"]),s("div",null,[s("div",null,x(c.full_name),1),s("div",le,x(c.email),1)])]),s("div",ne,[h(i,{icon:"x",variant:"minimal",onClick:g=>f(t).removeMember(c.name)},null,8,["onClick"])])]))),128))])):r.value?(o(),m("div",oe,[h(e,{class:"h-6 w-6"})])):(o(),m("div",re," This team has no members "))])}}},ce={class:"flex w-full flex-col space-y-3 text-base"},de={class:"flex flex-shrink-0 flex-col"},ue={class:"text-lg font-medium leading-6"},me={class:"mb-4 text-sm text-gray-600"},_e={class:"flex-1 space-y-3 overflow-y-scroll pl-1"},pe={key:0,class:"divide-y"},he={class:"w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap"},fe={class:"flex items-center space-x-2"},xe={key:1,class:"flex h-full items-center justify-center rounded border border-dashed p-4 text-sm font-light text-gray-600"},ve={__name:"ManageTeamResourceAccess",props:{resourceType:{type:String,required:!0}},setup(_){const t=_,l=b(()=>t.resourceType.replace("Insights ","")),d=b(()=>({"Insights Data Source":"All the tables from these data source will be accessible to the team.","Insights Table":"Give access to only specific tables of a data source. Tables from accessible data sources will also be accessible to the team.","Insights Query":"Queries that are accessible to this team.","Insights Dashboard":"Dashboards that are accessible to this team."})[t.resourceType]),r=A("team");r.searchResources(t.resourceType,"");const p=b(()=>{var i;return(i=r.resources)==null?void 0:i.filter(e=>e.type==t.resourceType)}),n=w([]),a=b(()=>{var i;return(i=r.resourceOptions)==null?void 0:i.map(e=>{const c={"Insights Data Source":`${e.database_type}`,"Insights Table":`${e.data_source}`,"Insights Query":`${e.data_source}`,"Insights Dashboard":""};return B(V({},e),{value:e.name,label:e.title,description:c[e.type]})})});function u(i){r.addResources(i),n.value=[]}return(i,e)=>{const c=v("Button");return o(),m("div",ce,[s("div",de,[s("div",ue,"Manage "+x(l.value)+" Access",1),s("div",me,x(d.value),1),h(N,{placeholder:`Add a ${l.value}`,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=g=>n.value=g),options:a.value,loading:f(r).search_team_resources.loading,onApply:e[1]||(e[1]=g=>u(g)),onInputChange:e[2]||(e[2]=g=>f(r).searchResources(t.resourceType,g))},null,8,["placeholder","modelValue","options","loading"])]),s("div",_e,[p.value&&p.value.length?(o(),m("div",pe,[(o(!0),m($,null,D(p.value,g=>(o(),m("div",{class:"flex h-10 items-center justify-between",key:g.name},[s("span",he,x(g.title),1),s("div",fe,[h(c,{icon:"x",variant:"minimal",onClick:We=>f(r).removeResource(g)},null,8,["onClick"])])]))),128))])):(o(),m("div",xe," No "+x(l.value)+" added yet. ",1))])])}}},ge={class:"flex h-[70vh] text-base"},be={class:"flex w-3/4 space-y-4 overflow-y-scroll p-5"},ye={__name:"ManageTeamDialog",props:{teamname:{type:String,required:!0}},emits:["close"],setup(_,{emit:t}){const l=_,d=w("Members"),r=E(l.teamname);z("team",r);const p=b({get:()=>{var n;return!!((n=r.doc)!=null&&n.team_name)},set:n=>{n||t("close")}});return(n,a)=>{var i;const u=v("Dialog");return o(),k(u,{options:{title:`Manage ${(i=f(r).doc)==null?void 0:i.team_name} Team`,size:"3xl"},modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value=e)},{body:y(()=>[s("div",ge,[h(Y,{onChange:a[0]||(a[0]=e=>d.value=e),onDeleteTeam:a[1]||(a[1]=e=>p.value=!1)}),s("div",be,[d.value=="Members"?(o(),k(ie,{key:0})):T("",!0),d.value!="Members"?(o(),k(ve,{key:d.value,resourceType:{"Data Sources":"Insights Data Source",Tables:"Insights Table",Queries:"Insights Query",Dashboards:"Insights Dashboard"}[d.value]},null,8,["resourceType"])):T("",!0)])])]),_:1},8,["options","modelValue"])}}},ke={__name:"AddTeamDialog",emits:["close"],setup(_,{emit:t}){const l=b({get:()=>!0,set:a=>{a||t("close")}}),d=G({team_name:""}),r=R(),p=P({url:"insights.insights.doctype.insights_team.insights_team_client.add_new_team"});function n(){p.submit({team_name:d.team_name}).then(()=>{r.refresh(),t("close")})}return(a,u)=>{const i=v("Button"),e=v("Dialog");return o(),k(e,{options:{title:"Add Team"},modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=c=>l.value=c)},{"body-content":y(()=>[h(H,{modelValue:d,"onUpdate:modelValue":u[0]||(u[0]=c=>d=c),meta:{fields:[{name:"team_name",label:"Team Name",type:"text",placeholder:"Enter team name"}]}},null,8,["modelValue"])]),actions:y(()=>[h(i,{variant:"solid",disabled:!d.team_name,onClick:n},{default:y(()=>[I(" Add ")]),_:1},8,["disabled"]),h(i,{onClick:u[1]||(u[1]=c=>l.value=!1)},{default:y(()=>[I("Cancel")]),_:1})]),_:1},8,["modelValue"])}}},we={class:"flex -space-x-2"},$e={__name:"Avatars",props:{avatars:{type:Array,required:!0}},setup(_){return(t,l)=>{const d=v("Avatar");return o(),m("div",we,[(o(!0),m($,null,D(_.avatars,r=>(o(),k(d,{class:"ring-2 ring-white",key:r.label,label:r.label,image:r.image},null,8,["label","image"]))),128))])}}},Te={class:"flex flex-1 justify-between"},De=s("h1",{class:"text-3xl font-medium text-gray-900"},"Teams",-1),Ie={class:"space-x-4"},Ae={class:"flex flex-1 flex-col overflow-hidden"},Ce={class:"mb-4 flex flex-shrink-0 space-x-4"},Me={class:"flex flex-1 flex-col rounded border"},Ve={class:"flex flex-shrink-0 items-center justify-between border-b px-4 py-3 text-sm text-gray-600"},Be={class:"mr-4"},Se=s("p",{class:"flex-1 flex-shrink-0"},"Team Name",-1),Re=s("p",{class:"flex-1 flex-shrink-0"},"Members",-1),Ne=s("p",{class:"hidden flex-1 flex-shrink-0 lg:inline-block"},"Data Sources",-1),je=s("p",{class:"hidden flex-1 flex-shrink-0 lg:inline-block"},"Tables",-1),Qe=s("p",{class:"hidden flex-1 flex-shrink-0 lg:inline-block"},"Queries",-1),Le=s("p",{class:"hidden flex-1 flex-shrink-0 lg:inline-block"},"Dashboards",-1),Oe={key:0,role:"list",class:"flex flex-1 flex-col divide-y divide-gray-200 overflow-y-scroll"},Ue=["onClick"],qe={class:"flex h-11 cursor-pointer items-center rounded px-4 hover:bg-gray-50"},Ee={class:"mr-4"},Fe={class:"flex-1 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-gray-900"},ze={class:"flex-1 flex-shrink-0 overflow-hidden whitespace-nowrap text-sm text-gray-600"},Ge={key:1},Pe={class:"hidden flex-1 flex-shrink-0 overflow-hidden whitespace-nowrap text-sm text-gray-600 lg:inline-block"},He={class:"hidden flex-1 flex-shrink-0 overflow-hidden whitespace-nowrap text-sm text-gray-600 lg:inline-block"},Je={class:"hidden flex-1 flex-shrink-0 overflow-hidden whitespace-nowrap text-sm text-gray-600 lg:inline-block"},Ke={class:"hidden flex-1 flex-shrink-0 overflow-hidden whitespace-nowrap text-sm text-gray-600 lg:inline-block"},st={__name:"Teams",setup(_){const t=R(),l=w(null),d=w(!1);function r(p){return p.map(n=>({label:n.full_name,image:n.user_image})).slice(0,3).concat(p.length>3?[{label:`${p.length-3}`}]:[])}return(p,n)=>{const a=v("Button"),u=v("Input");return o(),m($,null,[h(F,null,{header:y(()=>[s("div",Te,[De,s("div",Ie,[h(a,{variant:"outline",class:"shadow",iconLeft:"plus",onClick:n[0]||(n[0]=i=>d.value=!0)},{default:y(()=>[I("Add Team")]),_:1})])])]),main:y(()=>{var i;return[s("div",Ae,[s("div",Ce,[h(u,{type:"text",placeholder:"Team Name"})]),s("div",Me,[s("div",Ve,[s("p",Be,[h(u,{type:"checkbox",class:"rounded border-gray-300"})]),Se,Re,Ne,je,Qe,Le]),((i=f(t).list)==null?void 0:i.length)>0?(o(),m("ul",Oe,[(o(!0),m($,null,D(f(t).list,e=>(o(),m("li",{key:e.name,onClick:c=>l.value=e.name},[s("div",qe,[s("p",Ee,[h(u,{type:"checkbox",class:"rounded border-gray-300"})]),s("p",Fe,x(e.team_name),1),s("p",ze,[e.members.length>0?(o(),k($e,{key:0,avatars:r(e.members)},null,8,["avatars"])):(o(),m("span",Ge," - "))]),s("p",Pe,x(e.source_count),1),s("p",He,x(e.table_count),1),s("p",Je,x(e.query_count),1),s("p",Ke,x(e.dashboard_count),1)])],8,Ue))),128))])):T("",!0)])])]}),_:1}),d.value?(o(),k(ke,{key:0,onClose:n[1]||(n[1]=i=>d.value=!1)})):T("",!0),l.value?(o(),k(ye,{key:1,teamname:l.value,onClose:n[2]||(n[2]=i=>l.value=null)},null,8,["teamname"])):T("",!0)],64)}}};export{st as default};
