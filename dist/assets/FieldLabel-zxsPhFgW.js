import{a as x}from"./Field-XnJAUV9C.js";import{au as k,k as u,o as n,c as i,n as a,u as t,t as z,f as d,a as A,h as g,b as h,P as B,Q as S,e as w,av as p}from"./index-xYmB9ZvX.js";const F=["for"],L={__name:"FieldLabel",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null},horizontal:Boolean,addons:Boolean,grouped:Boolean,multiline:Boolean,errors:{type:Array,default:[]},error:{type:String,default:null},success:{type:String,default:null},baseClass:{type:Array,default:[]},wrapperClass:{type:Array,default:[]},labelClass:{type:Array,default:[]}},setup(e){const s=e,c=k(),f=u(()=>{const l=["last:mb-0",s.multiline?"-mb-3":"mb-6"];return s.horizontal&&l.push("grid grid-cols-1 lg:gap-6 lg:grid-cols-5"),s.baseClass.length>0?s.baseClass:l}),m=u(()=>{const l=[],r=c.default().length;return s.horizontal&&(l.push("lg:col-span-4"),s.label&&l.push("lg:col-start-2")),s.grouped&&l.push("space-x-3"),s.multiline&&l.push("flex-wrap"),s.addons||s.grouped||s.multiline?(l.push("flex justify-start"),l):(r>1&&l.push("grid grid-cols-1 gap-3"),r===2&&l.push("md:grid-cols-2"),r>=3&&l.push("md:grid-cols-3"),s.wrapperClass.length>0?s.wrapperClass:l)}),b=u(()=>{const l=["block font-bold mb-2"];return s.horizontal&&l.push("lg:mb-0"),(s.errors.length>0||s.error)&&l.push(p.danger),s.success&&l.push(p.success),s.labelClass.length>0?s.labelClass:l});return(l,r)=>{const o=x;return n(),i("div",{class:a(t(f))},[e.label?(n(),i("label",{key:0,for:e.labelFor,class:a(t(b))},z(e.label),11,F)):d("",!0),A("div",{class:a(t(m))},[t(c).leftAddon?g(l.$slots,"leftAddon",{key:0}):d("",!0),g(l.$slots,"default"),t(c).rightAddon?g(l.$slots,"rightAddon",{key:1}):d("",!0)],2),h(o,{text:e.error,type:"error",class:a([{"lg:col-start-2 lg:col-span-4 lg:-mt-5":e.horizontal},"has-error"])},null,8,["text","class"]),(n(!0),i(B,null,S(e.errors,(y,C)=>(n(),w(o,{key:C,text:y,type:"error",class:a([{"lg:col-start-2 lg:col-span-4 lg:-mt-5":e.horizontal},"has-error"])},null,8,["text","class"]))),128)),h(o,{text:e.success,type:"success",class:a([{"lg:col-start-2 lg:col-span-4 lg:-mt-5":e.horizontal},"has-success"])},null,8,["text","class"]),h(o,{text:e.help,class:a([{"lg:col-start-2 lg:col-span-4 lg:-mt-5":e.horizontal},"has-help"])},null,8,["text","class"])],2)}}};export{L as _};