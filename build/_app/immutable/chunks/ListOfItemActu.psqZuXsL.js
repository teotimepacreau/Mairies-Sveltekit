import{s as J,n as P,a as R}from"./scheduler.s29Zrdcm.js";import{S as K,i as N,e as _,f as m,g,d as h,k as n,l as H,w as Q,q as S,s as C,r as $,a as L,v as U,n as f,u as V}from"./index.Ppprgl1c.js";import{e as j,c as W}from"./client._Gy30Ypp.js";function z(c,s,l){const e=c.slice();return e[3]=s[l],e}function F(c){let s,l,e,a=new Date(c[3].node.date).toLocaleDateString("fr")+"",o,t,r,p=c[3].node.titre+"",A,E,O,w,D=c[3].node.desc+"",I,b,v,u,k,x,q;return{c(){s=_("article"),l=_("div"),e=_("time"),o=S(a),t=C(),r=_("a"),A=S(p),O=C(),w=_("p"),I=S(D),b=C(),v=_("div"),u=_("img"),q=C(),this.h()},l(d){s=m(d,"ARTICLE",{class:!0});var i=g(s);l=m(i,"DIV",{class:!0});var y=g(l);e=m(y,"TIME",{class:!0});var B=g(e);o=$(B,a),B.forEach(h),t=L(y),r=m(y,"A",{href:!0,class:!0});var M=g(r);A=$(M,p),M.forEach(h),O=L(y),w=m(y,"P",{class:!0});var T=g(w);I=$(T,D),T.forEach(h),y.forEach(h),b=L(i),v=m(i,"DIV",{class:!0,style:!0});var G=g(v);u=m(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(h),q=L(i),i.forEach(h),this.h()},h(){n(e,"class","text-xs text-slate-600"),n(r,"href",E="/actualites/"+c[3].node._sys.filename),n(r,"class","mt-2 |text-lg font-semibold"),n(w,"class","mt-1 | text-xs truncate | shrink"),n(l,"class","p-4 self-center flex-1 | flex flex-col svelte-19mwt5i"),R(u.src,k=c[3].node.image)||n(u,"src",k),n(u,"alt",x=c[3].node.imagealt),n(u,"class","svelte-19mwt5i"),n(v,"class","img-container flex-1 svelte-19mwt5i"),U(v,"width","inherit"),n(s,"class","border-2 rounded-md | mt-4 svelte-19mwt5i")},m(d,i){H(d,s,i),f(s,l),f(l,e),f(e,o),f(l,t),f(l,r),f(r,A),f(l,O),f(l,w),f(w,I),f(s,b),f(s,v),f(v,u),f(s,q)},p(d,i){i&1&&a!==(a=new Date(d[3].node.date).toLocaleDateString("fr")+"")&&V(o,a),i&1&&p!==(p=d[3].node.titre+"")&&V(A,p),i&1&&E!==(E="/actualites/"+d[3].node._sys.filename)&&n(r,"href",E),i&1&&D!==(D=d[3].node.desc+"")&&V(I,D),i&1&&!R(u.src,k=d[3].node.image)&&n(u,"src",k),i&1&&x!==(x=d[3].node.imagealt)&&n(u,"alt",x)},d(d){d&&h(s)}}}function X(c){let s,l=j(c[0]),e=[];for(let a=0;a<l.length;a+=1)e[a]=F(z(c,l,a));return{c(){s=_("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){s=m(a,"DIV",{class:!0});var o=g(s);for(let t=0;t<e.length;t+=1)e[t].l(o);o.forEach(h),this.h()},h(){n(s,"class","article-list")},m(a,o){H(a,s,o);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(a,[o]){if(o&1){l=j(a[0]);let t;for(t=0;t<l.length;t+=1){const r=z(a,l,t);e[t]?e[t].p(r,o):(e[t]=F(r),e[t].c(),e[t].m(s,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=l.length}},i:P,o:P,d(a){a&&h(s),Q(e,a)}}}function Y(c,s,l){let e=[];async function a(){const t=await W.queries.articleConnection();try{const{data:{articleConnection:{edges:r}}}=t;return r}catch{console.error(500,"Could not find articles on the server")}}return a(),(async()=>{l(0,e=await a()),e.sort((t,r)=>new Date(r.node.date)-new Date(t.node.date))})(),[e]}class ae extends K{constructor(s){super(),N(this,s,Y,X,J,{})}}export{ae as L};