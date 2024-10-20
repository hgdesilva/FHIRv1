var $e=Object.defineProperty;var ye=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>ye(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function k(){}function be(e,t){for(const n in t)e[n]=t[n];return e}function de(e){return e()}function se(){return Object.create(null)}function I(e){e.forEach(de)}function he(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ve(e){return Object.keys(e).length===0}function we(e,t,n,r){if(e){const l=pe(e,t,n,r);return e[0](l)}}function pe(e,t,n,r){return e[1]&&r?be(n.ctx.slice(),e[1](r(t))):n.ctx}function xe(e,t,n,r){if(e[2]&&r){const l=e[2](r(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const s=[],i=Math.max(t.dirty.length,l.length);for(let f=0;f<i;f+=1)s[f]=t.dirty[f]|l[f];return s}return t.dirty|l}return t.dirty}function Ee(e,t,n,r,l,s){if(l){const i=pe(t,n,r,s);e.p(i,l)}}function Pe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function h(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function Oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function v(){return g(" ")}function Ae(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function N(e,t){t=""+t,e.data!==t&&(e.data=t)}let B;function S(e){B=e}function je(){if(!B)throw new Error("Function called outside component initialization");return B}function Le(e){je().$$.on_mount.push(e)}function Ce(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const j=[],ie=[];let L=[];const oe=[],Se=Promise.resolve();let W=!1;function ke(){W||(W=!0,Se.then(me))}function X(e){L.push(e)}const Q=new Set;let A=0;function me(){if(A!==0)return;const e=B;do{try{for(;A<j.length;){const t=j[A];A++,S(t),Be(t.$$)}}catch(t){throw j.length=0,A=0,t}for(S(null),j.length=0,A=0;ie.length;)ie.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];Q.has(n)||(Q.add(n),n())}L.length=0}while(j.length);for(;oe.length;)oe.pop()();W=!1,Q.clear(),S(e)}function Be(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function Ie(e){const t=[],n=[];L.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),L=t}const q=new Set;let x;function _e(){x={r:0,c:[],p:x}}function ge(){x.r||I(x.c),x=x.p}function y(e,t){e&&e.i&&(q.delete(e),e.i(t))}function w(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),x.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Y(e){e&&e.c()}function R(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),X(()=>{const s=e.$$.on_mount.map(de).filter(he);e.$$.on_destroy?e.$$.on_destroy.push(...s):I(s),e.$$.on_mount=[]}),l.forEach(X)}function z(e,t){const n=e.$$;n.fragment!==null&&(Ie(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(j.push(e),ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,r,l,s,i=null,f=[-1]){const o=B;S(e);const u=e.$$={fragment:null,ctx:[],props:s,update:k,not_equal:l,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:se(),dirty:f,skip_bound:!1,root:t.target||o.$$.root};i&&i(u.root);let c=!1;if(u.ctx=n?n(e,t.props||{},(a,P,...O)=>{const b=O.length?O[0]:P;return u.ctx&&l(u.ctx[a],u.ctx[a]=b)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](b),c&&Me(e,a)),P}):[],u.update(),c=!0,I(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const a=Ne(t.target);u.fragment&&u.fragment.l(a),a.forEach(p)}else u.fragment&&u.fragment.c();t.intro&&y(e.$$.fragment),R(e,t.target,t.anchor),me()}S(o)}class K{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){z(this,1),this.$destroy=k}$on(t,n){if(!he(n))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const De="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(De);function qe(e){let t,n;const r=e[1].default,l=we(r,e,e[0],null);return{c(){t=$("div"),l&&l.c(),E(t,"class","card svelte-1qekeb8")},m(s,i){_(s,t,i),l&&l.m(t,null),n=!0},p(s,[i]){l&&l.p&&(!n||i&1)&&Ee(l,r,s,s[0],n?xe(r,s[0],i,null):Pe(s[0]),null)},i(s){n||(y(l,s),n=!0)},o(s){w(l,s),n=!1},d(s){s&&p(t),l&&l.d(s)}}}function Fe(e,t,n){let{$$slots:r={},$$scope:l}=t;return e.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,r]}class Re extends K{constructor(t){super(),G(this,t,Fe,qe,F,{})}}function ce(e,t,n){const r=e.slice();return r[1]=t[n],r}function ze(e){var te,ne;let t,n,r=e[1].resource.name[0].given[0]+"",l,s,i=((te=e[1].resource.name[0])==null?void 0:te.family)+"",f,o,u,c,a=e[1].resource.id+"",P,O,b,Z,M=((ne=e[1].resource)==null?void 0:ne.gender)+"",T,U,C,ee,D=e[1].resource.birthDate+"",V,H;return{c(){t=$("p"),n=g("Name: "),l=g(r),s=v(),f=g(i),o=v(),u=$("p"),c=g("id: "),P=g(a),O=v(),b=$("p"),Z=g("Gender: "),T=g(M),U=v(),C=$("p"),ee=g("date of birth: "),V=g(D),H=v()},m(d,m){_(d,t,m),h(t,n),h(t,l),h(t,s),h(t,f),_(d,o,m),_(d,u,m),h(u,c),h(u,P),_(d,O,m),_(d,b,m),h(b,Z),h(b,T),_(d,U,m),_(d,C,m),h(C,ee),h(C,V),_(d,H,m)},p(d,m){var re,le;m&1&&r!==(r=d[1].resource.name[0].given[0]+"")&&N(l,r),m&1&&i!==(i=((re=d[1].resource.name[0])==null?void 0:re.family)+"")&&N(f,i),m&1&&a!==(a=d[1].resource.id+"")&&N(P,a),m&1&&M!==(M=((le=d[1].resource)==null?void 0:le.gender)+"")&&N(T,M),m&1&&D!==(D=d[1].resource.birthDate+"")&&N(V,D)},d(d){d&&(p(t),p(o),p(u),p(O),p(b),p(U),p(C),p(H))}}}function fe(e){let t,n;return t=new Re({props:{$$slots:{default:[ze]},$$scope:{ctx:e}}}),{c(){Y(t.$$.fragment)},m(r,l){R(t,r,l),n=!0},p(r,l){const s={};l&17&&(s.$$scope={dirty:l,ctx:r}),t.$set(s)},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){z(t,r)}}}function Ge(e){let t,n,r,l,s=ue(e[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=fe(ce(e,s,o));const f=o=>w(i[o],1,1,()=>{i[o]=null});return{c(){t=$("h3"),t.textContent="Patients:",n=v(),r=$("div");for(let o=0;o<i.length;o+=1)i[o].c();E(t,"class","svelte-8050wi"),E(r,"class","patients svelte-8050wi")},m(o,u){_(o,t,u),_(o,n,u),_(o,r,u);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null);l=!0},p(o,[u]){if(u&1){s=ue(o[0]);let c;for(c=0;c<s.length;c+=1){const a=ce(o,s,c);i[c]?(i[c].p(a,u),y(i[c],1)):(i[c]=fe(a),i[c].c(),y(i[c],1),i[c].m(r,null))}for(_e(),c=s.length;c<i.length;c+=1)f(c);ge()}},i(o){if(!l){for(let u=0;u<s.length;u+=1)y(i[u]);l=!0}},o(o){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)w(i[u]);l=!1},d(o){o&&(p(t),p(n),p(r)),Oe(i,o)}}}let Ke="https:/hapi.fhir.org/baseR4/Patient";function Te(e,t,n){let r=[];return Le(()=>{fetch(Ke).then(l=>l.json()).then(l=>{n(0,r=l.entry)}).catch(l=>console.log(l))}),[r]}class Ue extends K{constructor(t){super(),G(this,t,Te,Ge,F,{})}}function Ve(e){let t,n,r,l;return{c(){t=$("button"),n=g(e[0]),E(t,"class","svelte-1mot8ic")},m(s,i){_(s,t,i),h(t,n),r||(l=Ae(t,"click",e[1]),r=!0)},p(s,[i]){i&1&&N(n,s[0])},i:k,o:k,d(s){s&&p(t),r=!1,l()}}}function He(e,t,n){let{message:r="Default text"}=t;function l(s){Ce.call(this,e,s)}return e.$$set=s=>{"message"in s&&n(0,r=s.message)},[r,l]}class Je extends K{constructor(t){super(),G(this,t,He,Ve,F,{message:0})}}function ae(e){let t,n;return t=new Ue({}),{c(){Y(t.$$.fragment)},m(r,l){R(t,r,l),n=!0},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){z(t,r)}}}function Qe(e){let t,n,r,l,s,i,f,o=e[0]&&ae();return i=new Je({props:{message:"Add a patient"}}),i.$on("click",e[1]),{c(){t=$("main"),n=$("h1"),n.textContent="Patient management application",r=v(),o&&o.c(),l=v(),s=$("div"),Y(i.$$.fragment),E(n,"class","text-4xl text-200 svelte-1l1jpuw"),E(s,"class","create-patients"),E(t,"class","svelte-1l1jpuw")},m(u,c){_(u,t,c),h(t,n),h(t,r),o&&o.m(t,null),h(t,l),h(t,s),R(i,s,null),f=!0},p(u,[c]){u[0]?o?c&1&&y(o,1):(o=ae(),o.c(),y(o,1),o.m(t,l)):o&&(_e(),w(o,1,1,()=>{o=null}),ge())},i(u){f||(y(o),y(i.$$.fragment,u),f=!0)},o(u){w(o),w(i.$$.fragment,u),f=!1},d(u){u&&p(t),o&&o.d(),z(i)}}}function We(e,t,n){let r=!0;return[r,()=>{n(0,r=!1)}]}class Xe extends K{constructor(t){super(),G(this,t,We,Qe,F,{})}}new Xe({target:document.getElementById("app")});