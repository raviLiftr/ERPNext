import{_ as l}from"./BaseChart-3eb553bf.js";import{B as m}from"./index-61e7aa99.js";import{g as x}from"./colors-b352916e.js";import{i as f,f as p,v as d,G as u}from"./frappe-ui-24524c82.js";function y(o,t,r){const n=f("$utils");if(!(o!=null&&o.length)||!(t!=null&&t.length))return{};const s=r.referenceLine?{data:[{name:r.referenceLine,type:r.referenceLine.toLowerCase(),label:{position:"middle",formatter:"{b}: {c}"}}]}:{},i=[{type:"category",data:r.invertAxis?o.reverse():o,axisTick:!1,axisLabel:{rotate:r.rotateLabels,interval:0,formatter:(e,a)=>isNaN(e)?n.ellipsis(e,20):n.getShortNumber(e,1)}},{type:"value",splitLine:{lineStyle:{type:"dashed"}},axisLabel:{formatter:(e,a)=>isNaN(e)?n.ellipsis(e,20):n.getShortNumber(e,1)}}];return{animation:!1,color:r.colors||x(),grid:{top:25,bottom:35,left:20,right:30,containLabel:!0},xAxis:r.invertAxis?i[1]:i[0],yAxis:r.invertAxis?i[0]:i[1],series:t.map(e=>({type:"bar",name:e.label,barMaxWidth:50,data:r.invertAxis?e.data.reverse():e.data,itemStyle:{borderRadius:r.invertAxis?[0,4,4,0]:[4,4,0,0]},markLine:s,stack:r.stack?"stack":null})),tooltip:{trigger:"axis",confine:!0,appendToBody:!1,valueFormatter:e=>isNaN(e)?e:m(e)},legend:{icon:"circle",type:"scroll",bottom:"bottom",pageIconSize:12,pageIconColor:"#64748B",pageIconInactiveColor:"#C0CCDA",pageFormatter:"{current}",pageButtonItemGap:2}}}const L={__name:"Bar",props:{data:{type:Object,required:!0},options:{type:Object,required:!0}},setup(o){const t=o,r=p(()=>{var i;return!((i=t.data)!=null&&i.length)||!t.options.xAxis?[]:t.data.map(e=>e[t.options.xAxis])}),n=p(()=>{var e;return!((e=t.data)!=null&&e.length)||!t.options.yAxis?[]:(typeof t.options.yAxis=="string"?[t.options.yAxis]:t.options.yAxis).filter(a=>t.data[0].hasOwnProperty(a==null?void 0:a.column)||t.data[0].hasOwnProperty(a)).map(a=>({label:a,data:t.data.map(c=>c[a])}))}),s=p(()=>y(r.value,n.value,t.options));return(i,e)=>(d(),u(l,{title:t.options.title,options:s.value},null,8,["title","options"]))}};export{L as default};