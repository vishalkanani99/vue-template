import{_ as S}from"./Card-ycr6M0j0.js";import{o as y,e as L,w as p,a as s,t as C,b as m,u,q as M,h as c,n as g,j as x,k as w,c as k,L as b,s as R,O as V,a8 as j,a6 as A}from"./index-xYmB9ZvX.js";const z={__name:"ModalCard",props:{title:String,height:{type:String,default:"h-screen"},width:String,position:String,spacing:String,leftBtnLabel:{type:String,default:"Save"},rightBtnLabel:{type:String,default:"Close"}},emits:["leftBtnClick","rightBtnClick","close"],setup(e,{emit:h}){return(n,a)=>{const i=x,r=S;return y(),L(r,{class:g(["!absolute z-[100] max-w-full",e.height,e.width,e.position,e.spacing]),contentClass:"overflow-x-hidden overflow-y-auto",headerClass:["flex","flex-row","justify-between","items-center"],footerClass:["flex","flex-row","justify-between","items-center"]},{header:p(()=>[s("h2",null,C(e.title),1),m(i,{icon:u(M),roundedFull:"",onClick:a[0]||(a[0]=o=>n.$emit("close"))},null,8,["icon"])]),footer:p(()=>[m(i,{label:e.leftBtnLabel,onClick:a[1]||(a[1]=o=>n.$emit("leftBtnClick"))},null,8,["label"]),m(i,{class:"ml-2",color:"whiteDark",label:e.rightBtnLabel,onClick:a[2]||(a[2]=o=>n.$emit("rightBtnClick"))},null,8,["label"])]),default:p(()=>[c(n.$slots,"default")]),_:3},8,["class"])}}},F={__name:"Modal",props:{modelValue:Boolean,immortal:Boolean,from:{type:String,default:"top",validator(e){return["left","right","top","bottom"].includes(e)}},height:{type:[String,Array],default:"h-screen"},width:[String,Array],position:[String,Array],spacing:[String,Array],title:String,leftBtnLabel:{type:String,default:"Save"},rightBtnLabel:{type:String,default:"Close"}},emits:["update:modelValue","leftBtnClick"],setup(e,{emit:h}){const n=e,a=h,i=w({get:()=>n.modelValue,set:l=>{a("update:modelValue",l)}}),r=w(()=>{let l=i.value?"translate-x-0":"-translate-x-full";return n.from==="right"&&(l=i.value?"translate-x-0":"translate-x-full"),n.from==="top"&&(l=i.value?"translate-y-0":"-translate-y-full"),n.from==="bottom"&&(l=i.value?"translate-y-0":"translate-y-full"),l}),o=(l="overlayer")=>{n.immortal&&l==="overlayer"||(i.value=!1)};return(l,t)=>{const v=z;return y(),k("div",{class:g([u(r),"fixed flex flex-col z-[90] justify-center items-center inset-0 overflow-hidden transition-all"])},[s("div",{class:g(["absolute inset-0 bg-light opacity-80",{"cursor-pointer":!e.immortal}]),onClick:t[0]||(t[0]=f=>o())},null,2),m(v,{title:e.title,leftBtnLabel:e.leftBtnLabel,rightBtnLabel:e.rightBtnLabel,height:e.height,width:e.width,position:e.position,spacing:e.spacing,onClose:t[1]||(t[1]=f=>o()),onRightBtnClick:t[2]||(t[2]=f=>o()),onLeftBtnClick:t[3]||(t[3]=f=>a("leftBtnClick"))},{default:p(()=>[c(l.$slots,"default")]),_:3},8,["title","leftBtnLabel","rightBtnLabel","height","width","position","spacing"])],2)}}},H={class:"order-first"},D={class:"order-last"},O={__name:"Collapse",props:{expanded:{type:Boolean,default:!1},plain:Boolean,title:String},emits:["toggle"],setup(e,{expose:h,emit:n}){const a=e,i=n,r=b(null),o=b(null),l=b(null),t=R(!1),v=()=>{t.value=!t.value,i("toggle",r.value),f(0),t.value&&f(l.value.offsetHeight)},f=d=>{o.value.style.maxHeight=`${d}px`};return h({containerRef:r,setMaxHeight:f,expand:t}),V(()=>{a.expanded&&v()}),(d,B)=>{const $=x;return y(),k("div",{ref_key:"containerRef",ref:r,class:g({"border-2 shadow-md block":!e.plain})},[s("div",{class:g(["flex flex-row flex-wrap justify-between items-center cursor-pointer",{"border-b-2 py-3 px-6":!e.plain}]),onClick:B[0]||(B[0]=N=>v())},[c(d.$slots,"header",{expand:u(t)},()=>[s("div",H,[c(d.$slots,"title",{},()=>[s("h4",null,C(e.title),1)])]),s("div",D,[c(d.$slots,"button",{expand:u(t)},()=>[m($,{class:"focus:!ring-0 !bg-light hover:bg-stone-200",color:"white",icon:u(t)?u(j):u(A)},null,8,["icon"])])])])],2),s("div",{ref_key:"wrapperRef",ref:o,class:"max-h-0 transition-[max-height] delay-0 duration-500 ease-in-out overflow-hidden"},[s("div",{ref_key:"contentRef",ref:l},[c(d.$slots,"default")],512)],512)],2)}}};export{O as _,F as a};