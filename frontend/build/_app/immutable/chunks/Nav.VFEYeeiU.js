import{s as de,n as K}from"./scheduler.s29Zrdcm.js";import{S as ye,i as pe,e as O,f as B,g as D,d as A,k as E,l as X,n as P,w as te,q as L,s as M,r as N,a as k,u as V}from"./index.Ppprgl1c.js";function S(f){return(f==null?void 0:f.length)!==void 0?f:Array.from(f)}var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function be(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var G={exports:{}};(function(f,s){(function(o){function c(l){var i=l&&l.Promise||o.Promise,p=l&&l.XMLHttpRequest||o.XMLHttpRequest;return function(){var r=Object.create(o,{fetch:{value:void 0,writable:!0}});return function(n,a){a(s)}(this,function(n){var a=typeof r<"u"&&r||typeof self<"u"&&self||typeof a<"u"&&a,h={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function d(e){return e&&DataView.prototype.isPrototypeOf(e)}if(h.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],q=ArrayBuffer.isView||function(e){return e&&w.indexOf(Object.prototype.toString.call(e))>-1};function $(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function U(e){return typeof e!="string"&&(e=String(e)),e}function R(e){var t={next:function(){var u=e.shift();return{done:u===void 0,value:u}}};return h.iterable&&(t[Symbol.iterator]=function(){return t}),t}function g(e){this.map={},e instanceof g?e.forEach(function(t,u){this.append(u,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}g.prototype.append=function(e,t){e=$(e),t=U(t);var u=this.map[e];this.map[e]=u?u+", "+t:t},g.prototype.delete=function(e){delete this.map[$(e)]},g.prototype.get=function(e){return e=$(e),this.has(e)?this.map[e]:null},g.prototype.has=function(e){return this.map.hasOwnProperty($(e))},g.prototype.set=function(e,t){this.map[$(e)]=U(t)},g.prototype.forEach=function(e,t){for(var u in this.map)this.map.hasOwnProperty(u)&&e.call(t,this.map[u],u,this)},g.prototype.keys=function(){var e=[];return this.forEach(function(t,u){e.push(u)}),R(e)},g.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),R(e)},g.prototype.entries=function(){var e=[];return this.forEach(function(t,u){e.push([u,t])}),R(e)},h.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function F(e){if(e.bodyUsed)return i.reject(new TypeError("Already read"));e.bodyUsed=!0}function z(e){return new i(function(t,u){e.onload=function(){t(e.result)},e.onerror=function(){u(e.error)}})}function se(e){var t=new FileReader,u=z(t);return t.readAsArrayBuffer(e),u}function oe(e){var t=new FileReader,u=z(t);return t.readAsText(e),u}function ae(e){for(var t=new Uint8Array(e),u=new Array(t.length),b=0;b<t.length;b++)u[b]=String.fromCharCode(t[b]);return u.join("")}function J(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Q(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:h.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:h.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:h.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():h.arrayBuffer&&h.blob&&d(e)?(this._bodyArrayBuffer=J(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):h.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||q(e))?this._bodyArrayBuffer=J(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):h.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},h.blob&&(this.blob=function(){var e=F(this);if(e)return e;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=F(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?i.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):i.resolve(this._bodyArrayBuffer))}else return this.blob().then(se)}),this.text=function(){var e=F(this);if(e)return e;if(this._bodyBlob)return oe(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(ae(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},h.formData&&(this.formData=function(){return this.text().then(le)}),this.json=function(){return this.text().then(JSON.parse)},this}var ie=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function fe(e){var t=e.toUpperCase();return ie.indexOf(t)>-1?t:e}function T(e,t){if(!(this instanceof T))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var u=t.body;if(e instanceof T){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new g(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!u&&e._bodyInit!=null&&(u=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new g(t.headers)),this.method=fe(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&u)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(u),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var b=/([?&])_=[^&]*/;if(b.test(this.url))this.url=this.url.replace(b,"$1_="+new Date().getTime());else{var m=/\?/;this.url+=(m.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}T.prototype.clone=function(){return new T(this,{body:this._bodyInit})};function le(e){var t=new FormData;return e.trim().split("&").forEach(function(u){if(u){var b=u.split("="),m=b.shift().replace(/\+/g," "),y=b.join("=").replace(/\+/g," ");t.append(decodeURIComponent(m),decodeURIComponent(y))}}),t}function ce(e){var t=new g,u=e.replace(/\r?\n[\t ]+/g," ");return u.split("\r").map(function(b){return b.indexOf(`
`)===0?b.substr(1,b.length):b}).forEach(function(b){var m=b.split(":"),y=m.shift().trim();if(y){var j=m.join(":").trim();t.append(y,j)}}),t}Q.call(T.prototype);function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new g(t.headers),this.url=t.url||"",this._initBody(e)}Q.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var ue=[301,302,303,307,308];_.redirect=function(e,t){if(ue.indexOf(t)===-1)throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},n.DOMException=a.DOMException;try{new n.DOMException}catch{n.DOMException=function(t,u){this.message=t,this.name=u;var b=Error(t);this.stack=b.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function I(e,t){return new i(function(u,b){var m=new T(e,t);if(m.signal&&m.signal.aborted)return b(new n.DOMException("Aborted","AbortError"));var y=new p;function j(){y.abort()}y.onload=function(){var v={status:y.status,statusText:y.statusText,headers:ce(y.getAllResponseHeaders()||"")};v.url="responseURL"in y?y.responseURL:v.headers.get("X-Request-URL");var C="response"in y?y.response:y.responseText;setTimeout(function(){u(new _(C,v))},0)},y.onerror=function(){setTimeout(function(){b(new TypeError("Network request failed"))},0)},y.ontimeout=function(){setTimeout(function(){b(new TypeError("Network request failed"))},0)},y.onabort=function(){setTimeout(function(){b(new n.DOMException("Aborted","AbortError"))},0)};function he(v){try{return v===""&&a.location.href?a.location.href:v}catch{return v}}y.open(m.method,he(m.url),!0),m.credentials==="include"?y.withCredentials=!0:m.credentials==="omit"&&(y.withCredentials=!1),"responseType"in y&&(h.blob?y.responseType="blob":h.arrayBuffer&&m.headers.get("Content-Type")&&m.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(y.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof g)?Object.getOwnPropertyNames(t.headers).forEach(function(v){y.setRequestHeader(v,U(t.headers[v]))}):m.headers.forEach(function(v,C){y.setRequestHeader(C,v)}),m.signal&&(m.signal.addEventListener("abort",j),y.onreadystatechange=function(){y.readyState===4&&m.signal.removeEventListener("abort",j)}),y.send(typeof m._bodyInit>"u"?null:m._bodyInit)})}I.polyfill=!0,a.fetch||(a.fetch=I,a.Headers=g,a.Request=T,a.Response=_),n.Headers=g,n.Request=T,n.Response=_,n.fetch=I,Object.defineProperty(n,"__esModule",{value:!0})}),{fetch:r.fetch,Headers:r.Headers,Request:r.Request,Response:r.Response,DOMException:r.DOMException}}()}f.exports=c})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:H)})(G,G.exports);var me=G.exports;const ge=be(me),{fetch:ve,Headers:we}=ge(),_e=typeof fetch>"u"?ve:fetch,Pe=typeof Headers>"u"?we:Headers;class Ae{constructor({token:s,url:o,queries:c,errorPolicy:l}){this.apiUrl=o,this.readonlyToken=s==null?void 0:s.trim(),this.queries=c(this),this.errorPolicy=l||"throw"}async request({errorPolicy:s,...o}){const c=s||this.errorPolicy,l=new Pe;this.readonlyToken&&l.append("X-API-KEY",this.readonlyToken),l.append("Content-Type","application/json");const i=JSON.stringify({query:o.query,variables:(o==null?void 0:o.variables)||{}}),p=(o==null?void 0:o.url)||this.apiUrl,r=await _e(p,{method:"POST",headers:l,body:i,redirect:"follow"});if(!r.ok){let a="";throw r.status===401&&(a="Please check that your client ID, URL and read only token are configured properly."),new Error(`Server responded with status code ${r.status}, ${r.statusText}. ${a||""} Please see our FAQ for more information: https://tina.io/docs/errors/faq/`)}const n=await r.json();if(n.errors&&c==="throw")throw new Error(`Unable to fetch, please see our FAQ for more information: https://tina.io/docs/errors/faq/
        Errors: 
	${n.errors.map(a=>a.message).join(`
`)}`);return{data:n==null?void 0:n.data,errors:(n==null?void 0:n.errors)||null,query:o.query}}}function Ee(f){return new Ae(f)}function x(f,...s){let o="";return f.forEach((c,l)=>{o+=c+(s[l]||"")}),o}const re=x`
    fragment ArticleParts on Article {
  __typename
  titre
  desc
  date
  image
  imagealt
  body
}
    `,ne=x`
    fragment PagesParts on Pages {
  __typename
  titre
  categorie
  emoji
  contenu
}
    `,Te=x`
    query article($relativePath: String!) {
  article(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ArticleParts
  }
}
    ${re}`,Oe=x`
    query articleConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ArticleFilter) {
  articleConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ArticleParts
      }
    }
  }
}
    ${re}`,Be=x`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${ne}`,De=x`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${ne}`;function xe(f){return{article(s,o){return f(Te,s,o)},articleConnection(s,o){return f(Oe,s,o)},pages(s,o){return f(Be,s,o)},pagesConnection(s,o){return f(De,s,o)}}}const $e=(f,s)=>async(c,l,i)=>{let p=f.apiUrl;if(i!=null&&i.branch){const n=f.apiUrl.lastIndexOf("/");p=f.apiUrl.substring(0,n+1)+i.branch}const r=await f.request({query:c,variables:l,url:p});return{data:r==null?void 0:r.data,errors:r==null?void 0:r.errors,query:c,variables:l||{}}},qe=(f,s)=>{const o=$e(f);return xe(o)},je=Ee({url:"https://content.tinajs.io/1.4/content/b0376671-e258-4c36-8fa7-4ca68387c7a8/github/tina",token:"600ef325207364bc7ac69d039b6b05fa97b8c8e1",queries:qe});function Y(f,s,o){const c=f.slice();return c[4]=s[o],c[6]=o,c}function W(f,s,o){const c=f.slice();return c[7]=s[o],c}function Z(f){let s,o,c=f[7][1].node.emoji+"",l,i,p,r=f[7][1].node.titre+"",n,a;return{c(){s=O("a"),o=O("i"),l=L(c),i=M(),p=O("span"),n=L(r),this.h()},l(h){s=B(h,"A",{href:!0,class:!0});var d=D(s);o=B(d,"I",{"aria-hidden":!0});var w=D(o);l=N(w,c),w.forEach(A),i=k(d),p=B(d,"SPAN",{class:!0});var q=D(p);n=N(q,r),q.forEach(A),d.forEach(A),this.h()},h(){E(o,"aria-hidden","true"),E(p,"class","svelte-1rt85q7"),E(s,"href",a="/pages/"+f[7][1].node._sys.filename),E(s,"class","svelte-1rt85q7")},m(h,d){X(h,s,d),P(s,o),P(o,l),P(s,i),P(s,p),P(p,n)},p(h,d){d&1&&c!==(c=h[7][1].node.emoji+"")&&V(l,c),d&1&&r!==(r=h[7][1].node.titre+"")&&V(n,r),d&1&&a!==(a="/pages/"+h[7][1].node._sys.filename)&&E(s,"href",a)},d(h){h&&A(s)}}}function ee(f){let s,o,c=f[4][0]+"",l,i,p,r=S(Object.entries(f[4][1])),n=[];for(let a=0;a<r.length;a+=1)n[a]=Z(W(f,r,a));return{c(){s=O("li"),o=O("span"),l=L(c),i=M();for(let a=0;a<n.length;a+=1)n[a].c();p=M(),this.h()},l(a){s=B(a,"LI",{class:!0});var h=D(s);o=B(h,"SPAN",{class:!0});var d=D(o);l=N(d,c),d.forEach(A),i=k(h);for(let w=0;w<n.length;w+=1)n[w].l(h);p=k(h),h.forEach(A),this.h()},h(){E(o,"class","eyebrow svelte-1rt85q7"),E(s,"class","svelte-1rt85q7")},m(a,h){X(a,s,h),P(s,o),P(o,l),P(s,i);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(s,null);P(s,p)},p(a,h){if(h&1&&c!==(c=a[4][0]+"")&&V(l,c),h&1){r=S(Object.entries(a[4][1]));let d;for(d=0;d<r.length;d+=1){const w=W(a,r,d);n[d]?n[d].p(w,h):(n[d]=Z(w),n[d].c(),n[d].m(s,p))}for(;d<n.length;d+=1)n[d].d(1);n.length=r.length}},d(a){a&&A(s),te(n,a)}}}function Ce(f){let s,o,c=S(Object.entries(f[0])),l=[];for(let i=0;i<c.length;i+=1)l[i]=ee(Y(f,c,i));return{c(){s=O("nav"),o=O("menu");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){s=B(i,"NAV",{class:!0});var p=D(s);o=B(p,"MENU",{class:!0});var r=D(o);for(let n=0;n<l.length;n+=1)l[n].l(r);r.forEach(A),p.forEach(A),this.h()},h(){E(o,"class","svelte-1rt85q7"),E(s,"class","pl-4 pr-8 pt-8 | border-r-2")},m(i,p){X(i,s,p),P(s,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,null)},p(i,[p]){if(p&1){c=S(Object.entries(i[0]));let r;for(r=0;r<c.length;r+=1){const n=Y(i,c,r);l[r]?l[r].p(n,p):(l[r]=ee(n),l[r].c(),l[r].m(o,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}},i:K,o:K,d(i){i&&A(s),te(l,i)}}}function Se(f,s,o){let c=[];async function l(){const r=await je.queries.pagesConnection();try{const{data:{pagesConnection:{edges:n}}}=r;return c=n,c}catch{console.error(500,"Could not find articles on the server")}}l();let i=[];async function p(){return c=await l(),o(0,i=c.reduce((r,n)=>(n.node.categorie in r||(r[n.node.categorie]=[]),r[n.node.categorie].push(n),r),{})),i}return p(),[i]}class Fe extends ye{constructor(s){super(),pe(this,s,Se,Ce,de,{})}}export{Fe as N,je as c,S as e};
