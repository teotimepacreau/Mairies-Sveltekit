function A(){}const nt=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function H(t){return t()}function rt(){return Object.create(null)}function B(t){t.forEach(H)}function L(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ct(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function C(t,...e){if(t==null){for(const r of e)r(void 0);return A}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t){let e;return C(t,n=>e=n)(),e}function ot(t,e,n){t.$$.on_destroy.push(C(e,n))}function ut(t,e,n,r){if(t){const i=j(t,e,n,r);return t[0](i)}}function j(t,e,n,r){return t[1]&&r?q(n.ctx.slice(),t[1](r(e))):n.ctx}function at(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function ft(t,e,n,r,i,o){if(i){const c=j(e,n,r,o);t.p(c,i)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ht(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function mt(t){return t&&L(t.destroy)?t.destroy:A}let y=!1;function pt(){y=!0}function yt(){y=!1}function M(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:M(1,i,P=>e[n[P]].claim_order,u))-1;r[s]=n[a]+1;const k=a+1;n[k]=s,i=Math.max(k,i)}const o=[],c=[];let l=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function z(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=D("style");return e.textContent="/* empty */",I(F(t),e),e.sheet}function I(t,e){return z(t.head||t,e),e.sheet}function U(t,e){if(y){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function vt(){return v(" ")}function Et(){return v("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Nt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function J(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&G.indexOf(r)===-1?t[r]=e[r]:E(t,r,e[r])}function At(t,e){for(const n in e)E(t,n,e[n])}function K(t,e){Object.keys(e).forEach(n=>{Q(t,n,e[n])})}function Q(t,e,n){const r=e.toLowerCase();r in t?t[r]=typeof t[r]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:E(t,e,n)}function Ct(t){return/-/.test(t)?K:J}function jt(t){return t.dataset.svelteH}function Dt(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,r,i=!1){V(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,r){return S(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const l=i.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function St(t,e,n){return O(t,e,n,D)}function Ot(t,e,n){return O(t,e,n,W)}function X(t,e){return S(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>v(e),!0)}function Tt(t){return X(t," ")}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){t.value=e??""}function Ht(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Y(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Bt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Lt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){h().$$.on_mount.push(t)}function Rt(t){h().$$.after_update.push(t)}function zt(){const t=h();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=Y(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Ft(t,e){return h().$$.context.set(t,e),e}function It(t){return h().$$.context.get(t)}function Ut(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],N=[];let _=[];const x=[],T=Promise.resolve();let w=!1;function Z(){w||(w=!0,T.then(tt))}function Wt(){return Z(),T}function $(t){_.push(t)}function Gt(t){x.push(t)}const g=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),et(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Jt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{H as $,Wt as A,wt as B,ut as C,ft as D,_t as E,at as F,ct as G,nt as H,q as I,W as J,Ot as K,At as L,ht as M,It as N,dt as O,kt as P,Nt as Q,$ as R,F as S,bt as T,Y as U,rt as V,tt as W,st as X,Jt as Y,p as Z,b as _,vt as a,d as a0,Z as a1,pt as a2,yt as a3,qt as a4,lt as a5,zt as a6,Ut as a7,Ct as a8,mt as a9,Ft as aa,J as ab,Gt as ac,St as b,Tt as c,xt as d,D as e,Dt as f,jt as g,Bt as h,E as i,gt as j,U as k,C as l,L as m,A as n,X as o,Pt as p,ot as q,B as r,it as s,v as t,Ht as u,Et as v,Rt as w,Mt as x,N as y,Lt as z};
