import{r as G,f as _,i as J,M as b,v as s,G as N,H as u,L as n,N as r,z as c,ai as M,A as O,x as o,F as P,E as I,O as d,J as k,ag as q,af as H,a0 as K,B as C,ah as Q,K as V,aC as T,a5 as j,ae as U}from"./frappe-ui-24524c82.js";const X={class:"w-full"},Y={key:0,class:"flex w-[calc(100%-1rem)] space-x-1.5 p-0.5 text-gray-800"},R={class:"text-ellipsis whitespace-nowrap"},W={key:1,class:"text-base text-gray-600"},Z={class:"rounded rounded-t-none bg-white px-1.5 shadow"},ee={class:"sticky top-0 mb-1.5 flex items-stretch space-x-1.5 bg-white pt-1.5"},le={class:"relative -m-1 flex flex-1 overflow-hidden p-1"},ae={key:0,class:"absolute right-2 flex h-full items-center"},te={key:0,class:"flex h-7 w-full items-center rounded bg-gray-50 px-3 text-sm font-light"},se={class:"flex items-baseline space-x-2"},ne={key:0,class:"text-sm font-light text-gray-600"},re={class:"sticky bottom-0 flex justify-end space-x-2 bg-white py-2"},oe={__name:"ListPicker",props:{label:{type:String,default:""},placeholder:{type:String,default:""},value:Array,modelValue:Array,options:{type:Array,default:[]},loading:{type:Boolean,default:!1}},emits:["inputChange","change","update:modelValue","apply"],setup(g,{emit:m}){const y=g,v=G(""),S=_(()=>B(y.options.slice()));function B(e){return!e||e.length===0?[]:(e[0].hasOwnProperty("label")&&e[0].hasOwnProperty("value"),typeof e[0]=="string"&&(e=e.map(l=>({label:l,value:l}))),e=e.filter((l,h,i)=>l&&l.value&&i.findIndex(x=>x.value===l.value)===h),e)}const z=y.modelValue?"modelValue":"value",t=_({get(){var e;return B((e=y[z])==null?void 0:e.slice())},set(e){m("change",e),m("update:modelValue",e)}});function $(e){return t.value.findIndex(l=>l.value===e.value)>-1}function F(e){$(e)?t.value=t.value.filter(l=>l.value!==e.value):t.value=[...t.value,e]}const L=J("$utils"),f=_(()=>v.value?L.fuzzySearch(S.value,{term:v.value,keys:["label","value"]}):S.value),D=()=>{t.value=t.value.length>0?[]:f.value};return(e,l)=>{const h=b("FeatherIcon"),i=b("Button"),x=b("Popover");return s(),N(c(U),{multiple:"",nullable:"",modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=p=>t.value=p)},{default:u(({open:p})=>[n(x,{class:"w-full"},{target:u(({open:w})=>[r("div",X,[n(c(M),{class:O(["form-input flex h-fit w-full items-center justify-between rounded border-gray-400 bg-gray-100",{"rounded-b-none":p,"p-1":t.value.length>0,"px-3 py-1.5":t.value.length===0}]),onClick:a=>w()},{default:u(()=>[t.value.length>0?(s(),o("span",Y,[(s(!0),o(P,null,I(t.value,a=>(s(),o("span",{class:"flex h-6 items-center rounded bg-white px-2 text-sm shadow",key:a.value||a},[r("span",R,d(a.label||a.value||a),1)]))),128))])):(s(),o("span",W,d(g.placeholder||""),1)),n(h,{name:"chevron-down",class:"h-4 w-4 text-gray-600","aria-hidden":"true"})]),_:2},1032,["class","onClick"])])]),body:u(({close:w})=>[k(r("div",Z,[n(c(q),{static:"",class:"max-h-[20rem] overflow-y-auto"},{default:u(()=>[r("div",ee,[r("div",le,[n(c(H),{class:"form-input block w-full border-gray-400 placeholder-gray-500",ref:"input",type:"text",onChange:l[0]||(l[0]=a=>{v.value=a.target.value,m("inputChange",a.target.value)}),value:v.value,autocomplete:"off",placeholder:"Search..."},null,8,["value"]),g.loading?(s(),o("div",ae,[n(c(K),{class:"h-3 w-3"})])):C("",!0)]),n(i,{icon:"x",onClick:l[1]||(l[1]=a=>t.value=[])})]),f.value.length===0?(s(),o("div",te," No results found ")):C("",!0),(s(!0),o(P,null,I(f.value,(a,E)=>k((s(),N(c(Q),{key:E,value:a,onClick:()=>{e.$refs.input.el.focus(),F(a)}},{default:u(({active:A})=>[r("div",{class:O(["flex h-7 w-full cursor-pointer items-center justify-between rounded px-3 text-base",{"bg-gray-100 text-gray-800":A,"bg-white":!A}])},[r("div",se,[r("span",null,d(a.label),1),a.description?(s(),o("span",ne,d(a.description),1)):C("",!0)]),k(n(h,{name:"check",class:"h-4 w-4"},null,512),[[V,$(a)]])],2)]),_:2},1032,["value","onClick"])),[[V,f.value.length>0]])),128)),r("div",re,[n(i,{variant:"secondary",onClick:l[2]||(l[2]=T(a=>D(),["prevent","stop"]))},{default:u(()=>[j(d(t.value.length>0?"Clear":"Select All"),1)]),_:1}),n(i,{variant:"solid",onClick:a=>e.$emit("apply",t.value)||w()},{default:u(()=>[j(" Apply ")]),_:2},1032,["onClick"])])]),_:2},1024)],512),[[V,p]])]),_:2},1024)]),_:1},8,["modelValue"])}}};export{oe as _};