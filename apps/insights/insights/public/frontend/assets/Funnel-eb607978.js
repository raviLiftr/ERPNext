import{_ as l}from"./BaseChart-3eb553bf.js";import{B as u}from"./index-61e7aa99.js";import{g as d}from"./colors-b352916e.js";import{f as s,v as m,G as f}from"./frappe-ui-24524c82.js";function g(e,t,a){var p,r;if(!(e!=null&&e.length)||!((p=t==null?void 0:t.data)!=null&&p.length))return{};const n=a.colors.length?a.colors:d();return{animation:!1,color:n,tooltip:{trigger:"item",confine:!0,appendToBody:!1,formatter:o=>isNaN(o)?o:u(o)},legend:{data:e,orient:"vertical",left:"5%",top:"center",formatter:o=>{const i=e.indexOf(o),c=(t.data[i]/t.data[0]*100).toFixed(2);return`${o} (${c}%)`}},series:[{name:t.label,type:"funnel",colorBy:"data",orient:"vertical",funnelAlign:"center",top:"center",left:"30%",width:"60%",height:"80%",min:0,max:100,minSize:"10%",maxSize:"100%",sort:"descending",label:{show:!0,position:"inside",formatter:"{c}"},gap:14,data:(r=t.data)==null?void 0:r.map((o,i)=>({name:e[i],value:o,itemStyle:{borderColor:n[i],borderWidth:10,borderCap:"round",borderJoin:"round"},emphasis:{itemStyle:{color:n[i],borderColor:n[i],borderWidth:15,borderCap:"round",borderJoin:"round"}}}))}]}}const C={__name:"Funnel",props:{data:{type:Object,required:!0},options:{type:Object,required:!0}},setup(e){const t=e,a=s(()=>{var r;return!((r=t.data)!=null&&r.length)||!t.options.xAxis?[]:t.data.map(o=>o[t.options.xAxis])}),n=s(()=>{var r;return!((r=t.data)!=null&&r.length)||!t.options.yAxis?{}:{label:t.options.yAxis,data:t.data.map(o=>o[t.options.yAxis])}}),p=s(()=>g(a.value,n.value,t.options));return(r,o)=>(m(),f(l,{title:t.options.title,options:p.value},null,8,["title","options"]))}};export{C as default};