import{_ as B}from"../chunks/preload-helper.0HuHagjb.js";import{_ as rt}from"../chunks/dynamic-import-helper.0gtGTknh.js";import{e as nt}from"../chunks/index.oiCz_B55.js";import{c as ot}from"../chunks/client._1iTYoDs.js";import{s as st,a as U}from"../chunks/scheduler.h1jTRUOO.js";import{S as it,i as lt,B as W,e as d,s as q,q as G,c as X,h as ct,b as _,d as l,a as C,f as D,r as N,j as mt,k as e,m as o,l as Y,n as Z,u as x,o as tt,z as ut,t as et,p as at,A as dt}from"../chunks/index.P28DLdQx.js";const _t=!0;async function ft(){try{const r=await ot.queries.articleConnection(),{data:{articleConnection:{edges:s}}}=r;return s.map(i=>({slug:i.node._sys.filename}))}catch(r){return console.error("Error fetching articles:",r),[]}}async function pt({params:r}){try{const s=await rt(Object.assign({"../../../../articles/Titre-2.md":()=>B(()=>import("../chunks/Titre-2.gRkjBF_J.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../../articles/Titre-3.md":()=>B(()=>import("../chunks/Titre-3.nXGhExfu.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../../../articles/Top-dpart-pour-lanne-Olympique.md":()=>B(()=>import("../chunks/Top-dpart-pour-lanne-Olympique.QMcqnRg3.js"),__vite__mapDeps([4,1,2]),import.meta.url)}),`../../../../articles/${r.slug}.md`);return{content:s.default,meta:s.metadata}}catch{throw nt(404,`Could not find ${r.slug}`)}}const At=Object.freeze(Object.defineProperty({__proto__:null,entries:ft,load:pt,prerender:_t},Symbol.toStringTag,{value:"Module"}));function ht(r){let s,f,i,h,g,P,M,u,p,v,c,O,L,j,b,I=r[0].meta.titre+"",R,k,E,V,w=new Date(r[0].meta.date).toLocaleDateString("fr")+"",S,H,$,a,m;document.title=s=r[0].meta.titre;var T=r[0].content;function F(t,n){return{}}return T&&(a=W(T,F())),{c(){f=d("meta"),i=d("meta"),g=d("meta"),M=q(),u=d("article"),p=d("header"),v=d("div"),c=d("img"),j=q(),b=d("h1"),R=G(I),k=q(),E=d("time"),V=G("Publié le "),S=G(w),H=q(),$=d("main"),a&&X(a.$$.fragment),this.h()},l(t){const n=ct("svelte-12754gf",document.head);f=_(n,"META",{property:!0,content:!0}),i=_(n,"META",{property:!0,content:!0}),g=_(n,"META",{property:!0,content:!0}),n.forEach(l),M=C(t),u=_(t,"ARTICLE",{"data-pagefind-body":!0,class:!0});var y=D(u);p=_(y,"HEADER",{});var A=D(p);v=_(A,"DIV",{id:!0,class:!0});var J=D(v);c=_(J,"IMG",{id:!0,src:!0,alt:!0,class:!0}),J.forEach(l),j=C(A),b=_(A,"H1",{class:!0});var K=D(b);R=N(K,I),K.forEach(l),k=C(A),E=_(A,"TIME",{class:!0});var z=D(E);V=N(z,"Publié le "),S=N(z,w),z.forEach(l),A.forEach(l),H=C(y),$=_(y,"MAIN",{class:!0});var Q=D($);a&&mt(a.$$.fragment,Q),Q.forEach(l),y.forEach(l),this.h()},h(){e(f,"property","og:type"),e(f,"content","article"),e(i,"property","og:title"),e(i,"content",h=r[0].meta.titre),e(g,"property","og:description"),e(g,"content",P=r[0].meta.desc),e(c,"id","hero-img"),U(c.src,O=r[0].meta.image)||e(c,"src",O),e(c,"alt",L=r[0].meta.desc),e(c,"class","svelte-1ru1hv4"),e(v,"id","hero-img-container"),e(v,"class","svelte-1ru1hv4"),e(b,"class","text-4xl font-bold tracking-tight | pt-8"),e(E,"class","block | pt-4 | text-slate-500 text-sm"),e($,"class","pt-8"),e(u,"data-pagefind-body",""),e(u,"class","pt-8")},m(t,n){o(document.head,f),o(document.head,i),o(document.head,g),Y(t,M,n),Y(t,u,n),o(u,p),o(p,v),o(v,c),o(p,j),o(p,b),o(b,R),o(p,k),o(p,E),o(E,V),o(E,S),o(u,H),o(u,$),a&&Z(a,$,null),m=!0},p(t,[n]){if((!m||n&1)&&s!==(s=t[0].meta.titre)&&(document.title=s),(!m||n&1&&h!==(h=t[0].meta.titre))&&e(i,"content",h),(!m||n&1&&P!==(P=t[0].meta.desc))&&e(g,"content",P),(!m||n&1&&!U(c.src,O=t[0].meta.image))&&e(c,"src",O),(!m||n&1&&L!==(L=t[0].meta.desc))&&e(c,"alt",L),(!m||n&1)&&I!==(I=t[0].meta.titre+"")&&x(R,I),(!m||n&1)&&w!==(w=new Date(t[0].meta.date).toLocaleDateString("fr")+"")&&x(S,w),n&1&&T!==(T=t[0].content)){if(a){dt();const y=a;tt(y.$$.fragment,1,0,()=>{at(y,1)}),ut()}T?(a=W(T,F()),X(a.$$.fragment),et(a.$$.fragment,1),Z(a,$,null)):a=null}},i(t){m||(a&&et(a.$$.fragment,t),m=!0)},o(t){a&&tt(a.$$.fragment,t),m=!1},d(t){t&&(l(M),l(u)),l(f),l(i),l(g),a&&at(a)}}}function gt(r,s,f){let{data:i}=s;return r.$$set=h=>{"data"in h&&f(0,i=h.data)},[i]}class Dt extends it{constructor(s){super(),lt(this,s,gt,ht,st,{data:0})}}export{Dt as component,At as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/Titre-2.gRkjBF_J.js","../chunks/scheduler.h1jTRUOO.js","../chunks/index.P28DLdQx.js","../chunks/Titre-3.nXGhExfu.js","../chunks/Top-dpart-pour-lanne-Olympique.QMcqnRg3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
