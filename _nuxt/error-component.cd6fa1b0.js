import{d as o,_ as c,o as g,c as E,n as k,g as P,u as s}from"./entry.ba5429d1.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var n;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,i=(n=t.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,d=o(()=>c(()=>import("./error-404.f06590c3.js"),["./error-404.f06590c3.js","./entry.ba5429d1.js","./entry.4ad0c1aa.css","./composables.74622d70.js","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)),l=o(()=>c(()=>import("./error-500.8fb39ba3.js"),["./error-500.8fb39ba3.js","./composables.74622d70.js","./entry.ba5429d1.js","./entry.4ad0c1aa.css","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e)),m=a?d:l;return(e,f)=>(g(),E(s(m),k(P({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=v;export{h as default};