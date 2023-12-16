var k=Object.defineProperty,B=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var L=(r,e,t)=>e in r?k(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,I=(r,e)=>{for(var t in e||(e={}))P.call(e,t)&&L(r,t,e[t]);if(S)for(var t of S(e))T.call(e,t)&&L(r,t,e[t]);return r},_=(r,e)=>B(r,F(e));import{_ as w}from"./BaseChart-3eb553bf.js";import{g as z}from"./colors-b352916e.js";import{k as g}from"./index-61e7aa99.js";import{f as h,v as E,G as M}from"./frappe-ui-24524c82.js";function X(r,e,t){var b;if(!(r!=null&&r.length)||!((b=e==null?void 0:e.data)!=null&&b.length))return{};const d=e.data.slice(0,parseInt(t.maxSlices)||9),a=e.data.slice(parseInt(t.maxSlices)||9).reduce((n,i)=>n+i,0),l=d.map((n,i)=>({name:r[i],value:n}));a&&l.push({name:"Others",value:a});const o={type:"plain",bottom:0};let c=["50%","50%"],s="70%";if(!t.inlineLabels&&t.labelPosition){const n=t.labelPosition;y(n)}function y(n){switch(o.type=t.scrollLabels?"scroll":"plain",o.orient=n==="Top"||n==="Bottom"?"horizontal":"vertical",n){case"Top":s="70%",o.top=0,o.left="center",c=["50%","60%"],o.padding=20;break;case"Bottom":s="70%",o.bottom=0,o.left="center",c=["50%","43%"],o.padding=[20,20,10,20];break;case"Right":s="80%",c=["33%","50%"],o.left="63%",o.top="middle",o.padding=[20,0,20,0];break;case"Left":s="80%",c=["67%","50%"],o.right="63%",o.top="middle",o.padding=[20,0,20,0];break}}function C({name:n,percent:i}){return`${g(n,20)} (${i.toFixed(0)}%)`}function A(n){let i=e.data.reduce((u,f)=>u+f,0);const p=r.indexOf(n);if(p===-1&&n=="Others"){const f=e.data.slice(parseInt(t.maxSlices)||9).reduce(($,v)=>$+v,0)/i*100;return`${g(n,20)} (${f.toFixed(0)}%)`}const m=e.data[p]/i*100;return`${g(n,20)} (${m.toFixed(0)}%)`}function O(n){let i=e.data.reduce((m,u)=>m+u,0);const p=n/i*100;return`${n} (${p.toFixed(0)}%)`}return{animation:!1,color:t.colors||z(),series:[{type:"pie",name:e.label,data:l,center:c,radius:s,labelLine:{show:t.inlineLabels,lineStyle:{width:2},length:10,length2:20,smooth:!0},label:{show:t.inlineLabels,formatter:C},emphasis:{scaleSize:5}}],tooltip:{trigger:"item",confine:!0,appendToBody:!1,valueFormatter:O},legend:t.inlineLabels?void 0:_(I({type:"plain",icon:"circle",pageIconSize:12,pageIconColor:"#64748B",pageIconInactiveColor:"#C0CCDA",pageFormatter:"{current}",pageButtonItemGap:2},o),{formatter:A})}}const H={__name:"Pie",props:{data:{type:Object,required:!0},options:{type:Object,required:!0}},setup(r){const e=r,t=h(()=>{var a;return!((a=e.data)!=null&&a.length)||!e.options.xAxis?[]:e.data.map(l=>l[e.options.xAxis])}),x=h(()=>{var a;return!((a=e.data)!=null&&a.length)||!e.options.yAxis?{}:{label:e.options.yAxis,data:e.data.map(l=>l[e.options.yAxis])}}),d=h(()=>X(t.value,x.value,e.options));return(a,l)=>(E(),M(w,{title:e.options.title,options:d.value},null,8,["title","options"]))}};export{H as default};
