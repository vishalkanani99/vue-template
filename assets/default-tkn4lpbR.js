import{_ as z,r as F,o as d,c as f,a as e,b as l,w as u,d as g,n as x,e as V,f as k,t as H,u as t,m as U,g as j,h as w,i as P,j as B,k as $,R as N,l as Y,p as W,v as K,q as A,s as R,x as S,y as G,z as Q,A as q,B as J,C as X,D as Z,E,F as ee,G as te,H as oe,I as le,J as ne,K as se,L as M,M as ie,N as ae,O as re,P as O,Q as T,T as ce,S as ue,U as de,V as me,W as D,X as pe,Y as fe,Z as he,$ as _e}from"./index-J-z-JmSy.js";import{_ as ve,a as I}from"./Collapse-SQMAQOv-.js";import{_ as be}from"./Field-sYJxqz-C.js";import{u as ge}from"./useLodash-fAhxlbt0.js";import"./Card-X2Ra3TKb.js";const Ce={},xe={class:"flex flex-row flex-wrap bg-dark"},we={class:"flex flex-row flex-wrap w-full p-4 md:p-8"},ye={class:"w-full md:w-1/4 shrink-0 mb-8 md:mb-0"},$e=e("h4",null,"Quick Links",-1),ke={class:"mt-4 space-y-2"},Se={class:"w-full md:w-1/4 shrink-0 mb-8 md:mb-0"},Be=e("h4",null,"Popular Categories",-1),Le={class:"mt-4 space-y-2"},Ve={class:"w-full md:w-1/4 shrink-0 mb-8 md:mb-0"},Re=e("h4",null,"Company Links",-1),De={class:"mt-4 space-y-2"},Me=e("div",{class:"flex flex-col md:block flex-nowrap w-full md:w-1/4 shrink-0 mb-8 md:mb-0"},[e("h4",null,"Contact Us"),e("div",{class:"mt-4"},[e("p",null,"C-404, Dummy Society"),e("p",null,"Nr. Dummy Hotel, Dummy Road"),e("p",null,"City: Dummy, Post Code: 40404"),e("p",null,"Country: Dummy, State: Dummy"),e("p",null,"Phone: (+11) 4144 4444 21")])],-1),ze=e("div",{class:"flex items-center border-t w-full px-4 md:px-8 h-20"},[e("div",{class:"flex-1"},[e("p",{class:"text-center"},"© 2023 You Company Inc. All rights reserved.")])],-1);function Pe(s,r){const n=F("RouterLink");return d(),f("footer",xe,[e("div",we,[e("div",ye,[$e,e("ul",ke,[e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Home")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Shop")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Pages")]),_:1})])])]),e("div",Se,[Be,e("ul",Le,[e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Electronics")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Home Appliance")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Fashion")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Kitchen Ware")]),_:1})])])]),e("div",Ve,[Re,e("ul",De,[e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Career")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Privacy & Policy")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Help Center")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("About us")]),_:1})]),e("li",null,[l(n,{to:"/"},{default:u(()=>[g("Contact us")]),_:1})])])]),Me]),ze])}const Ee=z(Ce,[["render",Pe]]),Fe={class:"inline-flex justify-start items-center space-x-4"},He={key:1,class:"text-ellipsis line-clamp-1"},Ae={key:0,class:"inline-flex justify-end items-center space-x-4"},Oe={__name:"SidebarDropdown",props:{title:String,icon:String,isCompact:Boolean},setup(s){return(r,n)=>{const p=P,o=B,a=ve;return d(),f("li",null,[l(a,{plain:""},{header:u(({expand:_})=>[e("div",{class:x(["flex items-center w-full cursor-pointer py-3 px-6 theme-hover border-b border-stone-600",[s.isCompact?"justify-center":"justify-between"]])},[e("div",Fe,[s.icon?(d(),V(p,{key:0,class:"!flex-none",path:s.icon,size:"28"},null,8,["path"])):k("",!0),s.isCompact?k("",!0):(d(),f("span",He,H(s.title),1))]),s.isCompact?k("",!0):(d(),f("div",Ae,[l(o,{overrideClass:"flex justify-center items-center p-1",icon:_?t(U):t(j),iconSize:"24"},null,8,["icon"])]))],2)]),default:u(()=>[e("ul",null,[w(r.$slots,"default")])]),_:3})])}}},Te={class:"theme-hover border-b border-stone-600"},Ie={key:0,class:"grow text-ellipsis line-clamp-1"},Ue={__name:"SideBarMenuItem",props:{title:String,as:String,to:String,href:String,icon:String,isCompact:Boolean},setup(s){const r=s,n=$(()=>r.as?r.as:r.to?N:r.href?"a":"button");return(p,o)=>{const a=P;return d(),f("li",Te,[(d(),V(Y(t(n)),{to:s.to,href:s.href,class:x(["flex items-center cursor-pointer py-3 px-6 space-x-4",{"justify-center":s.isCompact}])},{default:u(()=>[l(a,{class:"!flex-none",path:s.icon,size:"28"},null,8,["path"]),s.isCompact?k("",!0):(d(),f("span",Ie,H(s.title),1))]),_:1},8,["to","href","class"]))])}}},je={class:"fixed flex flex-col z-[90] justify-center items-center inset-0 overflow-hidden"},Ne={__name:"OverLayer",props:{modelValue:Boolean,immortal:{type:Boolean,default:!0},hasCloseBtn:Boolean,closeBtnPosition:{type:String,default:"left",validator(s){return["left","right"].includes(s)}}},emits:["update:modelValue"],setup(s,{emit:r}){const n=s,p=r,o=$({get:()=>n.modelValue,set:h=>{p("update:modelValue",h)}}),a=(h="overlayer")=>{n.immortal&&h==="overlayer"||(o.value=!1)},_=$(()=>{let h="left-0";return n.closeBtnPosition==="right"&&(h="right-0"),h});return(h,c)=>{const i=B;return W((d(),f("div",je,[e("div",{class:x(["absolute inset-0 bg-light opacity-80",{"cursor-pointer":!s.immortal}]),onClick:c[0]||(c[0]=m=>a())},null,2),w(h.$slots,"default"),s.hasCloseBtn?(d(),V(i,{key:0,class:x(["fixed top-0 z-[100] m-2 p-2",t(_)]),icon:t(A),roundedFull:"",onClick:c[1]||(c[1]=m=>a("button"))},null,8,["class","icon"])):k("",!0)],512)),[[K,t(o)]])}}},Ye={class:"relative flex flex-row h-14 items-center bg-dark rounded-t-md"},We={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light"},Ke={class:"relative flex flex-row h-14 items-center bg-dark rounded-b-md"},Ge={class:"grow flex flex-row justify-center separator"},Qe={__name:"SideBar",props:{modelValue:Boolean,immortal:Boolean,position:{type:String,default:"left",validator(s){return["left","right"].includes(s)}}},emits:["update:modelValue"],setup(s,{emit:r}){const n=s,p=r,o=R(!1),a=$({get:()=>n.modelValue,set:i=>{p("update:modelValue",i)}}),_=$(()=>{let i=a.value?"left-0":"-left-full -translate-x-full";return n.position==="right"&&(i=a.value?"right-0":"-right-full translate-x-full"),i}),h=$(()=>n.position==="right"?"-left-8":"-right-8"),c=()=>{a.value=!1};return(i,m)=>{const C=Ne,y=B,b=Ue,L=Oe;return d(),f("div",null,[l(C,{modelValue:t(a),"onUpdate:modelValue":[m[0]||(m[0]=v=>S(a)?a.value=v:null),m[1]||(m[1]=v=>c())],immortal:s.immortal},null,8,["modelValue","immortal"]),e("aside",{class:x([[t(_),t(o)?"w-28 xs:w-32":"w-52 xs:w-72"],"flex items-center fixed inset-y-0 z-[100] max-w-full transition-all px-2 md:px-4"])},[e("div",{class:x(["flex flex-col h-dvh py-2 md:py-4",t(o)?"w-24 xs:w-28":"w-48 xs:w-64"])},[e("div",Ye,[w(i.$slots,"header",{},()=>[e("h4",{class:x(["flex-1 text-center",{"text-sm":t(o)}])},"Dmantu",2)]),l(y,{class:x([t(h),"absolute w-8 h-8"]),icon:t(A),roundedFull:"",onClick:m[2]||(m[2]=v=>c())},null,8,["class","icon"])]),e("div",We,[w(i.$slots,"default",{},()=>[e("ul",null,[l(b,{to:"/",icon:t(G),title:"Home",isCompact:t(o)},null,8,["icon","isCompact"]),l(b,{to:"/shop",icon:t(Q),title:"Shop",isCompact:t(o)},null,8,["icon","isCompact"]),l(L,{icon:t(Z),title:"Ecommerce",isCompact:t(o)},{default:u(()=>[l(b,{to:"/shop/single",icon:t(q),title:"Product Detail",isCompact:t(o)},null,8,["icon","isCompact"]),l(b,{to:"/cart",icon:t(J),title:"Cart",isCompact:t(o)},null,8,["icon","isCompact"]),l(b,{to:"/wishlist",icon:t(X),title:"Whishlist",isCompact:t(o)},null,8,["icon","isCompact"])]),_:1},8,["icon","isCompact"]),l(L,{icon:t(E),title:"Account",isCompact:t(o)},{default:u(()=>[l(b,{to:"/orders",icon:t(E),title:"Orders",isCompact:t(o)},null,8,["icon","isCompact"]),l(b,{to:"/address",icon:t(ee),title:"Address",isCompact:t(o)},null,8,["icon","isCompact"])]),_:1},8,["icon","isCompact"]),l(L,{icon:t(le),title:"Pages",isCompact:t(o)},{default:u(()=>[l(b,{to:"/login",icon:t(te),title:"Login",isCompact:t(o)},null,8,["icon","isCompact"]),l(b,{to:"/404",icon:t(oe),title:"404",isCompact:t(o)},null,8,["icon","isCompact"])]),_:1},8,["icon","isCompact"])])])]),e("div",Ke,[w(i.$slots,"footer",{},()=>[e("div",Ge,[l(y,{class:"mx-2",color:"white",icon:t(o)?t(ne):t(se),roundedFull:"",onClick:m[3]||(m[3]=v=>o.value=!t(o))},null,8,["icon"])])])])],2)],2)])}}},qe={class:"relative select-none"},Je={class:"p-1 w-56"},Xe={__name:"Dropdown",props:{btnLabel:String,items:{type:Array,default:()=>[]},btnColor:String},setup(s){const{useThrottle:r}=ge(),n=M(null),p=M(null),o=R(!1),a=r(()=>{o.value=!o.value}),_=c=>{const i=p.value&&p.value.contains(c.target),m=n.value&&n.value.contains(c.target);i||m||(o.value=!1)},h=$(()=>o.value?ie:ae);return re(()=>{document.addEventListener("click",_)}),(c,i)=>{const m=B;return d(),f("div",qe,[e("div",{ref_key:"selectorRef",ref:p,onClick:i[0]||(i[0]=C=>t(a)())},[w(c.$slots,"selector",{btnIcon:t(h)},()=>[l(m,{label:s.btnLabel,color:s.btnColor,iconRight:t(h)},null,8,["label","color","iconRight"])])],512),l(ce,{name:"fade",mode:"out-in"},{default:u(()=>[t(o)?(d(),f("div",{key:0,ref_key:"dropdownRef",ref:n,class:"absolute top-full right-0 xl:left-0 min-w-max bg-light z-10 shadow-md rounded-md mt-1"},[w(c.$slots,"default",{},()=>[e("ul",Je,[(d(!0),f(O,null,T(s.items,(C,y)=>(d(),f("li",{key:y,class:"flex items-center"},[w(c.$slots,"items",{item:C,key:y},()=>[l(m,{to:C.route,overrideClass:"grow bg-transparent p-2 theme-hover",label:C.label},null,8,["to","label"])])]))),128))])])],512)):k("",!0)]),_:3})])}}},Ze=[{label:"Home",route:"/"},{label:"Shop",route:"/shop"},{label:"Pages",submenu:[{label:"Product Detail",route:"/shop/single"},{label:"Cart",route:"/cart"},{label:"Checkout",route:"/checkout"},{label:"Wishlist",route:"/wishlist"},{label:"Orders",route:"/orders"},{label:"Address List",route:"/address"},{label:"Login",route:"/login"},{label:"404",route:"/404"}]}],et={},tt={class:"hidden md:wrapper-flex-start"};function ot(s,r){const n=B,p=Xe;return d(),f("ul",tt,[(d(!0),f(O,null,T("menu"in s?s.menu:t(Ze),(o,a)=>(d(),f("li",{class:"wrapper-flex-start",key:a},[o.submenu?(d(),V(p,{key:0,items:o.submenu},{selector:u(({btnIcon:_})=>[l(n,{overrideClass:"flex items-center bg-transparent p-2 theme-hover",iconRight:_,label:o.label},null,8,["iconRight","label"])]),_:2},1032,["items"])):(d(),V(n,{key:1,to:o.route,overrideClass:"bg-transparent p-2 theme-hover",label:o.label},null,8,["to","label"]))]))),128))])}const lt=z(et,[["render",ot]]),nt={class:"flex items-center fixed top-0 insect-x-0 z-30 w-full bg-dark text-white px-4 md:px-8 h-20"},st={class:"flex-1"},it={class:"wrapper-flex-between"},at={class:"wrapper-flex-start"},rt={class:"wrapper-flex sm:w-[168px]"},ct={class:"wrapper-flex-center"},ut=e("h4",null,"Dmantu",-1),dt={class:"hidden lg:wrapper-flex-end"},mt={class:"lg:hidden wrapper-flex-end"},pt={class:"hidden md:wrapper-flex-end"},ft=e("span",{class:"text-stone-600"},"5",-1),ht={__name:"NavBar",emits:["sidebarLeftBtnClick","sidebarRightBtnClick"],setup(s,{emit:r}){const{create:n}=ue(),p=r,o=M(""),a=R(!1),_=c=>{p(c)},h=()=>{n({color:"contrast",text:"You have done it.."}),n({color:"success",title:"Top",launchFrom:"top",text:"You have done it.."}),n({color:"info",title:"Left",position:"left",text:"You have done it.."}),n({color:"danger",title:"Right",position:"right",text:"You have done it.."})};return(c,i)=>{const m=B,C=P,y=lt,b=be,L=I;return d(),f("div",null,[e("nav",nt,[e("div",st,[e("div",it,[e("div",at,[l(m,{class:"md:hidden",icon:t(de),iconSize:24,onClick:i[0]||(i[0]=v=>_("sidebarLeftBtnClick"))},null,8,["icon"]),e("div",rt,[e("a",null,[e("div",ct,[l(C,{path:t(me),size:"24"},null,8,["path"]),ut])])]),l(y)]),e("div",dt,[l(b,{modelValue:t(o),"onUpdate:modelValue":i[1]||(i[1]=v=>S(o)?o.value=v:null),placeholder:"Search",iconLeft:t(D),class:"text-black"},null,8,["modelValue","iconLeft"])]),e("div",mt,[l(m,{icon:t(D),iconSize:24,onClick:i[2]||(i[2]=v=>a.value=!t(a))},null,8,["icon"])]),e("div",pt,[l(m,{class:"!border-0",icon:t(pe),iconSize:24,hasBadge:"",badgeColor:"white",onClick:i[3]||(i[3]=v=>h())},{badge:u(()=>[ft]),_:1},8,["icon"]),l(m,{to:"/login",class:"!border-0",icon:t(fe),iconSize:24},null,8,["icon"]),l(m,{class:"!border-0",icon:t(he),iconSize:24,onClick:i[4]||(i[4]=v=>_("sidebarRightBtnClick"))},null,8,["icon"])])])])]),l(L,{modelValue:t(a),"onUpdate:modelValue":i[6]||(i[6]=v=>S(a)?a.value=v:null),from:"top",position:"top-0",width:"w-full",height:"h-auto","left-btn-label":"Search"},{default:u(()=>[l(b,{modelValue:t(o),"onUpdate:modelValue":i[5]||(i[5]=v=>S(o)?o.value=v:null),placeholder:"Search",iconLeft:t(D),class:"text-black"},null,8,["modelValue","iconLeft"])]),_:1},8,["modelValue"])])}}},_t=e("p",null,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',-1),vt=e("p",null,'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',-1),bt={__name:"Header",setup(s){const r=R(!1),n=R(!1);return _e.beforeEach((p,o)=>{r.value=!1,n.value=!1}),(p,o)=>{const a=ht,_=Qe,h=I;return d(),f("div",null,[l(a,{onSidebarLeftBtnClick:o[0]||(o[0]=c=>r.value=!0),onSidebarRightBtnClick:o[1]||(o[1]=c=>n.value=!0)}),l(_,{modelValue:t(r),"onUpdate:modelValue":o[2]||(o[2]=c=>S(r)?r.value=c:null)},null,8,["modelValue"]),l(h,{modelValue:t(n),"onUpdate:modelValue":o[3]||(o[3]=c=>S(n)?n.value=c:null),from:"top",title:"Modal"},{default:u(()=>[_t,vt]),_:1},8,["modelValue"])])}}},gt={},Ct={class:"bg-light"},xt={class:"pt-20"};function wt(s,r){const n=bt,p=F("RouterView"),o=Ee;return d(),f("div",Ct,[l(n),e("div",xt,[l(p)]),l(o)])}const Lt=z(gt,[["render",wt]]);export{Lt as default};