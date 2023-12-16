import{X as k,W as z}from"./index-61e7aa99.js";import{k as W,r as f,f as S,w as Z,v,G as R,H as x,y as Q,N as l,C as w,aC as V,x as C,F as O,E as ee,z as H,B as M,ad as te,n as N,M as Y,L as m,J as oe,K as le,O as ae,a5 as G}from"./frappe-ui-24524c82.js";import{a as D,H as ne,b as I}from"./colors-b352916e.js";import{c as se}from"./index-45270e13.js";import{_ as re}from"./Tabs-2e22988b.js";import{_ as ue}from"./UsePopover-9747e78c.js";const de={ref:"colorPicker",class:"dark:bg-zinc-900 rounded-lg bg-white p-3 shadow-lg"},ie=["onMousedown","onClick"],ce=["onMousedown"],pe=["onMousedown"],me=["onMousedown"],fe={ref:"colorPalette"},ve={class:"mt-3 flex flex-wrap gap-1.5"},he=["onClick"],ge=l("g",{fill:"none","fill-rule":"evenodd"},[l("path",{d:"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"}),l("path",{fill:"currentColor",d:"M20.477 3.511a3 3 0 0 0-4.243 0l-1.533 1.533a2.991 2.991 0 0 0-3.41.581l-.713.714a2 2 0 0 0 0 2.829l-6.486 6.485a3 3 0 0 0-.878 2.122v1.8a1.2 1.2 0 0 0 1.2 1.2h1.8a3 3 0 0 0 2.12-.88l6.486-6.484a2 2 0 0 0 2.829 0l.714-.715a2.991 2.991 0 0 0 .581-3.41l1.533-1.532a3 3 0 0 0 0-4.243ZM5.507 17.067l6.485-6.485l1.414 1.414l-6.485 6.486a1 1 0 0 1-.707.293h-1v-1a1 1 0 0 1 .293-.707Z"})],-1),be=[ge],we=W({__name:"ColorPicker",props:{placement:{type:String,default:"bottom-start"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(h,{emit:g}){const c=h,e=f(null),d=f(null),u=f(null),b=f(null),i=f({x:0,y:0}),n=f({x:0,y:0});let p="#FFF";const{isSupported:r,sRGBHex:$,open:j}=se(),T=S(()=>D(c.modelValue)),A=["#FF6633","#FFB399","#FF33FF","#00B3E6","#E6B333","#3366E6","#999966","#99FF99"];r.value||A.push("#B34D4D");const q=t=>{const{width:a,height:o}=d.value.getBoundingClientRect(),{s,v:_}=I(t);let y=k(s*a,0,a),K=k((1-_)*o,0,o);i.value={x:y,y:K}},J=t=>{const{width:a}=e.value.getBoundingClientRect(),{h:o}=I(t),s=o/360*a;n.value={x:s,y:0}},U=t=>{B(t);const a=o=>{o.preventDefault(),B(o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o=>{document.removeEventListener("mousemove",a),o.preventDefault()},{once:!0})},X=t=>{L(t);const a=o=>{o.preventDefault(),L(o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o=>{document.removeEventListener("mousemove",a),o.preventDefault()},{once:!0})};function B(t){const a=t.clientX,o=t.clientY,s=d.value.getBoundingClientRect();let _=a-s.left,y=o-s.top;_=k(_,0,s.width),y=k(y,0,s.height),i.value={x:_,y},E()}function L(t){const a=e.value.getBoundingClientRect(),{clientX:o}=t;let s=o-a.left;s=k(s,0,a.width),n.value={x:s,y:0},E()}function F(t){t&&N(()=>{q(t),J(t)})}const P=S(()=>{if(!e.value)return 0;const t=n.value.x||0,a=e.value.getBoundingClientRect().width||1;return Math.round(t/a*360)}),E=()=>{N(()=>{const t=d.value.getBoundingClientRect(),a=Math.round(i.value.x/t.width*100),o=100-Math.round(i.value.y/t.height*100),s=P.value;p=ne(s,a,o),g("update:modelValue",p)})};return Z($,()=>{!r.value||!$.value||g("update:modelValue",$.value)}),Z(()=>c.modelValue,t=>{t!==p&&F(D(t))},{immediate:!0}),(t,a)=>(v(),R(H(te),{transition:"default",placement:h.placement,class:"!block w-full",popoverClass:"!min-w-fit"},{target:x(({togglePopover:o,isOpen:s})=>[Q(t.$slots,"target",{togglePopover:()=>{o(),F(T.value)},isOpen:s})]),body:x(()=>[l("div",de,[l("div",{ref_key:"colorMap",ref:d,style:w({background:`
							linear-gradient(0deg, black, transparent),
							linear-gradient(90deg, white, transparent),
							hsl(${P.value}, 100%, 50%)
						`}),onMousedown:V(U,["stop"]),class:"relative m-auto h-24 w-44 rounded-md",onClick:V(B,["prevent"])},[l("div",{ref_key:"colorSelector",ref:b,onMousedown:V(U,["stop"]),class:"absolute rounded-full border border-black border-opacity-20 before:absolute before:h-full before:w-full before:rounded-full before:border-2 before:border-white before:bg-[currentColor] after:absolute after:left-[2px] after:top-[2px] after:h-[calc(100%-4px)] after:w-[calc(100%-4px)] after:rounded-full after:border after:border-black after:border-opacity-20 after:bg-transparent",style:w({height:"12px",width:"12px",left:`calc(${i.value.x}px - 6px)`,top:`calc(${i.value.y}px - 6px)`,color:T.value,background:"transparent"})},null,44,ce)],44,ie),l("div",{ref_key:"hueMap",ref:e,class:"relative m-auto mt-2 h-3 w-44 rounded-md",onClick:L,onMousedown:V(X,["stop"]),style:w({background:`
							linear-gradient(90deg, hsl(0, 100%, 50%),
							hsl(60, 100%, 50%), hsl(120, 100%, 50%),
							hsl(180, 100%, 50%), hsl(240, 100%, 50%),
							hsl(300, 100%, 50%), hsl(360, 100%, 50%))
						`})},[l("div",{ref_key:"hueSelector",ref:u,onMousedown:V(X,["stop"]),class:"absolute rounded-full border border-[rgba(0,0,0,.2)] before:absolute before:h-full before:w-full before:rounded-full before:border-2 before:border-white before:bg-[currentColor] after:absolute after:left-[2px] after:top-[2px] after:h-[calc(100%-4px)] after:w-[calc(100%-4px)] after:rounded-full after:border after:border-[rgba(0,0,0,.2)] after:bg-transparent",style:w({height:"12px",width:"12px",left:`calc(${n.value.x}px - 6px)`,color:`hsl(${P.value}, 100%, 50%)`,background:"transparent"})},null,44,me)],44,pe),l("div",fe,[l("div",ve,[(v(),C(O,null,ee(A,o=>l("div",{key:o,class:"h-3.5 w-3.5 cursor-pointer rounded-full shadow-sm",onClick:()=>{F(o),E()},style:w({background:o})},null,12,he)),64)),H(r)?(v(),C("svg",{key:0,class:"dark:text-zinc-300 text-gray-700",onClick:a[0]||(a[0]=()=>H(j)()),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},be)):M("",!0)])],512)],512)]),_:3},8,["placement"]))}}),xe={class:"relative flex items-center justify-between"},_e=["onClick"],ye=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},[l("path",{fill:"currentColor",d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})],-1),ke=[ye],Ve={__name:"ColorInput",props:{modelValue:String,placement:String},emits:["update:modelValue"],setup(h,{emit:g}){const c=h,e=S({get:()=>c.modelValue,set:u=>g("update:modelValue",u)}),d=u=>e.value=D(u);return(u,b)=>{const i=Y("Input");return v(),R(we,{modelValue:e.value,"onUpdate:modelValue":d,placement:h.placement},{target:x(({togglePopover:n})=>[l("div",xe,[l("div",{class:"absolute left-2 top-[6px] z-10 h-4 w-4 rounded shadow-sm",onClick:n,style:w({background:e.value?e.value:"url(/assets/website_builder/frontend/color-circle.png) center / contain"})},null,12,_e),m(i,{type:"text",class:"dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:bg-zinc-700 w-full rounded-md text-sm text-gray-700",placeholder:"Select Color",inputClass:"pl-8 pr-6",modelValue:e.value,"onUpdate:modelValue":d},null,8,["modelValue"]),oe(l("div",{class:"dark:text-zinc-300 absolute right-1 top-[3px] cursor-pointer p-1 text-gray-700",onClick:b[0]||(b[0]=(...p)=>u.clearValue&&u.clearValue(...p))},ke,512),[[le,e.value]])])]),_:1},8,["modelValue","placement"])}}},Ce={class:"-m-1 flex flex-1 items-center space-x-2 overflow-hidden p-1"},Me={class:"h-7 w-full flex-1 truncate rounded bg-gray-100 py-1 px-2 leading-5"},Se={class:"h-fit max-h-[16rem] w-[15rem] space-y-3 overflow-y-scroll rounded bg-white p-3 text-base shadow"},$e=l("p",{class:"text-gray-700"},"Series Options",-1),Be={key:0},Le=l("span",{class:"mb-1 block text-sm leading-4 text-gray-700"}," Axis Type ",-1),Fe={class:"space-y-2 text-gray-600"},Pe={class:"space-y-2 text-gray-600"},Ee={class:"space-y-2 text-gray-600"},ze={class:"flex justify-end"},Xe={__name:"SeriesOption",props:{modelValue:{required:!0},seriesType:{type:String}},emits:["update:modelValue","remove"],setup(h,{emit:g}){const c=h,e=S({get:()=>c.modelValue,set:i=>g("update:modelValue",i)});c.seriesType&&(e.value.type=c.seriesType),e.value.column||(e.value.column={}),e.value.type||(e.value.type="bar");const d=f(null),u=f(!1);function b(){g("remove"),u.value=!1}return(i,n)=>{const p=Y("Button");return v(),C("div",Ce,[l("div",Me,ae(e.value.column),1),l("div",{ref_key:"menuAnchor",ref:d,class:"flex-shrink-0"},[m(p,{icon:"more-horizontal",variant:"subtle",onClick:n[0]||(n[0]=r=>u.value=!u.value)}),d.value?(v(),R(ue,{key:0,show:u.value,targetElement:d.value,placement:"right-start"},{default:x(()=>[l("div",Se,[$e,c.seriesType?M("",!0):(v(),C("div",Be,[Le,m(re,{modelValue:e.value.type,"onUpdate:modelValue":n[1]||(n[1]=r=>e.value.type=r),tabs:[{label:"Line",value:"line"},{label:"Bar",value:"bar"}]},null,8,["modelValue"])])),m(Ve,{label:"Color",modelValue:e.value.color,"onUpdate:modelValue":n[2]||(n[2]=r=>e.value.color=r),placement:"right-start"},null,8,["modelValue"]),e.value.type=="line"?(v(),C(O,{key:1},[l("div",Fe,[m(z,{modelValue:e.value.smoothLines,"onUpdate:modelValue":n[3]||(n[3]=r=>e.value.smoothLines=r),label:"Enable Curved Lines"},null,8,["modelValue"])]),l("div",Pe,[m(z,{modelValue:e.value.showPoints,"onUpdate:modelValue":n[4]||(n[4]=r=>e.value.showPoints=r),label:"Show Data Points"},null,8,["modelValue"])]),l("div",Ee,[m(z,{modelValue:e.value.showArea,"onUpdate:modelValue":n[5]||(n[5]=r=>e.value.showArea=r),label:"Show Area"},null,8,["modelValue"])])],64)):M("",!0),l("div",ze,[m(p,{variant:"ghost",onClick:n[6]||(n[6]=r=>u.value=!1)},{default:x(()=>[G(" Close ")]),_:1}),m(p,{variant:"ghost",theme:"red",onClick:b},{default:x(()=>[G(" Remove ")]),_:1})])])]),_:1},8,["show","targetElement"])):M("",!0)],512)])}}};export{Xe as _};