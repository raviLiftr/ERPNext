import{F as l}from"./index-61e7aa99.js";import{g as x}from"./results-60b5fd7f.js";import{a as T}from"./frappe-ui-24524c82.js";function R(u={}){const e=T({query:null,data:[],rawData:[],recommendedChart:{},loading:!1,error:null});function n(s){if(s)return e.loading=!0,u.resultsFetcher().then(a=>{e.loading=!1,e.rawData=x(a),e.data=D(e.rawData)})}u.query&&n(u.query);function o(s){return L(e.rawData,s)}return Object.assign(e,{load:n,getGuessedChart:o})}function L(u,e){var c,m;const[n,...o]=u,s=n.filter(t=>l.NUMBER.includes(t.type)),a=n.filter(t=>l.DATE.includes(t.type)),r=n.filter(t=>l.TEXT.includes(t.type)),C=n.length===1&&s.length===1,d=e==="Auto"&&C,g=e==="Number"&&s.length>=1;if(d||g)return{type:"Number",options:{column:s[0].label,shorten:!1}};const h=a.length>=1&&s.length>=1;if(e==="Auto"&&h||e==="Line"&&h)return{type:"Line",options:{xAxis:a[0].label,yAxis:s.map(t=>({column:t.label}))}};r.length>=1&&s.length>=1;const b=n.findIndex(t=>l.TEXT.includes(t.type)),f=new Set(o.map(t=>t[b])).size<=10,G=r.length===1&&s.length===1;if(e==="Auto"&&G&&f||e==="Pie")return{type:"Pie",options:{xAxis:(c=r[0])==null?void 0:c.label,yAxis:(m=s[0])==null?void 0:m.label}};const A=a.length>=1||r.length>=1;if(e==="Auto"&&A||e==="Bar"){const t=r.length?r[0].label:a.length?a[0].label:"",p=new Set(o.map(i=>i[t])).size;return{type:"Bar",options:{xAxis:t,yAxis:s.map(i=>i.label),rotateLabels:p>10?"90":"0"}}}return e==="Auto"||e==="Table"?{type:"Table",options:{columns:n.map(t=>t.label)}}:{type:e,options:{}}}function D(u){return u.slice(1).map(e=>u[0].reduce((n,{label:o},s)=>(n[o]=e[s],n),{}))}export{D as c,L as g,R as u};