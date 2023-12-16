import{F as i}from"./index-61e7aa99.js";import{f as d,M as n,v as f,x as y,L as u,N as a}from"./frappe-ui-24524c82.js";const C={class:"space-y-4"},_=a("span",{class:"mb-2 block text-sm leading-4 text-gray-700"},"Date Column",-1),g=a("span",{class:"mb-2 block text-sm leading-4 text-gray-700"},"Value Column",-1),k=a("span",{class:"mb-2 block text-sm leading-4 text-gray-700"},"Prefix",-1),T=a("span",{class:"mb-2 block text-sm leading-4 text-gray-700"},"Suffix",-1),L={__name:"TrendOptions",props:{modelValue:{type:Object,required:!0},columns:{type:Array,required:!0}},emits:["update:modelValue"],setup(V,{emit:v}){const s=V,l=d({get:()=>s.modelValue,set:o=>v("update:modelValue",o)}),x=d(()=>{var o;return(o=s.columns)==null?void 0:o.filter(e=>i.DATE.includes(e.type)).map(e=>({label:e.label,value:e.label,description:e.type}))}),c=d(()=>{var o;return(o=s.columns)==null?void 0:o.filter(e=>i.NUMBER.includes(e.type)).map(e=>({label:e.label,value:e.label,description:e.type}))});return(o,e)=>{const b=n("FormControl"),r=n("Autocomplete"),p=n("Input"),m=n("Checkbox");return f(),y("div",C,[u(b,{type:"text",label:"Title",class:"w-full",modelValue:l.value.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.title=t),placeholder:"Title"},null,8,["modelValue"]),a("div",null,[_,u(r,{modelValue:l.value.dateColumn,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.dateColumn=t),returnValue:!0,options:x.value},null,8,["modelValue","options"])]),a("div",null,[g,u(r,{modelValue:l.value.valueColumn,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.valueColumn=t),returnValue:!0,options:c.value},null,8,["modelValue","options"])]),a("div",null,[k,u(p,{type:"text",modelValue:l.value.prefix,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.prefix=t),placeholder:"Enter a prefix..."},null,8,["modelValue"])]),a("div",null,[T,u(p,{type:"text",modelValue:l.value.suffix,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value.suffix=t),placeholder:"Enter a suffix..."},null,8,["modelValue"])]),u(m,{modelValue:l.value.showTrendLine,"onUpdate:modelValue":e[5]||(e[5]=t=>l.value.showTrendLine=t),label:"Show Trend Line"},null,8,["modelValue"]),u(m,{modelValue:l.value.shorten,"onUpdate:modelValue":e[6]||(e[6]=t=>l.value.shorten=t),label:"Shorten Numbers"},null,8,["modelValue"])])}}};export{L as default};
