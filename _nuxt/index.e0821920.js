import{u as h,_ as v}from"./Heading.4d8e86d7.js";import{_ as y}from"./Tile.24ca23cc.js";import{u as c,a as l,w,o,b as i,e as C,f as F,h as T,t as G,i as A,F as d,r as u,c as p,j as m}from"./entry.ba5429d1.js";const B=async n=>{var t;const{data:e}=await h("https://api.tvmaze.com/shows","$Q1Ref5ALH2"),a=((t=c(e))==null?void 0:t.filter(_=>{var s;return(s=_.genres)==null?void 0:s.includes(n)}))||[];return{dataPerGenreFiltered:c(a).sort((_,s)=>_.rating.average<s.rating.average?1:-1)}},P={class:"tile-container"},$={class:"tile-container__wrapper"},k=l({__name:"TileContainer",props:{genre:null},async setup(n){let e,a;const r=n,{dataPerGenreFiltered:t}=([e,a]=w(()=>B(r.genre)),e=await e,a(),e);return(_,s)=>{const g=v,x=y;return o(),i("section",P,[C(g,{h2:"",white:""},{default:F(()=>[T(G(n.genre),1)]),_:1}),A("div",$,[(o(!0),i(d,null,u(c(t),f=>(o(),p(x,{class:"tile-container__tile",data:f},null,8,["data"]))),256))])])}}});const N=m(k,[["__scopeId","data-v-1e964e36"]]),V=["Comedy","Action","Adventure","Drama"],D=l({__name:"index",setup(n){return(e,a)=>{const r=N;return o(!0),i(d,null,u(c(V),t=>(o(),p(r,{class:"category-section",genre:t},null,8,["genre"]))),256)}}});const b=m(D,[["__scopeId","data-v-7063d6d5"]]);export{b as default};
