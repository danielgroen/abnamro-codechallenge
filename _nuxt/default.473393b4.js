import{a as V,_ as w}from"./Heading.4d8e86d7.js";import{l as o,a as x,x as y,u as e,G as N,H as b,o as n,b as i,I as z,J as B,i as f,K as E,F as S,r as T,c as k,E as D,j as C,e as p,f as g,z as F,C as M,h as R}from"./entry.ba5429d1.js";import{_ as G}from"./Svg.ffea1fe9.js";import{_ as H}from"./Tile.24ca23cc.js";const m=o(!1),J=o(!1),$=()=>({toggleSearch:()=>{m.value=!m.value},isSearching:m,hasSearchResults:J}),K={class:"search-container"},L={class:"search-container__wrapper"},j={key:0},q=x({__name:"SearchContainer",setup(v){const{toggleSearch:c}=$(),r=o(),t=o(""),u=y(()=>e(t).length>2&&e(_).length===0),_=o([]),d=async()=>{const{data:l}=await V(`https://api.tvmaze.com/search/shows?q=${e(t)}`,"$KaaazJ6G7e");e(t).length>2&&(_.value=e(l))};return N(()=>{e(r).focus()}),(l,a)=>{const h=H,I=b("focus");return n(),i("div",K,[z(f("input",{ref_key:"searchEl",ref:r,placeholder:"Search...",onInput:a[0]||(a[0]=s=>d()),"onUpdate:modelValue":a[1]||(a[1]=s=>E(t)?t.value=s:null),class:"search-container__input",type:"search",name:"search",id:""},null,544),[[B,e(t)],[I]]),f("div",L,[(n(!0),i(S,null,T(e(_),({show:s})=>(n(),k(h,{onClick:a[2]||(a[2]=P=>e(c)()),key:s.id,data:s},null,8,["data"]))),128)),e(u)?(n(),i("div",j,"Couldn't find your movie... Try again!")):D("",!0)])])}}});const U=C(q,[["__scopeId","data-v-118e891b"]]),A={class:"header"},O=x({__name:"default",setup(v){const{isSearching:c,toggleSearch:r}=$(),t=y(()=>c.value?"close":"search");return(u,_)=>{const d=w,l=M,a=G,h=U;return n(),i(S,null,[f("header",A,[p(l,{to:"/"},{default:g(()=>[p(d,{h1:"","primary-color":""},{default:g(()=>[R("Videoflix")]),_:1})]),_:1}),p(a,{onClick:e(r),class:"header__search",icon:e(t)},null,8,["onClick","icon"])]),e(c)?(n(),k(h,{key:0,class:"header__search__bar"})):F(u.$slots,"default",{key:1},void 0,!0)],64)}}});const Z=C(O,[["__scopeId","data-v-e93c627c"]]);export{Z as default};
