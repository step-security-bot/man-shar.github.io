var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function h(t,e,n,r,s,o,i){const a=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(a){const s=u(e,n,r,i);t.p(s,a)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t){return null==t?"":t}function m(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(){return y("")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:x(t,r,e[r])}function E(t){return Array.from(t.childNodes)}function k(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?v(e):g(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return y(e)}function S(t){return A(t," ")}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let O;function D(t){O=t}function H(){if(!O)throw new Error("Function called outside component initialization");return O}function R(){const t=H();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}function N(t,e){H().$$.context.set(t,e)}function P(t){return H().$$.context.get(t)}const T=[],_=[],L=[],C=[],B=Promise.resolve();let V=!1;function z(t){L.push(t)}let G=!1;const U=new Set;function M(){if(!G){G=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];D(e),K(e.$$)}for(D(null),T.length=0;_.length;)_.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(T.length);for(;C.length;)C.pop()();V=!1,G=!1,U.clear()}}function K(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const F=new Set;let W;function q(){W={r:0,c:[],p:W}}function X(){W.r||s(W.c),W=W.p}function Z(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),W.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function J(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e){t&&t.l(e)}function nt(t,e,r){const{fragment:i,on_mount:a,on_destroy:c,after_update:l}=t.$$;i&&i.m(e,r),z(()=>{const e=a.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(z)}function rt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(T.push(t),V||(V=!0,B.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,o,i,a,c,l=[-1]){const u=O;D(e);const h=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,h,(t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&st(e,t)),n}):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=E(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&Z(e.$$.fragment),nt(e,n.target,n.anchor),M()}D(u)}class it{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ct(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.push(c),1===s.length&&(r=n(o)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}function lt(e,n,r){const i=!Array.isArray(e),c=i?[e]:e,l=n.length<2;return{subscribe:ct(r,e=>{let r=!1;const u=[];let h=0,f=t;const p=()=>{if(h)return;f();const r=n(i?u[0]:u,e);l?e(r):f=o(r)?r:t},m=c.map((t,e)=>a(t,t=>{u[e]=t,h&=~(1<<e),r&&p()},()=>{h|=1<<e}));return r=!0,p(),function(){s(m),f()}}).subscribe}}const ut={},ht={};function ft(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const pt=function(t,e){const n=[];let r=ft(t);return{get location(){return r},listen(e){n.push(e);const s=()=>{r=ft(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",s),()=>{t.removeEventListener("popstate",s);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:s,replace:o=!1}={}){s={...s,key:Date.now()+""};try{o?t.history.replaceState(s,null,e):t.history.pushState(s,null,e)}catch(n){t.location[o?"replace":"assign"](e)}r=ft(t),n.forEach(t=>t({location:r,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,s,o){const[i,a=""]=o.split("?");e++,n.push({pathname:i,search:a}),r.push(t)},replaceState(t,s,o){const[i,a=""]=o.split("?");n[e]={pathname:i,search:a},r[e]=t}}}}()),{navigate:mt}=pt,dt=/^:(.+)/;function $t(t,e){return t.substr(0,e.length)===e}function gt(t){return"*"===t[0]}function vt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function yt(t){return t.replace(/(^\/+|\/+$)/g,"")}function bt(t,e){return{route:t,score:t.default?0:vt(t.path).reduce((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return dt.test(t)}(e)?gt(e)?t-=5:t+=3:t+=2:t+=1,t),0),index:e}}function wt(t,e){let n,r;const[s]=e.split("?"),o=vt(s),i=""===o[0],a=function(t){return t.map(bt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,s=a.length;t<s;t++){const s=a[t].route;let c=!1;if(s.default){r={route:s,params:{},uri:e};continue}const l=vt(s.path),u={},h=Math.max(o.length,l.length);let f=0;for(;f<h;f++){const t=l[f],e=o[f];if(void 0!==t&&gt(t)){u["*"===t?"*":t.slice(1)]=o.slice(f).map(decodeURIComponent).join("/");break}if(void 0===e){c=!0;break}let n=dt.exec(t);if(n&&!i){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){c=!0;break}}if(!c){n={route:s,params:u,uri:"/"+o.slice(0,f).join("/")};break}}return n||r||null}function xt(t,e){return t+(e?"?"+e:"")}function It(t,e){return yt("/"===e?t:`${yt(t)}/${yt(e)}`)+"/"}function Et(t){let e;const n=t[6].default,r=l(n,t,t[5],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&32&e&&h(r,n,t,t[5],e,null,null)},i(t){e||(Z(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){r&&r.d(t)}}}function kt(t,e,n){let r,s,o,{$$slots:i={},$$scope:a}=e,{basepath:l="/"}=e,{url:u=null}=e;const h=P(ut),f=P(ht),p=ct([]);c(t,p,t=>n(10,o=t));const m=ct(null);let d=!1;const $=h||ct(u?{pathname:u}:pt.location);c(t,$,t=>n(9,s=t));const g=f?f.routerBase:ct({path:l,uri:l});c(t,g,t=>n(8,r=t));const v=lt([g,m],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:s}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:s}});var y;return h||(y=()=>pt.listen(t=>{$.set(t.location)}),H().$$.on_mount.push(y),N(ut,$)),N(ht,{activeRoute:m,base:g,routerBase:v,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=It(e,n),"undefined"==typeof window){if(d)return;const e=function(t,e){return wt([t],e)}(t,s.pathname);e&&(m.set(e),d=!0)}else p.update(e=>(e.push(t),e))},unregisterRoute:function(t){p.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}}),t.$$set=t=>{"basepath"in t&&n(3,l=t.basepath),"url"in t&&n(4,u=t.url),"$$scope"in t&&n(5,a=t.$$scope)},t.$$.update=()=>{if(256&t.$$.dirty){const{path:t}=r;p.update(e=>(e.forEach(e=>e.path=It(t,e._path)),e))}if(1536&t.$$.dirty){const t=wt(o,s.pathname);m.set(t)}},[p,$,g,l,u,a,i]}class At extends it{constructor(t){super(),ot(this,t,kt,Et,i,{basepath:3,url:4})}}const St=t=>({params:2&t,location:16&t}),jt=t=>({params:t[1],location:t[4]});function Ot(t){let e,n,r,s;const o=[Ht,Dt],i=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=w()},l(t){n.l(t),r=w()},m(t,n){i[e].m(t,n),d(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(q(),Y(i[c],1,1,()=>{i[c]=null}),X(),n=i[e],n||(n=i[e]=o[e](t),n.c()),Z(n,1),n.m(r.parentNode,r))},i(t){s||(Z(n),s=!0)},o(t){Y(n),s=!1},d(t){i[e].d(t),t&&$(r)}}}function Dt(t){let e;const n=t[10].default,r=l(n,t,t[9],jt);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&530&e&&h(r,n,t,t[9],e,St,jt)},i(t){e||(Z(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){r&&r.d(t)}}}function Ht(t){let n,r,s;const o=[{location:t[4]},t[1],t[2]];var i=t[0];function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&tt(n.$$.fragment),r=w()},l(t){n&&et(n.$$.fragment,t),r=w()},m(t,e){n&&nt(n,t,e),d(t,r,e),s=!0},p(t,e){const s=22&e?J(o,[16&e&&{location:t[4]},2&e&&Q(t[1]),4&e&&Q(t[2])]):{};if(i!==(i=t[0])){if(n){q();const t=n;Y(t.$$.fragment,1,0,()=>{rt(t,1)}),X()}i?(n=new i(a()),tt(n.$$.fragment),Z(n.$$.fragment,1),nt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&Z(n.$$.fragment,t),s=!0)},o(t){n&&Y(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&rt(n,t)}}}function Rt(t){let e,n,r=null!==t[3]&&t[3].route===t[7]&&Ot(t);return{c(){r&&r.c(),e=w()},l(t){r&&r.l(t),e=w()},m(t,s){r&&r.m(t,s),d(t,e,s),n=!0},p(t,[n]){null!==t[3]&&t[3].route===t[7]?r?(r.p(t,n),8&n&&Z(r,1)):(r=Ot(t),r.c(),Z(r,1),r.m(e.parentNode,e)):r&&(q(),Y(r,1,1,()=>{r=null}),X())},i(t){n||(Z(r),n=!0)},o(t){Y(r),n=!1},d(t){r&&r.d(t),t&&$(e)}}}function Nt(t,n,r){let s,o,{$$slots:i={},$$scope:a}=n,{path:l=""}=n,{component:u=null}=n;const{registerRoute:h,unregisterRoute:p,activeRoute:m}=P(ht);c(t,m,t=>r(3,s=t));const d=P(ut);c(t,d,t=>r(4,o=t));const $={path:l,default:""===l};let g={},v={};var y;return h($),"undefined"!=typeof window&&(y=()=>{p($)},H().$$.on_destroy.push(y)),t.$$set=t=>{r(13,n=e(e({},n),f(t))),"path"in t&&r(8,l=t.path),"component"in t&&r(0,u=t.component),"$$scope"in t&&r(9,a=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&s&&s.route===$&&r(1,g=s.params);{const{path:t,component:e,...s}=n;r(2,v=s)}},n=f(n),[u,g,v,s,o,m,d,$,l,a,i]}class Pt extends it{constructor(t){super(),ot(this,t,Nt,Rt,i,{path:8,component:0})}}function Tt(t){let n,r,s,o;const i=t[11].default,a=l(i,t,t[10],null);let c=[{href:t[0]},{"aria-current":t[2]},t[1]],u={};for(let t=0;t<c.length;t+=1)u=e(u,c[t]);return{c(){n=g("a"),a&&a.c(),this.h()},l(t){n=k(t,"A",{href:!0,"aria-current":!0});var e=E(n);a&&a.l(e),e.forEach($),this.h()},h(){I(n,u)},m(e,i){var c,l,u,h;d(e,n,i),a&&a.m(n,null),r=!0,s||(c=n,l="click",u=t[5],c.addEventListener(l,u,h),o=()=>c.removeEventListener(l,u,h),s=!0)},p(t,[e]){a&&a.p&&1024&e&&h(a,i,t,t[10],e,null,null),I(n,u=J(c,[(!r||1&e)&&{href:t[0]},(!r||4&e)&&{"aria-current":t[2]},2&e&&t[1]]))},i(t){r||(Z(a,t),r=!0)},o(t){Y(a,t),r=!1},d(t){t&&$(n),a&&a.d(t),s=!1,o()}}}function _t(t,e,n){let r,s,{$$slots:o={},$$scope:i}=e,{to:a="#"}=e,{replace:l=!1}=e,{state:u={}}=e,{getProps:h=(()=>({}))}=e;const{base:f}=P(ht);c(t,f,t=>n(14,r=t));const p=P(ut);c(t,p,t=>n(15,s=t));const m=R();let d,$,g,v,y;return t.$$set=t=>{"to"in t&&n(6,a=t.to),"replace"in t&&n(7,l=t.replace),"state"in t&&n(8,u=t.state),"getProps"in t&&n(9,h=t.getProps),"$$scope"in t&&n(10,i=t.$$scope)},t.$$.update=()=>{16448&t.$$.dirty&&n(0,d="/"===a?r.uri:function(t,e){if($t(t,"/"))return t;const[n,r]=t.split("?"),[s]=e.split("?"),o=vt(n),i=vt(s);if(""===o[0])return xt(s,r);if(!$t(o[0],"."))return xt(("/"===s?"":"/")+i.concat(o).join("/"),r);const a=i.concat(o),c=[];return a.forEach(t=>{".."===t?c.pop():"."!==t&&c.push(t)}),xt("/"+c.join("/"),r)}(a,r.uri)),32769&t.$$.dirty&&n(12,$=$t(s.pathname,d)),32769&t.$$.dirty&&n(13,g=d===s.pathname),8192&t.$$.dirty&&n(2,y=g?"page":void 0),45569&t.$$.dirty&&n(1,v=h({location:s,href:d,isPartiallyCurrent:$,isCurrent:g}))},[d,v,y,f,p,function(t){if(m("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=s.pathname===d||l;mt(d,{state:u,replace:e})}},a,l,u,h,i,o]}class Lt extends it{constructor(t){super(),ot(this,t,_t,Tt,i,{to:6,replace:7,state:8,getProps:9})}}function Ct(e){let n,r,s;return{c(){n=v("svg"),r=v("path"),this.h()},l(t){n=k(t,"svg",{"aria-hidden":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=E(n);r=k(e,"path",{fill:!0,d:!0},1),E(r).forEach($),e.forEach($),this.h()},h(){x(r,"fill","currentColor"),x(r,"d",e[0]),x(n,"aria-hidden","true"),x(n,"class",s=p(e[1])+" svelte-1d15yci"),x(n,"role","img"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox",e[2])},m(t,e){d(t,n,e),m(n,r)},p(t,[e]){1&e&&x(r,"d",t[0]),2&e&&s!==(s=p(t[1])+" svelte-1d15yci")&&x(n,"class",s),4&e&&x(n,"viewBox",t[2])},i:t,o:t,d(t){t&&$(n)}}}function Bt(t,n,r){let{icon:s}=n,o=[],i="",a="";return t.$$set=t=>{r(4,n=e(e({},n),f(t))),"icon"in t&&r(3,s=t.icon)},t.$$.update=()=>{8&t.$$.dirty&&r(2,a="0 0 "+s.icon[0]+" "+s.icon[1]),r(1,i="fa-svelte "+(n.class?n.class:"")),8&t.$$.dirty&&r(0,o=s.icon[4])},n=f(n),[o,i,a,s]}class Vt extends it{constructor(t){super(),ot(this,t,Bt,Ct,i,{icon:3})}}function zt(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var Gt=zt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="github",r=[],s="f09b",o="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";e.definition={prefix:"fab",iconName:n,icon:[496,512,r,s,o]},e.faGithub=e.definition,e.prefix="fab",e.iconName=n,e.width=496,e.height=512,e.ligatures=r,e.unicode=s,e.svgPathData=o})),Ut=zt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="file-alt",r=[],s="f15c",o="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z";e.definition={prefix:"fas",iconName:n,icon:[384,512,r,s,o]},e.faFileAlt=e.definition,e.prefix="fas",e.iconName=n,e.width=384,e.height=512,e.ligatures=r,e.unicode=s,e.svgPathData=o}));function Mt(t){let e;return{c(){e=y("Published")},l(t){e=A(t,"Published")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function Kt(t){let e;return{c(){e=y("About")},l(t){e=A(t,"About")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function Ft(t){let e,n,r,s,o,i,a;return n=new Lt({props:{to:"/",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),i=new Lt({props:{to:"about",$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){e=g("div"),tt(n.$$.fragment),r=b(),s=g("span"),o=b(),tt(i.$$.fragment),this.h()},l(t){e=k(t,"DIV",{class:!0});var a=E(e);et(n.$$.fragment,a),r=S(a),s=k(a,"SPAN",{class:!0}),E(s).forEach($),o=S(a),et(i.$$.fragment,a),a.forEach($),this.h()},h(){x(s,"class","divide svelte-14jwz4e"),x(e,"class","flex-left svelte-14jwz4e")},m(t,c){d(t,e,c),nt(n,e,null),m(e,r),m(e,s),m(e,o),nt(i,e,null),a=!0},p(t,e){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s)},i(t){a||(Z(n.$$.fragment,t),Z(i.$$.fragment,t),a=!0)},o(t){Y(n.$$.fragment,t),Y(i.$$.fragment,t),a=!1},d(t){t&&$(e),rt(n),rt(i)}}}function Wt(t){let e,n,r,s,o,i,a,c,l,u,h,f;return n=new At({props:{url:t[0],$$slots:{default:[Ft]},$$scope:{ctx:t}}}),i=new Vt({props:{icon:Ut.faFileAlt}}),h=new Vt({props:{icon:Gt.faGithub}}),{c(){e=g("div"),tt(n.$$.fragment),r=b(),s=g("div"),o=g("a"),tt(i.$$.fragment),a=b(),c=g("span"),l=b(),u=g("a"),tt(h.$$.fragment),this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0});var f=E(e);et(n.$$.fragment,f),r=S(f),s=k(f,"DIV",{class:!0});var p=E(s);o=k(p,"A",{class:!0,title:!0,href:!0});var m=E(o);et(i.$$.fragment,m),m.forEach($),a=S(p),c=k(p,"SPAN",{class:!0}),E(c).forEach($),l=S(p),u=k(p,"A",{class:!0,title:!0,target:!0,href:!0});var d=E(u);et(h.$$.fragment,d),d.forEach($),p.forEach($),f.forEach($),this.h()},h(){x(o,"class","icon"),x(o,"title","Resume"),x(o,"href","assets/resume.pdf"),x(c,"class","divide svelte-14jwz4e"),x(u,"class","icon"),x(u,"title","Github"),x(u,"target","_blank"),x(u,"href","https://github.com/manas271196"),x(s,"class","flex-right svelte-14jwz4e"),x(e,"id","divider"),x(e,"class","svelte-14jwz4e")},m(t,p){d(t,e,p),nt(n,e,null),m(e,r),m(e,s),m(s,o),nt(i,o,null),m(s,a),m(s,c),m(s,l),m(s,u),nt(h,u,null),f=!0},p(t,[e]){const r={};1&e&&(r.url=t[0]),2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){f||(Z(n.$$.fragment,t),Z(i.$$.fragment,t),Z(h.$$.fragment,t),f=!0)},o(t){Y(n.$$.fragment,t),Y(i.$$.fragment,t),Y(h.$$.fragment,t),f=!1},d(t){t&&$(e),rt(n),rt(i),rt(h)}}}function qt(t,e,n){let{url:r=""}=e;return t.$$set=t=>{"url"in t&&n(0,r=t.url)},[r]}class Xt extends it{constructor(t){super(),ot(this,t,qt,Wt,i,{url:0})}}function Zt(t){let e,n;return{c(){e=g("img"),this.h()},l(t){e=k(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){x(e,"class","h-100"),e.src!==(n="assets/"+t[0])&&x(e,"src",n),x(e,"alt","kn")},m(t,n){d(t,e,n)},p(t,r){1&r&&e.src!==(n="assets/"+t[0])&&x(e,"src",n)},d(t){t&&$(e)}}}function Yt(t){let e,n,r;return{c(){e=g("video"),n=g("source"),this.h()},l(t){e=k(t,"VIDEO",{class:!0,autoplay:!0,loop:!0,muted:!0,playsinline:!0});var r=E(e);n=k(r,"SOURCE",{src:!0}),r.forEach($),this.h()},h(){n.src!==(r="assets/"+t[0])&&x(n,"src",r),x(e,"class","h-100"),e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0},m(t,r){d(t,e,r),m(e,n)},p(t,e){1&e&&n.src!==(r="assets/"+t[0])&&x(n,"src",r)},d(t){t&&$(e)}}}function Jt(e){let n,r;function s(t,e){return(null==r||1&e)&&(r=!(!t[0]||-1===t[0].indexOf("mp4"))),r?Yt:Zt}let o=s(e,-1),i=o(e);return{c(){n=g("div"),i.c(),this.h()},l(t){n=k(t,"DIV",{class:!0});var e=E(n);i.l(e),e.forEach($),this.h()},h(){x(n,"class","project-image svelte-1usd5um")},m(t,e){d(t,n,e),i.m(n,null)},p(t,[e]){o===(o=s(t,e))&&i?i.p(t,e):(i.d(1),i=o(t),i&&(i.c(),i.m(n,null)))},i:t,o:t,d(t){t&&$(n),i.d()}}}function Qt(t,e,n){let{path:r}=e;return t.$$set=t=>{"path"in t&&n(0,r=t.path)},[r]}class te extends it{constructor(t){super(),ot(this,t,Qt,Jt,i,{path:0})}}function ee(e){let n,r;return{c(){n=g("div"),r=y(e[0])},l(t){n=k(t,"DIV",{});var s=E(n);r=A(s,e[0]),s.forEach($)},m(t,e){d(t,n,e),m(n,r)},p(t,[e]){1&e&&j(r,t[0])},i:t,o:t,d(t){t&&$(n)}}}function ne(t,e,n){let{name:r}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name)},[r]}class re extends it{constructor(t){super(),ot(this,t,ne,ee,i,{name:0})}}function se(t){let e,n,r,s,o,i,a;return r=new te({props:{path:t[0].img}}),o=new re({props:{name:t[0].name}}),{c(){e=g("a"),n=g("div"),tt(r.$$.fragment),s=b(),tt(o.$$.fragment),this.h()},l(t){e=k(t,"A",{target:!0,href:!0,class:!0});var i=E(e);n=k(i,"DIV",{class:!0});var a=E(n);et(r.$$.fragment,a),s=S(a),et(o.$$.fragment,a),a.forEach($),i.forEach($),this.h()},h(){x(n,"class","project svelte-68joy8"),x(e,"target","_blank"),x(e,"href",i=t[0].link),x(e,"class","svelte-68joy8")},m(t,i){d(t,e,i),m(e,n),nt(r,n,null),m(n,s),nt(o,n,null),a=!0},p(t,[n]){const s={};1&n&&(s.path=t[0].img),r.$set(s);const c={};1&n&&(c.name=t[0].name),o.$set(c),(!a||1&n&&i!==(i=t[0].link))&&x(e,"href",i)},i(t){a||(Z(r.$$.fragment,t),Z(o.$$.fragment,t),a=!0)},o(t){Y(r.$$.fragment,t),Y(o.$$.fragment,t),a=!1},d(t){t&&$(e),rt(r),rt(o)}}}function oe(t,e,n){let{project:r}=e;return t.$$set=t=>{"project"in t&&n(0,r=t.project)},[r]}class ie extends it{constructor(t){super(),ot(this,t,oe,se,i,{project:0})}}function ae(t,e,n){const r=t.slice();return r[1]=e[n],r}function ce(t){let e,n;return e=new ie({props:{project:t[1]}}),{c(){tt(e.$$.fragment)},l(t){et(e.$$.fragment,t)},m(t,r){nt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.project=t[1]),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}function le(t){let e,n,r=t[0],s=[];for(let e=0;e<r.length;e+=1)s[e]=ce(ae(t,r,e));const o=t=>Y(s[t],1,1,()=>{s[t]=null});return{c(){e=g("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0});var n=E(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach($),this.h()},h(){x(e,"id","projects-container"),x(e,"class","svelte-1qg77cl")},m(t,r){d(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,[n]){if(1&n){let i;for(r=t[0],i=0;i<r.length;i+=1){const o=ae(t,r,i);s[i]?(s[i].p(o,n),Z(s[i],1)):(s[i]=ce(o),s[i].c(),Z(s[i],1),s[i].m(e,null))}for(q(),i=r.length;i<s.length;i+=1)o(i);X()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)Z(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)Y(s[t]);n=!1},d(t){t&&$(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function ue(t,e,n){let{projects:r}=e;return t.$$set=t=>{"projects"in t&&n(0,r=t.projects)},[r]}class he extends it{constructor(t){super(),ot(this,t,ue,le,i,{projects:0})}}function fe(e){let n,r,s,o,i,a,c,l,u,h,f,p;return{c(){n=g("div"),r=g("p"),s=y("I was born and raised in the city of Lucknow, Uttar Pradesh. The city's\n    culture and mannerisms are still a big part of who I am (I hope)."),o=b(),i=g("p"),a=y("I studied design at IIT, Guwahati."),c=b(),l=g("p"),u=y("I have previously been an intern at the Info Design Lab at IDC, Hindustan\n    Times, Scroll and The Washington Post."),h=b(),f=g("p"),p=y("I've had the great fortune of learning from the most talented and supportive\n    people from the industry. I'm an extremely lucky kid."),this.h()},l(t){n=k(t,"DIV",{id:!0,class:!0});var e=E(n);r=k(e,"P",{});var m=E(r);s=A(m,"I was born and raised in the city of Lucknow, Uttar Pradesh. The city's\n    culture and mannerisms are still a big part of who I am (I hope)."),m.forEach($),o=S(e),i=k(e,"P",{});var d=E(i);a=A(d,"I studied design at IIT, Guwahati."),d.forEach($),c=S(e),l=k(e,"P",{});var g=E(l);u=A(g,"I have previously been an intern at the Info Design Lab at IDC, Hindustan\n    Times, Scroll and The Washington Post."),g.forEach($),h=S(e),f=k(e,"P",{});var v=E(f);p=A(v,"I've had the great fortune of learning from the most talented and supportive\n    people from the industry. I'm an extremely lucky kid."),v.forEach($),e.forEach($),this.h()},h(){x(n,"id","about-container"),x(n,"class","svelte-mi7zou")},m(t,e){d(t,n,e),m(n,r),m(r,s),m(n,o),m(n,i),m(i,a),m(n,c),m(n,l),m(l,u),m(n,h),m(n,f),m(f,p)},p:t,i:t,o:t,d(t){t&&$(n)}}}class pe extends it{constructor(t){super(),ot(this,t,null,fe,i,{})}}function me(e){let n;return{c(){n=g("div"),this.h()},l(t){n=k(t,"DIV",{id:!0}),E(n).forEach($),this.h()},h(){x(n,"id","resume-container")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class de extends it{constructor(t){super(),ot(this,t,null,me,i,{})}}function $e(t){let e,n;return e=new he({props:{projects:t[1]}}),{c(){tt(e.$$.fragment)},l(t){et(e.$$.fragment,t)},m(t,r){nt(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.projects=t[1]),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}function ge(t){let e,n,r,s,o,i,a;return n=new Pt({props:{path:"about",component:pe}}),s=new Pt({props:{path:"resume",component:de}}),i=new Pt({props:{path:"/",$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){e=g("div"),tt(n.$$.fragment),r=b(),tt(s.$$.fragment),o=b(),tt(i.$$.fragment)},l(t){e=k(t,"DIV",{});var a=E(e);et(n.$$.fragment,a),r=S(a),et(s.$$.fragment,a),o=S(a),et(i.$$.fragment,a),a.forEach($)},m(t,c){d(t,e,c),nt(n,e,null),m(e,r),nt(s,e,null),m(e,o),nt(i,e,null),a=!0},p(t,e){const n={};10&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n)},i(t){a||(Z(n.$$.fragment,t),Z(s.$$.fragment,t),Z(i.$$.fragment,t),a=!0)},o(t){Y(n.$$.fragment,t),Y(s.$$.fragment,t),Y(i.$$.fragment,t),a=!1},d(t){t&&$(e),rt(n),rt(s),rt(i)}}}function ve(t){let e,n,r,s,o,i,a,c,l,u,h,f;return l=new Xt({}),h=new At({props:{url:t[2],$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){e=g("main"),n=g("div"),r=g("h1"),s=y(t[0]),o=b(),i=g("p"),a=y("Resident pixel pusher at Reuters Graphics, Singapore"),c=b(),tt(l.$$.fragment),u=b(),tt(h.$$.fragment),this.h()},l(f){e=k(f,"MAIN",{class:!0});var p=E(e);n=k(p,"DIV",{id:!0,class:!0});var m=E(n);r=k(m,"H1",{class:!0});var d=E(r);s=A(d,t[0]),d.forEach($),o=S(m),i=k(m,"P",{class:!0});var g=E(i);a=A(g,"Resident pixel pusher at Reuters Graphics, Singapore"),g.forEach($),c=S(m),et(l.$$.fragment,m),m.forEach($),u=S(p),et(h.$$.fragment,p),p.forEach($),this.h()},h(){x(r,"class","svelte-vhxhna"),x(i,"class","one-liner svelte-vhxhna"),x(n,"id","top"),x(n,"class","svelte-vhxhna"),x(e,"class","svelte-vhxhna")},m(t,p){d(t,e,p),m(e,n),m(n,r),m(r,s),m(n,o),m(n,i),m(i,a),m(n,c),nt(l,n,null),m(e,u),nt(h,e,null),f=!0},p(t,[e]){(!f||1&e)&&j(s,t[0]);const n={};4&e&&(n.url=t[2]),10&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n)},i(t){f||(Z(l.$$.fragment,t),Z(h.$$.fragment,t),f=!0)},o(t){Y(l.$$.fragment,t),Y(h.$$.fragment,t),f=!1},d(t){t&&$(e),rt(l),rt(h)}}}function ye(t,e,n){let{name:r}=e,{projects:s}=e,{url:o=""}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name),"projects"in t&&n(1,s=t.projects),"url"in t&&n(2,o=t.url)},[r,s,o]}return new class extends it{constructor(t){super(),ot(this,t,ye,ve,i,{name:0,projects:1,url:2})}}({target:document.body,props:{name:"Manas Sharma",projects:[{name:"How herd immunity works",link:"https://graphics.reuters.com/HEALTH-CORONAVIRUS/HERD%20IMMUNITY%20(EXPLAINER)/gjnvwayydvw/index.html",year:2020,img:"herd.mp4"},{name:"Singapore's COVID-19 explosion",link:"https://graphics.reuters.com/HEALTH-CORONAVIRUS/SINGAPORE-CLUSTERS/bdwpkdgngvm/index.html",year:2020,img:"singapore.mp4"},{name:"Assessing Australia's bushfires impact on wildlife",link:"https://graphics.reuters.com/AUSTRALIA-BUSHFIRES-WILDLIFE/0100B5672VM/index.html",year:2020,img:"wildlife.mp4"},{name:"Shifting smoke: California's wildfires",link:"https://graphics.reuters.com/USA-WILDFIRE/POLLUTION/xlbpgjgervq/index.html",year:2020,img:"cali-smoke.mp4"},{name:"A day of COVID-19 deaths",link:"http://graphics.reuters.com/HEALTH-CORONAVIRUS/DEATHS/xlbpgobgapq/index.html",year:2020,img:"clocks.mp4"},{name:"How big were Australia's bushfires?",link:"https://graphics.reuters.com/AUSTRALIA-BUSHFIRES-SCALE/0100B4VK2PN/index.html",year:2020,img:"aus-scale.jpg"},{name:"The risks of swiftly spreading coronavirus research",link:"https://graphics.reuters.com/CHINA-HEALTH-RESEARCH/0100B5ES3MG/index.html",year:2020,img:"speed-science.jpg"},{name:"Forests in flames: Australia’s bushfires from space",link:"https://graphics.reuters.com/AUSTRALIA-BUSHFIRES-SATELLITEIMAGES/0100B4R62H1/index.html",year:2019,img:"aus-satellite.jpg"},{name:"Pollution in India: The world's worst air",link:"https://graphics.reuters.com/INDIA-POLLUTION-MAP/0100B30824L/index.html",year:2019,img:"india-pollution.mp4"},{name:"Dangerous heights: Deaths on the Himalayas",link:"https://tmsnrt.rs/2r5hOS3",year:2019,img:"himalayas.mp4"},{name:"Wikipedia wars: Hong Kong’s online frontline",link:"https://graphics.reuters.com/HONGKONG-PROTESTS-WIKIPEDIA/0100B33629V/index.html",year:2019,img:"hk-wiki.mp4"},{name:"How big were the Hong Kong protests?",link:"https://graphics.reuters.com/HONGKONG-EXTRADITION-CROWDSIZE/0100B05W0BE/index.html",year:2019,img:"head-count.mp4"},{name:"Sounds and slogans from the Hong Kong protests",link:"https://graphics.reuters.com/HONGKONG-EXTRADITION-SIGNS/0100B0630BZ/index.html",year:2019,img:"hk-signs.jpg"},{name:"How India mobilised a million polling stations ",link:"https://graphics.reuters.com/INDIA-ELECTION-STATIONS/010092FY33Z/index.html",year:2019,img:"india-polling.jpg"},{name:"What are baseball players' favourite cliches?",link:"https://www.washingtonpost.com/graphics/2018/sports/baseball-cliches/",year:2018,img:"baseball.png"},{name:"Rising communal hate crimes in India",link:"https://www.washingtonpost.com/graphics/2018/world/reports-of-hate-crime-cases-have-spiked-in-india/",year:2018,img:"india-hate.gif"},{name:'How big is Delhi\'s dowry "bazaar"?',link:"https://www.hindustantimes.com/interactives/delhi-dowry-bazaar/",year:2017,img:"dowry.png"},{name:"Looking at grade inflation by a national board of education in India",link:"https://www.hindustantimes.com/interactives/cbse-results-2017-marks-inflation-decade/",year:2017,img:"cbse.mp4"},{name:"A brief history of the US Open",link:"https://www.hindustantimes.com/interactives/a-brief-history-of-the-us-open/",year:2017,img:"us-open.png"},{name:"Graphic design movements throughout history",link:"https://manas271196.github.io/Graphic-Design-Movements-Streamgraph/GraphicDesignStream.html",year:2017,img:"graphic.png"},{name:"How society shaped Bollywood through the past century",link:"https://manas271196.github.io/BollyBlues/bolly.html",year:2017,img:"bolly.png"}]},hydrate:!0})}();
//# sourceMappingURL=bundle.js.map
