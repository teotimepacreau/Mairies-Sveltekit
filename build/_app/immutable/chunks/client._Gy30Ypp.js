import{s as Q,n as O}from"./scheduler.s29Zrdcm.js";import{S as K,i as Y,e as W,f as Z,j as ee,k as te,l as re,d as ne}from"./index.Ppprgl1c.js";function Ee(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function se(n){let s,a='<menu class="svelte-1gtrq5w"><li class="svelte-1gtrq5w"><span class="eyebrow svelte-1gtrq5w">MAIRIE</span> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">🏫</i> <span class="svelte-1gtrq5w">Conseil municipal</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">📄</i> <span class="svelte-1gtrq5w">Informations pratiques</span></a></li> <li class="svelte-1gtrq5w"><span class="eyebrow svelte-1gtrq5w">VIE LOCALE</span> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">🏛️</i> <span class="svelte-1gtrq5w">Commune de Vue</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">🎒</i> <span class="svelte-1gtrq5w">Scolarité</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">✝️</i> <span class="svelte-1gtrq5w">Cimetière</span></a></li> <li class="svelte-1gtrq5w"><span class="eyebrow svelte-1gtrq5w">DÉMARCHES</span> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">🗂️</i> <span class="svelte-1gtrq5w">État civil</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">📊</i> <span class="svelte-1gtrq5w">Impôts</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">👶</i> <span class="svelte-1gtrq5w">Enfance</span></a> <a href="" class="svelte-1gtrq5w"><i aria-hidden="true">🏠</i> <span class="svelte-1gtrq5w">Urbanisme</span></a></li></menu>';return{c(){s=W("nav"),s.innerHTML=a,this.h()},l(y){s=Z(y,"NAV",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-1d8j88l"&&(s.innerHTML=a),this.h()},h(){te(s,"class","pl-4 pr-8 pt-8 | border-r-2")},m(y,d){re(y,s,d)},p:O,i:O,o:O,d(y){y&&ne(s)}}}class Te extends K{constructor(s){super(),Y(this,s,null,se,Q,{})}}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ae(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $={exports:{}};(function(n,s){(function(a){function y(d){var p=d&&d.Promise||a.Promise,v=d&&d.XMLHttpRequest||a.XMLHttpRequest;return function(){var u=Object.create(a,{fetch:{value:void 0,writable:!0}});return function(l,o){o(s)}(this,function(l){var o=typeof u<"u"&&u||typeof self<"u"&&self||typeof o<"u"&&o,b={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function F(e){return e&&DataView.prototype.isPrototypeOf(e)}if(b.arrayBuffer)var I=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],H=ArrayBuffer.isView||function(e){return e&&I.indexOf(Object.prototype.toString.call(e))>-1};function A(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function q(e){return typeof e!="string"&&(e=String(e)),e}function B(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}h.prototype.append=function(e,t){e=A(e),t=q(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[A(e)]},h.prototype.get=function(e){return e=A(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(A(e))},h.prototype.set=function(e,t){this.map[A(e)]=q(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),B(e)},h.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),B(e)},h.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),B(e)},b.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);function D(e){if(e.bodyUsed)return p.reject(new TypeError("Already read"));e.bodyUsed=!0}function C(e){return new p(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function M(e){var t=new FileReader,r=C(t);return t.readAsArrayBuffer(e),r}function L(e){var t=new FileReader,r=C(t);return t.readAsText(e),r}function N(e){for(var t=new Uint8Array(e),r=new Array(t.length),f=0;f<t.length;f++)r[f]=String.fromCharCode(t[f]);return r.join("")}function R(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function S(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:b.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:b.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():b.arrayBuffer&&b.blob&&F(e)?(this._bodyArrayBuffer=R(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):b.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||H(e))?this._bodyArrayBuffer=R(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=D(this);if(e)return e;if(this._bodyBlob)return p.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return p.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return p.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=D(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?p.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):p.resolve(this._bodyArrayBuffer))}else return this.blob().then(M)}),this.text=function(){var e=D(this);if(e)return e;if(this._bodyBlob)return L(this._bodyBlob);if(this._bodyArrayBuffer)return p.resolve(N(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return p.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(G)}),this.json=function(){return this.text().then(JSON.parse)},this}var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function V(e){var t=e.toUpperCase();return k.indexOf(t)>-1?t:e}function w(e,t){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new h(t.headers)),this.method=V(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var f=/([?&])_=[^&]*/;if(f.test(this.url))this.url=this.url.replace(f,"$1_="+new Date().getTime());else{var c=/\?/;this.url+=(c.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})};function G(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var f=r.split("="),c=f.shift().replace(/\+/g," "),i=f.join("=").replace(/\+/g," ");t.append(decodeURIComponent(c),decodeURIComponent(i))}}),t}function X(e){var t=new h,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(f){return f.indexOf(`
`)===0?f.substr(1,f.length):f}).forEach(function(f){var c=f.split(":"),i=c.shift().trim();if(i){var E=c.join(":").trim();t.append(i,E)}}),t}S.call(w.prototype);function g(e,t){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}S.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var z=[301,302,303,307,308];g.redirect=function(e,t){if(z.indexOf(t)===-1)throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},l.DOMException=o.DOMException;try{new l.DOMException}catch{l.DOMException=function(t,r){this.message=t,this.name=r;var f=Error(t);this.stack=f.stack},l.DOMException.prototype=Object.create(Error.prototype),l.DOMException.prototype.constructor=l.DOMException}function _(e,t){return new p(function(r,f){var c=new w(e,t);if(c.signal&&c.signal.aborted)return f(new l.DOMException("Aborted","AbortError"));var i=new v;function E(){i.abort()}i.onload=function(){var m={status:i.status,statusText:i.statusText,headers:X(i.getAllResponseHeaders()||"")};m.url="responseURL"in i?i.responseURL:m.headers.get("X-Request-URL");var T="response"in i?i.response:i.responseText;setTimeout(function(){r(new g(T,m))},0)},i.onerror=function(){setTimeout(function(){f(new TypeError("Network request failed"))},0)},i.ontimeout=function(){setTimeout(function(){f(new TypeError("Network request failed"))},0)},i.onabort=function(){setTimeout(function(){f(new l.DOMException("Aborted","AbortError"))},0)};function J(m){try{return m===""&&o.location.href?o.location.href:m}catch{return m}}i.open(c.method,J(c.url),!0),c.credentials==="include"?i.withCredentials=!0:c.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&(b.blob?i.responseType="blob":b.arrayBuffer&&c.headers.get("Content-Type")&&c.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(i.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof h)?Object.getOwnPropertyNames(t.headers).forEach(function(m){i.setRequestHeader(m,q(t.headers[m]))}):c.headers.forEach(function(m,T){i.setRequestHeader(T,m)}),c.signal&&(c.signal.addEventListener("abort",E),i.onreadystatechange=function(){i.readyState===4&&c.signal.removeEventListener("abort",E)}),i.send(typeof c._bodyInit>"u"?null:c._bodyInit)})}_.polyfill=!0,o.fetch||(o.fetch=_,o.Headers=h,o.Request=w,o.Response=g),l.Headers=h,l.Request=w,l.Response=g,l.fetch=_,Object.defineProperty(l,"__esModule",{value:!0})}),{fetch:u.fetch,Headers:u.Headers,Request:u.Request,Response:u.Response,DOMException:u.DOMException}}()}n.exports=y})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:x)})($,$.exports);var ie=$.exports;const oe=ae(ie),{fetch:fe,Headers:le}=oe(),ce=typeof fetch>"u"?fe:fetch,ue=typeof Headers>"u"?le:Headers;class he{constructor({token:s,url:a,queries:y,errorPolicy:d}){this.apiUrl=a,this.readonlyToken=s==null?void 0:s.trim(),this.queries=y(this),this.errorPolicy=d||"throw"}async request({errorPolicy:s,...a}){const y=s||this.errorPolicy,d=new ue;this.readonlyToken&&d.append("X-API-KEY",this.readonlyToken),d.append("Content-Type","application/json");const p=JSON.stringify({query:a.query,variables:(a==null?void 0:a.variables)||{}}),v=(a==null?void 0:a.url)||this.apiUrl,u=await ce(v,{method:"POST",headers:d,body:p,redirect:"follow"});if(!u.ok){let o="";throw u.status===401&&(o="Please check that your client ID, URL and read only token are configured properly."),new Error(`Server responded with status code ${u.status}, ${u.statusText}. ${o||""} Please see our FAQ for more information: https://tina.io/docs/errors/faq/`)}const l=await u.json();if(l.errors&&y==="throw")throw new Error(`Unable to fetch, please see our FAQ for more information: https://tina.io/docs/errors/faq/
        Errors: 
	${l.errors.map(o=>o.message).join(`
`)}`);return{data:l==null?void 0:l.data,errors:(l==null?void 0:l.errors)||null,query:a.query}}}function de(n){return new he(n)}function P(n,...s){let a="";return n.forEach((y,d)=>{a+=y+(s[d]||"")}),a}const U=P`
    fragment ArticleParts on Article {
  __typename
  titre
  desc
  date
  image
  imagealt
  body
}
    `,j=P`
    fragment PageParts on Page {
  __typename
  ... on PageConseilmunicipal {
    titre
    desc
    date
  }
  ... on PageInformationspratiques {
    titre
    desc
    date
  }
}
    `,pe=P`
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
    ${U}`,ye=P`
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
    ${U}`,be=P`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
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
    ...PageParts
  }
}
    ${j}`,me=P`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
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
        ...PageParts
      }
    }
  }
}
    ${j}`;function ge(n){return{article(s,a){return n(pe,s,a)},articleConnection(s,a){return n(ye,s,a)},page(s,a){return n(be,s,a)},pageConnection(s,a){return n(me,s,a)}}}const we=(n,s)=>async(y,d,p)=>{let v=n.apiUrl;if(p!=null&&p.branch){const l=n.apiUrl.lastIndexOf("/");v=n.apiUrl.substring(0,l+1)+p.branch}const u=await n.request({query:y,variables:d,url:v});return{data:u==null?void 0:u.data,errors:u==null?void 0:u.errors,query:y,variables:d||{}}},ve=(n,s)=>{const a=we(n);return ge(a)},qe=de({url:"https://content.tinajs.io/1.4/content/a9eebcdd-6a53-4c3e-975a-2f07564378d0/github/tina",token:"f0e36f82b826f9ad1a6257f584cd6a0cdb45893c",queries:ve});export{Te as N,qe as c,Ee as e};
