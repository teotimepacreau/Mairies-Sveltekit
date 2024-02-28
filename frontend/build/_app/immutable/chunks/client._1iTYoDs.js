var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $={exports:{}};(function(s,h){(function(o){function g(y){var d=y&&y.Promise||o.Promise,v=y&&y.XMLHttpRequest||o.XMLHttpRequest;return function(){var l=Object.create(o,{fetch:{value:void 0,writable:!0}});return function(f,i){i(h)}(this,function(f){var i=typeof l<"u"&&l||typeof self<"u"&&self||typeof i<"u"&&i,p={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function C(e){return e&&DataView.prototype.isPrototypeOf(e)}if(p.arrayBuffer)var F=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],H=ArrayBuffer.isView||function(e){return e&&F.indexOf(Object.prototype.toString.call(e))>-1};function A(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function _(e){return typeof e!="string"&&(e=String(e)),e}function B(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return p.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}c.prototype.append=function(e,t){e=A(e),t=_(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},c.prototype.delete=function(e){delete this.map[A(e)]},c.prototype.get=function(e){return e=A(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(A(e))},c.prototype.set=function(e,t){this.map[A(e)]=_(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),B(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),B(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),B(e)},p.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);function D(e){if(e.bodyUsed)return d.reject(new TypeError("Already read"));e.bodyUsed=!0}function U(e){return new d(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function I(e){var t=new FileReader,r=U(t);return t.readAsArrayBuffer(e),r}function M(e){var t=new FileReader,r=U(t);return t.readAsText(e),r}function L(e){for(var t=new Uint8Array(e),r=new Array(t.length),a=0;a<t.length;a++)r[a]=String.fromCharCode(t[a]);return r.join("")}function q(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function R(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:p.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:p.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():p.arrayBuffer&&p.blob&&C(e)?(this._bodyArrayBuffer=q(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||H(e))?this._bodyArrayBuffer=q(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var e=D(this);if(e)return e;if(this._bodyBlob)return d.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return d.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return d.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=D(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?d.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):d.resolve(this._bodyArrayBuffer))}else return this.blob().then(I)}),this.text=function(){var e=D(this);if(e)return e;if(this._bodyBlob)return M(this._bodyBlob);if(this._bodyArrayBuffer)return d.resolve(L(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return d.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(G)}),this.json=function(){return this.text().then(JSON.parse)},this}var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function N(e){var t=e.toUpperCase();return k.indexOf(t)>-1?t:e}function w(e,t){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new c(t.headers)),this.method=N(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+new Date().getTime());else{var u=/\?/;this.url+=(u.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})};function G(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var a=r.split("="),u=a.shift().replace(/\+/g," "),n=a.join("=").replace(/\+/g," ");t.append(decodeURIComponent(u),decodeURIComponent(n))}}),t}function V(e){var t=new c,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(a){return a.indexOf(`
`)===0?a.substr(1,a.length):a}).forEach(function(a){var u=a.split(":"),n=u.shift().trim();if(n){var T=u.join(":").trim();t.append(n,T)}}),t}R.call(w.prototype);function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}R.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var X=[301,302,303,307,308];m.redirect=function(e,t){if(X.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},f.DOMException=i.DOMException;try{new f.DOMException}catch{f.DOMException=function(t,r){this.message=t,this.name=r;var a=Error(t);this.stack=a.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function O(e,t){return new d(function(r,a){var u=new w(e,t);if(u.signal&&u.signal.aborted)return a(new f.DOMException("Aborted","AbortError"));var n=new v;function T(){n.abort()}n.onload=function(){var b={status:n.status,statusText:n.statusText,headers:V(n.getAllResponseHeaders()||"")};b.url="responseURL"in n?n.responseURL:b.headers.get("X-Request-URL");var E="response"in n?n.response:n.responseText;setTimeout(function(){r(new m(E,b))},0)},n.onerror=function(){setTimeout(function(){a(new TypeError("Network request failed"))},0)},n.ontimeout=function(){setTimeout(function(){a(new TypeError("Network request failed"))},0)},n.onabort=function(){setTimeout(function(){a(new f.DOMException("Aborted","AbortError"))},0)};function z(b){try{return b===""&&i.location.href?i.location.href:b}catch{return b}}n.open(u.method,z(u.url),!0),u.credentials==="include"?n.withCredentials=!0:u.credentials==="omit"&&(n.withCredentials=!1),"responseType"in n&&(p.blob?n.responseType="blob":p.arrayBuffer&&u.headers.get("Content-Type")&&u.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(n.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof c)?Object.getOwnPropertyNames(t.headers).forEach(function(b){n.setRequestHeader(b,_(t.headers[b]))}):u.headers.forEach(function(b,E){n.setRequestHeader(E,b)}),u.signal&&(u.signal.addEventListener("abort",T),n.onreadystatechange=function(){n.readyState===4&&u.signal.removeEventListener("abort",T)}),n.send(typeof u._bodyInit>"u"?null:u._bodyInit)})}O.polyfill=!0,i.fetch||(i.fetch=O,i.Headers=c,i.Request=w,i.Response=m),f.Headers=c,f.Request=w,f.Response=m,f.fetch=O,Object.defineProperty(f,"__esModule",{value:!0})}),{fetch:l.fetch,Headers:l.Headers,Request:l.Request,Response:l.Response,DOMException:l.DOMException}}()}s.exports=g})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:x)})($,$.exports);var Q=$.exports;const K=J(Q),{fetch:Y,Headers:W}=K(),Z=typeof fetch>"u"?Y:fetch,ee=typeof Headers>"u"?W:Headers;class te{constructor({token:h,url:o,queries:g,errorPolicy:y}){this.apiUrl=o,this.readonlyToken=h==null?void 0:h.trim(),this.queries=g(this),this.errorPolicy=y||"throw"}async request({errorPolicy:h,...o}){const g=h||this.errorPolicy,y=new ee;this.readonlyToken&&y.append("X-API-KEY",this.readonlyToken),y.append("Content-Type","application/json");const d=JSON.stringify({query:o.query,variables:(o==null?void 0:o.variables)||{}}),v=(o==null?void 0:o.url)||this.apiUrl,l=await Z(v,{method:"POST",headers:y,body:d,redirect:"follow"});if(!l.ok){let i="";throw l.status===401&&(i="Please check that your client ID, URL and read only token are configured properly."),new Error(`Server responded with status code ${l.status}, ${l.statusText}. ${i||""} Please see our FAQ for more information: https://tina.io/docs/errors/faq/`)}const f=await l.json();if(f.errors&&g==="throw")throw new Error(`Unable to fetch, please see our FAQ for more information: https://tina.io/docs/errors/faq/
        Errors: 
	${f.errors.map(i=>i.message).join(`
`)}`);return{data:f==null?void 0:f.data,errors:(f==null?void 0:f.errors)||null,query:o.query}}}function re(s){return new te(s)}function P(s,...h){let o="";return s.forEach((g,y)=>{o+=g+(h[y]||"")}),o}const S=P`
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
    fragment PagesParts on Pages {
  __typename
  titre
  categorie
  emoji
  contenu
}
    `,ne=P`
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
    ${S}`,oe=P`
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
    ${S}`,se=P`
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
    ${j}`,ie=P`
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
    ${j}`;function ae(s){return{article(h,o){return s(ne,h,o)},articleConnection(h,o){return s(oe,h,o)},pages(h,o){return s(se,h,o)},pagesConnection(h,o){return s(ie,h,o)}}}const fe=(s,h)=>async(g,y,d)=>{let v=s.apiUrl;if(d!=null&&d.branch){const f=s.apiUrl.lastIndexOf("/");v=s.apiUrl.substring(0,f+1)+d.branch}const l=await s.request({query:g,variables:y,url:v});return{data:l==null?void 0:l.data,errors:l==null?void 0:l.errors,query:g,variables:y||{}}},ue=(s,h)=>{const o=fe(s);return ae(o)},le=re({url:"https://content.tinajs.io/1.4/content/b0376671-e258-4c36-8fa7-4ca68387c7a8/github/tina",token:"600ef325207364bc7ac69d039b6b05fa97b8c8e1",queries:ue});export{le as c};
