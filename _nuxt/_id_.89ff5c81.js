import{_ as h,u as g}from"./Heading.d4db9499.js";import{_ as v}from"./Svg.36bdbaac.js";import{a as x,D as y,w as k,x as w,u as e,b as l,i as a,e as n,f as r,F as B,r as C,h as _,t as c,E as N,o as i,c as V,j as b}from"./entry.c128451a.js";const F={key:0,class:"full"},H=["src"],L={class:"full__intro"},M={class:"full__stars"},R=["innerHTML"],T=x({__name:"[id]",async setup(D){let s,d;const{params:{id:u}}=y(),{data:t}=([s,d]=k(()=>g(`https://api.tvmaze.com/shows/${u}`,"$55vpW6R45x")),s=await s,d(),s),m=w(()=>Math.round(e(t).rating.average/2));return(E,S)=>{const o=h,p=v;return e(t)?(i(),l("div",F,[a("img",{class:"full__image",src:e(t).image.original},null,8,H),a("div",L,[n(o,{h1:""},{default:r(()=>[_(c(e(t).name),1)]),_:1}),n(o,{h2:""},{default:r(()=>[_(" - ")]),_:1}),n(o,{h2:"",gray:""},{default:r(()=>[_(c(e(t).premiered.split("-")[0]),1)]),_:1})]),a("div",M,[(i(!0),l(B,null,C(e(m),f=>(i(),V(p,{key:f,icon:"star"}))),128)),_(" ("+c(e(t).rating.average)+" / 10) ",1)]),a("p",{innerHTML:e(t).summary},null,8,R)])):N("",!0)}}});const A=b(T,[["__scopeId","data-v-2cf17eb1"]]);export{A as default};