import{_ as x}from"./Card-ycr6M0j0.js";import{o,e as f,w as r,a as t,c as m,t as s,f as u,b as n,u as a,aq as b,C as v,X as w,a6 as S,i as C,j as p}from"./index-xYmB9ZvX.js";const k={class:"relative flex justify-center items-center overflow-hidden rounded-xl"},y=["src"],B={key:0,class:"absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white"},T={key:1,class:"absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"},L={class:"ml-1 text-xs"},$={class:"py-4"},P={class:"flex items-end justify-between"},j={class:"inline-flex items-center"},N={class:"text-xs line-through"},V={class:"inline-flex items-center space-x-2"},D={__name:"ProductCard",props:{image:String,title:String,subTitle:String,badgeLabel:String,rating:String,price:String,discountPrice:String},emits:["addToCart","addToWatchList"],setup(e,{emit:h}){const l=h;return(z,i)=>{const c=C,d=p,g=x;return o(),f(g,{class:"bg-light !rounded-xl hover:shadow-xl"},{default:r(()=>[t("div",k,[t("img",{src:e.image},null,8,y),e.badgeLabel?(o(),m("span",B,s(e.badgeLabel),1)):u("",!0),e.rating?(o(),m("div",T,[n(c,{class:"w-4 h-4 text-yellow-400",path:a(b)},null,8,["path"]),t("span",L,s(e.rating),1)])):u("",!0)]),t("div",$,[t("h4",null,s(e.title),1),t("p",null,s(e.subTitle),1)]),t("div",P,[t("div",j,[t("h4",null,s(e.price),1),t("p",N,s(e.discountPrice),1)]),t("div",V,[n(d,{icon:a(v),iconSize:"24",onClick:i[0]||(i[0]=_=>l("addToWatchList"))},null,8,["icon"]),n(d,{icon:a(w),iconSize:"24",hasBadge:"",onClick:i[1]||(i[1]=_=>l("addToCart"))},{badge:r(()=>[n(c,{path:a(S)},null,8,["path"])]),_:1},8,["icon"])])])]),_:1})}}};export{D as _};