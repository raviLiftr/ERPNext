var me=Object.defineProperty;var G=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Z=(i,t,e)=>t in i?me(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,N=(i,t)=>{for(var e in t||(t={}))fe.call(t,e)&&Z(i,e,t[e]);if(G)for(var e of G(t))pe.call(t,e)&&Z(i,e,t[e]);return i};var w=(i,t,e)=>new Promise((f,d)=>{var a=s=>{try{p(e.next(s))}catch(r){d(r)}},y=s=>{try{p(e.throw(s))}catch(r){d(r)}},p=s=>s.done?f(s.value):Promise.resolve(s.value).then(a,y);p((e=e.apply(i,t)).next())});import{B as ge,_ as he,a as ye}from"./DashboardEmptyState-9b53962f.js";import{u as _e,C as ve}from"./useQuery-b1a5cdc5.js";import{s as be,b as we,c as xe,d as J,e as ee,w as A,u as Ce}from"./index-61e7aa99.js";import{w as q}from"./widgets-f5903e20.js";import{a as U,aD as ke,aE as De,aF as Ie,R as $e,i as F,M as S,v as m,x,F as M,E as te,N as b,L as v,A as H,f as O,w as Se,r as T,D as ne,z as o,B as D,G as C,Z as Y,H as k,O as oe,aC as Q,aB as Le,a5 as V,q as Be,aG as qe,s as Ve,C as Te,aH as We}from"./frappe-ui-24524c82.js";import{_ as Ee}from"./UsePopover-9747e78c.js";import{u as Fe}from"./useChartData-c190b291.js";import{a as Oe}from"./index-45270e13.js";import{_ as Re,a as He}from"./Query-a90198f6.js";import{u as Qe}from"./queryStore-d82f5e4a.js";import"./useDataSource-327864e5.js";import"./cacheStore-8d74b582.js";import"./useDataSourceTable-f88aea74.js";import"./dataSourceStore-3ba6c3b5.js";import"./results-60b5fd7f.js";import"./PageBreadcrumbs-e38fbd0a.js";import"./Tabs-2e22988b.js";import"./useDashboards-ef8a3602.js";import"./DatePicker-f885a1f8.js";import"./vuedraggable.umd-a5e26eb5.js";import"./ListPicker-10d4a6be.js";import"./x-8e1e14d8.js";const K=be();function Me(i){const t=Pe(i),e=U({doc:{doctype:"Insights Dashboard",name:void 0,owner:void 0,title:void 0,items:[]},isOwner:!1,canShare:!1,isPrivate:!1,editing:!1,loading:!1,deleting:!1,currentItem:void 0,draggingWidget:void 0,sidebar:{open:!0,position:"right"},itemLayouts:[],filterStates:{},filtersByChart:{},refreshCallbacks:[]});function f(){return w(this,null,function*(){e.loading=!0,yield t.get.fetch(),e.doc=t.doc,e.itemLayouts=e.doc.items.map(le),e.isOwner=e.doc.owner==K.user.user_id,e.canShare=e.isOwner||K.user.is_admin,t.is_private.fetch().then(n=>{e.isPrivate=n.message}),e.loading=!1})}f();function d(){return w(this,null,function*(){e.editing&&(e.loading=!0,e.doc.items.forEach((n,g)=>n.idx=g),e.doc.items.forEach(p),yield t.setValue.submit(e.doc),yield f(),e.currentItem=void 0,e.loading=!1,e.editing=!1,window.location.reload())})}function a(){return w(this,null,function*(){e.deleting=!0,yield t.delete.submit(),e.deleting=!1})}function y(n){e.editing&&(e.doc.items.push(ie(n)),e.itemLayouts.push(ue(n)))}function p(n){const g=e.itemLayouts.find(_=>_.i===parseInt(n.item_id));n.layout=g||n.layout}function s(n){if(!e.editing)return;const g=e.doc.items.findIndex(_=>_.item_id===n.item_id);e.doc.items.splice(g,1),e.itemLayouts.splice(g,1),e.currentItem=void 0}function r(n){e.editing&&(e.currentItem=e.doc.items.find(g=>g.item_id===n),e.loadCurrentItemQuery(e.currentItem.options.query))}function h(n){return`filterState-${e.doc.name}-${n}`}function l(n){return w(this,null,function*(){return e.filterStates[n]||(e.filterStates[n]=yield ke(h(n))),e.filterStates[n]})}function c(n,g){return w(this,null,function*(){const _=g?{operator:g.operator,value:g.value}:void 0;we(_,e.filterStates[n])||De(h(n),_).then(()=>{e.filterStates[n]=_,u(n)})})}function u(n){e.doc.items.some(g=>{if(g.item_id===n)return(Object.keys(g.options.links)||[]).forEach($=>{I($)}),!0})}function I(n){return w(this,null,function*(){const g=e.doc.items.filter($=>$.item_type==="Filter").map($=>w(this,null,function*(){var z,X;const E=(z=$.options.links)==null?void 0:z[n];if(!E)return;const j=yield l($.item_id);if(!(!j||!((X=j.value)!=null&&X.value)))return{label:$.options.label,column:E,value:j.value.value,operator:j.operator.value,column_type:E.type}})),_=yield Promise.all(g);e.filtersByChart[n]=_.filter(Boolean)})}function L(n){return w(this,null,function*(){return e.filtersByChart[n]||(yield I(n)),e.filtersByChart[n]})}const W=[];function R(n){return w(this,null,function*(){const g=W.at(-1);if(g){const _=new Date-g;_<1e3&&(yield new Promise($=>setTimeout($,1e3-_)))}return W.push(new Date),t.fetch_chart_data.submit(n).then(_=>_.message)})}function B(n,g){return w(this,null,function*(){if(g||e.doc.items.some(E=>{if(E.item_id===n)return g=E.options.query,!0}),!g)throw new Error(`Query not found for item ${n}`);const _=yield L(n);return yield R({item_id:n,query_name:g,filters:_})})}function P(n){const g=e.doc.items.find(_=>_.item_id===n);Object.keys(g.options.links).forEach(_=>{Object.keys(e.queryResults).forEach($=>{$.startsWith(`${_}-`)&&(delete e.queryResults[$],B(_))})})}function se(){return w(this,null,function*(){yield t.clear_charts_cache.submit(),yield f(),e.refreshCallbacks.forEach(n=>n())})}function ae(n){e.refreshCallbacks.push(n)}const re=Ie(function(n){!n||!e.editing||(e.doc.title=n)},500);function le(n){return{i:parseInt(n.item_id),x:n.layout.x||0,y:n.layout.y||0,w:n.layout.w||q[n.item_type].defaultWidth,h:n.layout.h||q[n.item_type].defaultHeight}}function ue(n){const g=q[n.item_type].defaultWidth,_=q[n.item_type].defaultHeight,$=n.initialX,E=n.initialY;return delete n.initialX,delete n.initialY,{i:parseInt(n.item_id),x:$||0,y:E||0,w:g,h:_}}function de(n){e.doc.is_public!==n&&t.setValue.submit({is_public:n}).then(()=>{xe({title:"Dashboard access updated",variant:"success"}),e.doc.is_public=n})}function ce(n){!n||!e.currentItem||(e.currentItem.query=_e(n),e.currentItem.query.get.fetch())}return Object.assign(e,{reload:f,save:d,addItem:y,removeItem:s,setCurrentItem:r,getChartResults:B,getFilterStateKey:h,getFilterState:l,setFilterState:c,refreshFilter:P,refreshChartFilters:I,edit:()=>(e.editing=!0,e.currentItem=void 0),discardChanges:()=>(e.editing=!1,f(),e.currentItem=void 0),toggleSidebar:()=>e.sidebar.open=!e.sidebar.open,setSidebarPosition:n=>e.sidebar.position=n,updateTitle:re,deleteDashboard:a,refresh:se,onRefresh:ae,isChart:n=>!["Filter","Text"].includes(n.item_type),togglePublicAccess:de,loadCurrentItemQuery:ce,resetOptions:n=>{n.options={query:n.options.query}}})}function Pe(i){return $e({doctype:"Insights Dashboard",name:i,whitelistedMethods:{fetch_chart_data:"fetch_chart_data",clear_charts_cache:"clear_charts_cache",is_private:"is_private"},transform(t){return t.items=t.items.map(ie),t}})}function ie(i){return i.options=J(i.options,{}),i.layout=J(i.layout,{}),i}const je={class:"flex cursor-pointer rounded bg-gray-800 p-1 shadow-sm"},Ae=["onClick"],Ne={__name:"DashboardItemActions",props:{item:Object},setup(i){const t=i,e=F("dashboard"),f=F("widgetRef"),d=[{icon:"external-link",label:"Open Query",hidden:a=>a.item_type==="Filter"||a.item_type==="Text",onClick(a){a.options.query&&window.open(`/insights/query/build/${a.options.query}`,"_blank")}},{icon:"download",label:"Download",hidden:a=>a.item_type==="Filter"||a.item_type==="Text",onClick(){ee(f.value.$el,`${t.item.options.title}.png`)}},{icon:"trash",label:"Delete",onClick:a=>e.removeItem(a)}];return(a,y)=>{const p=S("FeatherIcon");return m(),x("div",je,[(m(),x(M,null,te(d,s=>b("div",{key:s.label,class:H(["px-1 py-0.5",{hidden:s.hidden&&s.hidden(i.item)}]),onClick:r=>s.onClick(i.item)},[v(p,{name:s.icon,class:"h-3.5 w-3.5 text-white"},null,8,["name"])],10,Ae)),64))])}}},Ue={class:"dashboard-item h-full min-h-[60px] w-full p-2 [&>div:first-child]:h-full"},Ye={key:0,class:"absolute inset-0 z-[10000] flex h-full w-full items-center justify-center rounded bg-white"},ze={class:"absolute right-3 top-3 z-10 flex items-center"},Xe={key:0},Ge={class:"flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-1 text-sm leading-3 text-gray-600"},Ze={key:1,class:"invisible -mb-1 -mt-1 flex cursor-pointer rounded p-1 text-gray-600 hover:bg-gray-100 group-hover:visible"},Je={__name:"DashboardItem",props:{item:{type:Object,required:!0}},setup(i){const t=i,e=F("dashboard");let f=e.isChart(t.item),d=f?O(()=>e.filtersByChart[t.item.item_id]):null,a=U({});if(f){const h=O(()=>t.item.options.query);a=Fe({resultsFetcher(){return e.getChartResults(t.item.item_id)}}),A(h,()=>w(this,null,function*(){yield a.load(h.value),s()}),{immediate:!0}),e.onRefresh(()=>a.load(h.value)),e.refreshChartFilters(t.item.item_id),Se(d,()=>a.load(h.value))}const y=T(null),p=T(null);ne("widgetRef",p);function s(){var l;if(!t.item.options.query||t.item.options.title||!t.item.item_type)return;t.item.options.query==((l=e.currentItem)==null?void 0:l.options.query)&&!t.item.options.title&&(t.item.options.title=e.currentItem.query.doc.title);const h=a.getGuessedChart(t.item.item_type);t.item.item_type===h.type&&(t.item.options=N(N({},t.item.options),h.options))}function r(){window.open(`/insights/query/build/${t.item.options.query}`,"_blank")}return(h,l)=>{var L,W,R;const c=S("LoadingIndicator"),u=S("FeatherIcon"),I=S("Tooltip");return m(),x("div",Ue,[b("div",{ref_key:"itemRef",ref:y,class:H(["group relative flex h-full rounded",{" bg-white shadow":o(e).isChart(i.item),"ring-2 ring-blue-300 ring-offset-1":i.item.item_id===((L=o(e).currentItem)==null?void 0:L.item_id),"cursor-grab":o(e).editing}]),onClick:l[2]||(l[2]=Q(B=>o(e).setCurrentItem(i.item.item_id),["prevent","stop"]))},[o(a).loading?(m(),x("div",Ye,[v(c,{class:"w-6 text-gray-300"})])):D("",!0),(m(),C(Y(o(q).getComponent(i.item.item_type)),{ref_key:"widget",ref:p,class:H([o(e).editing?"pointer-events-none":""]),item_id:i.item.item_id,data:o(a).data,options:i.item.options},null,8,["class","item_id","data","options"])),b("div",ze,[(W=o(d))!=null&&W.length?(m(),x("div",Xe,[v(I,{text:o(d).map(B=>{var P;return B.label||((P=B.column)==null?void 0:P.label)}).join(", ")},{default:k(()=>[b("div",Ge,[b("span",null,oe(o(d).length),1),v(u,{name:"filter",class:"h-3 w-3",onMousedown:l[0]||(l[0]=Q(()=>{},["prevent","stop"]))})])]),_:1},8,["text"])])):D("",!0),!o(e).editing&&i.item.options.query?(m(),x("div",Ze,[v(u,{name:"external-link",class:"h-4 w-4",onClick:l[1]||(l[1]=B=>r(i.item))})])):D("",!0)])],2),o(e).editing&&y.value?(m(),C(Ee,{key:0,targetElement:y.value,show:o(e).editing&&((R=o(e).currentItem)==null?void 0:R.item_id)===i.item.item_id,placement:"top-end"},{default:k(()=>[v(Ne,{item:i.item},null,8,["item"])]),_:1},8,["targetElement","show"])):D("",!0)])}}},Ke={__name:"DashboardMenuButton",setup(i){const t=F("dashboard"),e=T(!1),f=Le();function d(){return w(this,null,function*(){yield t.deleteDashboard(),e.value=!1,f.push({name:"Dashboards"})})}function a(){return w(this,null,function*(){const y=document.querySelector(".dashboard");yield ee(y,`${t.doc.title}.png`)})}return(y,p)=>{const s=S("Dropdown"),r=S("Dialog");return m(),x(M,null,[o(t).doc?(m(),C(s,{key:0,placement:"left",button:{icon:"more-vertical",variant:"outline"},options:[{label:"Export as PNG",variant:"outline",icon:"download",onClick:()=>a()},{label:"Delete",variant:"outline",icon:"trash-2",onClick:()=>e.value=!0}]},null,8,["options"])):D("",!0),v(r,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=h=>e.value=h),dismissable:!0,options:{title:"Delete Dashboard",message:"Are you sure you want to delete this dashboard?",icon:{name:"trash",variant:"solid",theme:"red"},actions:[{label:"Cancel",variant:"outline",onClick:()=>e.value=!1},{label:"Yes",variant:"solid",theme:"red",onClick:d}]}},null,8,["modelValue","options"])],64)}}},et={__name:"DashboardShareButton",setup(i){const t=F("dashboard"),e=T(!1);return(f,d)=>{const a=S("Badge"),y=S("Button");return m(),x(M,null,[o(t).isPrivate?(m(),C(a,{key:0,theme:"yellow"},{default:k(()=>[V(" Private ")]),_:1})):D("",!0),v(y,{variant:"outline",onClick:d[0]||(d[0]=p=>e.value=!0)},{default:k(()=>[V(" Share ")]),_:1}),o(t).doc?(m(),C(Re,{key:1,show:e.value,"onUpdate:show":d[1]||(d[1]=p=>e.value=p),"resource-type":o(t).doc.doctype,"resource-name":o(t).doc.name,"allow-public-access":!0,isPublic:!!o(t).doc.is_public,onTogglePublicAccess:o(t).togglePublicAccess},null,8,["show","resource-type","resource-name","isPublic","onTogglePublicAccess"])):D("",!0)],64)}}},tt={class:"flex flex-shrink-0 justify-end space-x-2"},nt={__name:"DashboardNavbarButtons",setup(i){const t=F("dashboard"),e=Oe(),f=e["Meta+E"];A(f,t.edit);const d=e["Meta+S"];A(d,t.save);const a=e["Meta+D"];return A(a,t.discardChanges),(y,p)=>{const s=S("Button");return m(),x("div",tt,[!o(t).editing&&o(t).canShare?(m(),C(et,{key:0})):D("",!0),o(t).editing?D("",!0):(m(),C(s,{key:1,variant:"outline",onClick:o(t).refresh},{default:k(()=>[V(" Refresh ")]),_:1},8,["onClick"])),o(t).editing?(m(),C(s,{key:2,variant:"outline",onClick:o(t).discardChanges},{default:k(()=>[V(" Cancel ")]),_:1},8,["onClick"])):D("",!0),o(t).editing?(m(),C(s,{key:4,variant:"solid",onClick:o(t).save,loading:o(t).loading},{default:k(()=>[V(" Save ")]),_:1},8,["onClick","loading"])):(m(),C(s,{key:3,variant:"outline",onClick:o(t).edit},{default:k(()=>[V(" Edit ")]),_:1},8,["onClick"])),v(Ke)])}}},ot={class:"space-y-2"},it=b("span",{class:"mb-2 block text-sm leading-4 text-gray-700"},"Query",-1),st={class:"relative"},at={key:0,class:"flex h-[46rem] w-full flex-col justify-end p-4 text-base"},rt={class:"ml-auto space-x-2 px-2"},lt={__name:"DashboardQueryOption",props:["modelValue"],emits:["update:modelValue"],setup(i,{emit:t}){const e=i,f=O({get:()=>e.modelValue,set:c=>t("update:modelValue",c)}),d=Qe(),a=O(()=>d.list.map(c=>({label:c.title,value:c.name})));function y(){window.open(`/insights/query/build/${f.value}`,"_blank")}const p=T(!1),s=T(null);function r(){return w(this,null,function*(){s.value=yield d.create({is_assisted_query:1}),p.value=!0})}function h(){return w(this,null,function*(){yield d.delete(s.value.name),p.value=!1,s.value=null})}function l(){return w(this,null,function*(){yield d.reload(),t("update:modelValue",s.value.name),p.value=!1,s.value=null})}return(c,u)=>{const I=S("Autocomplete"),L=S("FeatherIcon"),W=S("Button"),R=S("Dialog");return m(),x(M,null,[b("div",ot,[it,b("div",st,[v(I,{modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=B=>f.value=B),returnValue:!0,placeholder:"Select a query",allowCreate:!0,options:a.value,onCreateOption:r},null,8,["modelValue","options"]),f.value?(m(),x("div",{key:0,class:"absolute right-0 top-0 flex h-full w-8 cursor-pointer items-center justify-center rounded bg-gray-100",onClick:y},[v(L,{name:"maximize-2",class:"h-3.5 w-3.5 text-gray-600 hover:text-gray-900"})])):D("",!0)])]),v(R,{modelValue:p.value,"onUpdate:modelValue":u[1]||(u[1]=B=>p.value=B),dismissable:!1,options:{size:"2xl"}},{body:k(()=>[s.value?(m(),x("div",at,[v(He,{name:s.value.name,hideTabs:!0},null,8,["name"]),b("div",rt,[v(W,{variant:"solid",theme:"red",onClick:h,loading:o(d).deleting},{default:k(()=>[V(" Discard ")]),_:1},8,["loading"]),v(W,{variant:"solid",onClick:l},{default:k(()=>[V(" Done ")]),_:1})])])):D("",!0)]),_:1},8,["modelValue"])],64)}}},ut={class:"grid grid-cols-3 gap-3"},dt=["onDragstart"],ct={class:"flex w-full items-center justify-center p-2 text-center"},mt={__name:"DashboardWidgetsOptions",emits:["dragChange"],setup(i,{emit:t}){const e=F("dashboard");function f(d){t("dragChange",d),e.draggingWidget=d}return(d,a)=>(m(),x("div",ut,[(m(!0),x(M,null,te(o(q).list,y=>(m(),x("div",{key:y.type,draggable:!0,class:"cursor-grab rounded border border-gray-100 bg-gray-50 pb-2 pt-1 text-center",onDragend:a[0]||(a[0]=p=>t("dragChange",!1)),onDragstart:p=>f(y)},[b("div",ct,[(m(),C(Y(o(q).getIcon(y.type)),{class:"h-6 w-6","stroke-width":1}))]),b("span",null,oe(y.type),1)],40,dt))),128))]))}},ft=["onDragenter","onDragover","onDrop"],pt={__name:"UseDropZone",props:{onDrop:{type:Function},showCollision:{type:Boolean,default:!1},colliderClass:{type:String,default:".collider"},ghostWidth:{type:Number,default:128},ghostHeight:{type:Number,default:48}},setup(i){const t=i,e=U({isDragging:!1,collides:!1,ghost:{x:0,y:0},minLeft:0,maxLeft:0,minTop:0,maxTop:0,ghostWidth:O(()=>t.ghostWidth),ghostHeight:O(()=>t.ghostHeight)});function f(){const l=y.value.getBoundingClientRect();e.minLeft=l.left+e.ghostWidth/2,e.minTop=l.top+e.ghostHeight/2,e.maxLeft=l.right-e.ghostWidth/2,e.maxTop=l.bottom-e.ghostHeight/2}function d(l){if(!e.isDragging)return;let c=l.clientX,u=l.clientY;c<e.minLeft?c=0:c>e.maxLeft?c=e.maxLeft-e.minLeft:c=c-e.ghostWidth/2-(e.minLeft-e.ghostWidth/2),u<e.minTop?u=0:u>e.maxTop?u=e.maxTop-e.minTop:u=u-e.ghostHeight/2-(e.minTop-e.ghostHeight/2),e.ghost.x=c,e.ghost.y=u,t.showCollision&&a()}const a=function(){requestAnimationFrame(()=>{const l=document.querySelector(".ghost-element");if(!l)return;const c=l.getBoundingClientRect(),u=Array.from(document.querySelectorAll(t.colliderClass)).some(I=>{const L=I.getBoundingClientRect();return c.left<L.right&&c.right>L.left&&c.top<L.bottom&&c.bottom>L.top});e.collides=u})},y=T(null),p=l=>w(this,null,function*(){f(),d(l),e.isDragging=!0}),s=()=>e.isDragging=!1;Be(()=>{f(),window.addEventListener("dragover",d),window.addEventListener("dragend",s),h()}),qe(()=>{window.removeEventListener("dragover",d),window.removeEventListener("dragend",s)});const r=l=>{e.isDragging=!1;const c=l.clientX-e.minLeft,u=l.clientY-e.minTop,I=e.collides;t.onDrop&&t.onDrop({x:c,y:u,collides:I})};Ve(()=>!e.isDragging&&h());function h(){e.ghost.x=e.maxLeft-e.minLeft,e.ghost.y=0}return(l,c)=>(m(),x("div",{ref_key:"dropZone",ref:y,onDragenter:Q(p,["prevent"]),onDragover:Q(()=>{},["prevent"]),onDrop:Q(r,["prevent"])},[b("div",{class:H(["ghost-element absolute rounded bg-gray-200/60 transition-all duration-75 ease-out",[t.showCollision&&e.collides?"bg-red-200/60":""]]),style:Te({opacity:e.isDragging?1:0,transform:`translate(${e.ghost.x}px, ${e.ghost.y}px)`,width:`${e.ghostWidth}px`,height:`${e.ghostHeight}px`})},null,6)],40,ft))}},gt={class:"flex flex-shrink-0 items-center space-x-4"},ht={class:"h-full w-full overflow-y-scroll p-2"},yt={class:"w-[21rem] overflow-scroll border-l bg-white p-3 px-4 shadow-sm"},_t={key:0},vt=b("div",{class:"mb-3 font-semibold text-gray-800"},"Widgets",-1),bt={key:1,class:"space-y-4"},wt={class:"flex items-center text-lg font-medium text-gray-500"},xt=b("div",{class:"ml-2 text-gray-800"},"Back",-1),Ct={class:"flex space-x-2"},Kt={__name:"Dashboard",props:{name:{type:String,required:!0}},setup(i){const t=i,e=Me(t.name);ne("dashboard",e);const f=T(!1);function d(s){var l;const r=y(s);f.value=!1;const h=(l=e.draggingWidget)==null?void 0:l.type;if(h){const c=Math.floor(Math.random()*1e6);e.addItem({item_id:c,item_type:h,initialX:r.x,initialY:r.y}),e.setCurrentItem(c),e.draggingWidget=null}}const a=T(null);function y({x:s,y:r}){const h=a.value.getBoundingClientRect().width/20,l=30;return{x:Math.round(s/h),y:Math.round(r/l)}}const p=O(()=>({title:t.name,subtitle:"Dashboard"}));return Ce(p),(s,r)=>{const h=S("Button"),l=S("Input");return o(e).doc.name?(m(),C(ge,{key:0},We({navbar:k(()=>[b("div",gt,[v(ve,{class:H(["rounded-sm text-lg font-medium !text-gray-800 focus:ring-2 focus:ring-gray-700 focus:ring-offset-4",[o(e).editing?"":"cursor-default"]]),value:o(e).doc.title,disabled:!o(e).editing,onChange:r[0]||(r[0]=c=>o(e).updateTitle(c)),placeholder:"Untitled Dashboard"},null,8,["class","value","disabled"])]),v(nt)]),content:k(()=>{var c,u;return[b("div",ht,[b("div",{ref_key:"gridLayout",ref:a,class:"dashboard relative flex h-fit min-h-screen w-full flex-1 flex-col"},[o(e).editing&&f.value?(m(),C(pt,{key:0,class:"absolute left-0 top-0 z-10 h-full w-full",onDrop:d,showCollision:!0,colliderClass:".dashboard-item",ghostWidth:(((c=o(e).draggingWidget)==null?void 0:c.defaultWidth)||4)*50.8,ghostHeight:(((u=o(e).draggingWidget)==null?void 0:u.defaultHeight)||2)*30},null,8,["ghostWidth","ghostHeight"])):D("",!0),v(he,{class:H(["h-fit w-full",[o(e).editing?"mb-[20rem] ":""]]),items:o(e).doc.items,disabled:!o(e).editing,layouts:o(e).itemLayouts,"onUpdate:layouts":r[1]||(r[1]=I=>o(e).itemLayouts=I)},{item:k(({item:I})=>[(m(),C(Je,{item:I,key:I.item_id},null,8,["item"]))]),_:1},8,["class","items","disabled","layouts"]),o(e).doc.items.length?D("",!0):(m(),C(ye,{key:1,class:"absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 transform"}))],512)])]}),_:2},[o(e).editing&&o(e).sidebar.open?{name:"sidebar",fn:k(()=>{var c;return[b("div",yt,[o(e).currentItem?(m(),x("div",bt,[b("div",wt,[v(h,{variant:"outline",icon:"arrow-left",onClick:r[3]||(r[3]=u=>o(e).currentItem=void 0)}),xt]),v(l,{type:"select",label:"Widget Type",class:"w-full",options:o(q).list.map(u=>u.type),modelValue:o(e).currentItem.item_type,"onUpdate:modelValue":r[4]||(r[4]=u=>o(e).currentItem.item_type=u)},null,8,["options","modelValue"]),o(e).isChart(o(e).currentItem)?(m(),C(lt,{key:0,modelValue:o(e).currentItem.options.query,"onUpdate:modelValue":[r[5]||(r[5]=u=>o(e).currentItem.options.query=u),o(e).loadCurrentItemQuery]},null,8,["modelValue","onUpdate:modelValue"])):D("",!0),o(q).getOptionComponent(o(e).currentItem.item_type)?(m(),C(Y(o(q).getOptionComponent(o(e).currentItem.item_type)),{modelValue:o(e).currentItem.options,"onUpdate:modelValue":r[6]||(r[6]=u=>o(e).currentItem.options=u),columns:(c=o(e).currentItem.query)==null?void 0:c.resultColumns,key:o(e).currentItem.item_id&&o(e).isChart(o(e).currentItem)&&JSON.stringify(o(e).currentItem.options)},null,8,["modelValue","columns"])):D("",!0),b("div",Ct,[v(h,{iconLeft:"refresh-ccw",variant:"outline",onClick:r[7]||(r[7]=u=>o(e).resetOptions(o(e).currentItem))},{default:k(()=>[V(" Reset Options ")]),_:1}),v(h,{iconLeft:"trash",variant:"outline",class:"ml-auto text-red-500",onClick:r[8]||(r[8]=u=>o(e).removeItem(o(e).currentItem))},{default:k(()=>[V(" Delete Widget ")]),_:1})])])):(m(),x("div",_t,[vt,v(mt,{onDragChange:r[2]||(r[2]=u=>f.value=u)})]))])]}),key:"0"}:void 0]),1024)):D("",!0)}}};export{Kt as default};
