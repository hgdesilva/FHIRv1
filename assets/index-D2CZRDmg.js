var ut=Object.defineProperty;var ct=(t,e,n)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var G=(t,e,n)=>ct(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function C(){}function ft(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function Q(){return Object.create(null)}function k(t){t.forEach(nt)}function rt(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function dt(t,e,n,r){if(t){const s=st(t,e,n,r);return t[0](s)}}function st(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function pt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let f=0;f<i;f+=1)l[f]=e.dirty[f]|s[f];return l}return e.dirty|s}return e.dirty}function ht(t,e,n,r,s,l){if(s){const i=st(e,n,r,l);t.p(i,s)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function A(){return y(" ")}function gt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function x(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.data!==e&&(t.data=e)}let S;function N(t){S=t}function yt(){if(!S)throw new Error("Function called outside component initialization");return S}function bt(t){yt().$$.on_mount.push(t)}function wt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const O=[],W=[];let j=[];const X=[],vt=Promise.resolve();let T=!1;function xt(){T||(T=!0,vt.then(lt))}function U(t){j.push(t)}const K=new Set;let P=0;function lt(){if(P!==0)return;const t=S;do{try{for(;P<O.length;){const e=O[P];P++,N(e),Et(e.$$)}}catch(e){throw O.length=0,P=0,e}for(N(null),O.length=0,P=0;W.length;)W.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];K.has(n)||(K.add(n),n())}j.length=0}while(O.length);for(;X.length;)X.pop()();T=!1,K.clear(),N(t)}function Et(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}function Pt(t){const e=[],n=[];j.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),j=e}const I=new Set;let v;function it(){v={r:0,c:[],p:v}}function ot(){v.r||k(v.c),v=v.p}function _(t,e){t&&t.i&&(I.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),v.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Y(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function V(t){t&&t.c()}function D(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),U(()=>{const l=t.$$.on_mount.map(nt).filter(rt);t.$$.on_destroy?t.$$.on_destroy.push(...l):k(l),t.$$.on_mount=[]}),s.forEach(U)}function q(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(O.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,r,s,l,i=null,f=[-1]){const o=S;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Q(),dirty:f,skip_bound:!1,root:e.target||o.$$.root};i&&i(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(a,L,...w)=>{const E=w.length?w[0]:L;return u.ctx&&s(u.ctx[a],u.ctx[a]=E)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](E),c&&Ot(t,a)),L}):[],u.update(),c=!0,k(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=$t(e.target);u.fragment&&u.fragment.l(a),a.forEach(d)}else u.fragment&&u.fragment.c();e.intro&&_(t.$$.fragment),D(t,e.target,e.anchor),lt()}N(o)}class R{constructor(){G(this,"$$");G(this,"$$set")}$destroy(){q(this,1),this.$destroy=C}$on(e,n){if(!rt(n))return C;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);function jt(t){let e,n;const r=t[1].default,s=dt(r,t,t[0],null);return{c(){e=$("div"),s&&s.c(),x(e,"class","card svelte-1qekeb8")},m(l,i){h(l,e,i),s&&s.m(e,null),n=!0},p(l,[i]){s&&s.p&&(!n||i&1)&&ht(s,r,l,l[0],n?pt(r,l[0],i,null):mt(l[0]),null)},i(l){n||(_(s,l),n=!0)},o(l){b(s,l),n=!1},d(l){l&&d(e),s&&s.d(l)}}}function Lt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,r]}class Nt extends R{constructor(e){super(),F(this,e,Lt,jt,M,{})}}function Z(t,e,n){const r=t.slice();return r[1]=e[n],r}function Ct(t){var H;let e,n,r=t[1].resource.id+"",s,l,i,f,o=((H=t[1].resource)==null?void 0:H.gender)+"",u,c,a,L,w=t[1].resource.birthDate+"",E,z;return{c(){e=$("p"),n=y("id: "),s=y(r),l=A(),i=$("p"),f=y("Gender: "),u=y(o),c=A(),a=$("p"),L=y("date of birth: "),E=y(w),z=A()},m(p,g){h(p,e,g),m(e,n),m(e,s),h(p,l,g),h(p,i,g),m(i,f),m(i,u),h(p,c,g),h(p,a,g),m(a,L),m(a,E),h(p,z,g)},p(p,g){var J;g&1&&r!==(r=p[1].resource.id+"")&&B(s,r),g&1&&o!==(o=((J=p[1].resource)==null?void 0:J.gender)+"")&&B(u,o),g&1&&w!==(w=p[1].resource.birthDate+"")&&B(E,w)},d(p){p&&(d(e),d(l),d(i),d(c),d(a),d(z))}}}function tt(t){let e,n;return e=new Nt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(r,s){D(e,r,s),n=!0},p(r,s){const l={};s&17&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function St(t){let e,n,r,s,l=Y(t[0]),i=[];for(let o=0;o<l.length;o+=1)i[o]=tt(Z(t,l,o));const f=o=>b(i[o],1,1,()=>{i[o]=null});return{c(){e=$("h3"),e.textContent="Patients:",n=A(),r=$("div");for(let o=0;o<i.length;o+=1)i[o].c();x(e,"class","svelte-8050wi"),x(r,"class","patients svelte-8050wi")},m(o,u){h(o,e,u),h(o,n,u),h(o,r,u);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null);s=!0},p(o,[u]){if(u&1){l=Y(o[0]);let c;for(c=0;c<l.length;c+=1){const a=Z(o,l,c);i[c]?(i[c].p(a,u),_(i[c],1)):(i[c]=tt(a),i[c].c(),_(i[c],1),i[c].m(r,null))}for(it(),c=l.length;c<i.length;c+=1)f(c);ot()}},i(o){if(!s){for(let u=0;u<l.length;u+=1)_(i[u]);s=!0}},o(o){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)b(i[u]);s=!1},d(o){o&&(d(e),d(n),d(r)),_t(i,o)}}}let kt="https:/hapi.fhir.org/baseR4/Patient";function Bt(t,e,n){let r=[];return bt(async function(){const l=await(await fetch(kt)).json();n(0,r=l.entry)}),[r]}class It extends R{constructor(e){super(),F(this,e,Bt,St,M,{})}}function Mt(t){let e,n,r,s;return{c(){e=$("button"),n=y(t[0]),x(e,"class","svelte-1mot8ic")},m(l,i){h(l,e,i),m(e,n),r||(s=gt(e,"click",t[1]),r=!0)},p(l,[i]){i&1&&B(n,l[0])},i:C,o:C,d(l){l&&d(e),r=!1,s()}}}function Dt(t,e,n){let{message:r="Default text"}=e;function s(l){wt.call(this,t,l)}return t.$$set=l=>{"message"in l&&n(0,r=l.message)},[r,s]}class qt extends R{constructor(e){super(),F(this,e,Dt,Mt,M,{message:0})}}function et(t){let e,n;return e=new It({}),{c(){V(e.$$.fragment)},m(r,s){D(e,r,s),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Ft(t){let e,n,r,s,l,i,f,o=t[0]&&et();return i=new qt({props:{message:"Add a patient"}}),i.$on("click",t[1]),{c(){e=$("main"),n=$("h1"),n.textContent="Patient management application",r=A(),o&&o.c(),s=A(),l=$("div"),V(i.$$.fragment),x(n,"class","text-4xl text-200 svelte-1l1jpuw"),x(l,"class","create-patients"),x(e,"class","svelte-1l1jpuw")},m(u,c){h(u,e,c),m(e,n),m(e,r),o&&o.m(e,null),m(e,s),m(e,l),D(i,l,null),f=!0},p(u,[c]){u[0]?o?c&1&&_(o,1):(o=et(),o.c(),_(o,1),o.m(e,s)):o&&(it(),b(o,1,1,()=>{o=null}),ot())},i(u){f||(_(o),_(i.$$.fragment,u),f=!0)},o(u){b(o),b(i.$$.fragment,u),f=!1},d(u){u&&d(e),o&&o.d(),q(i)}}}function Rt(t,e,n){let r=!0;return[r,()=>{n(0,r=!r)}]}class zt extends R{constructor(e){super(),F(this,e,Rt,Ft,M,{})}}new zt({target:document.getElementById("app")});
