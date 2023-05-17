var C=Object.create;var D=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var h=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of z(t))!W.call(e,n)&&n!==r&&D(e,n,{get:()=>t[n],enumerable:!(o=N(t,n))||o.enumerable});return e};var B=(e,t,r)=>(r=e!=null?C(k(e)):{},_(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e));var O=S(b=>{"use strict";var p=h("react");function L(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var F=typeof Object.is=="function"?Object.is:L,G=p.useState,H=p.useEffect,J=p.useLayoutEffect,K=p.useDebugValue;function Q(e,t){var r=t(),o=G({inst:{value:r,getSnapshot:t}}),n=o[0].inst,u=o[1];return J(function(){n.value=r,n.getSnapshot=t,y(n)&&u({inst:n})},[e,r,t]),H(function(){return y(n)&&u({inst:n}),e(function(){y(n)&&u({inst:n})})},[e]),K(r),r}function y(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!F(e,r)}catch{return!0}}function U(e,t){return t()}var X=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?U:Q;b.useSyncExternalStore=p.useSyncExternalStore!==void 0?p.useSyncExternalStore:X});var q=S((fe,j)=>{"use strict";j.exports=O()});var V=S(I=>{"use strict";var E=h("react"),Y=q();function Z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $=typeof Object.is=="function"?Object.is:Z,ee=Y.useSyncExternalStore,te=E.useRef,re=E.useEffect,ne=E.useMemo,oe=E.useDebugValue;I.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var u=te(null);if(u.current===null){var a={hasValue:!1,value:null};u.current=a}else a=u.current;u=ne(function(){function s(c){if(!m){if(m=!0,i=c,c=o(c),n!==void 0&&a.hasValue){var d=a.value;if(n(d,c))return f=d}return f=c}if(d=f,$(i,c))return d;var x=o(c);return n!==void 0&&n(d,x)?d:(i=c,f=x)}var m=!1,i,f,v=r===void 0?null:r;return[function(){return s(t())},v===null?void 0:function(){return s(v())}]},[t,r,o,n]);var l=ee(e,u[0],u[1]);return re(function(){a.hasValue=!0,a.value=l},[l]),oe(l),l}});var M=S((pe,R)=>{"use strict";R.exports=V()});var g=e=>{let t,r=new Set,o=(s,m)=>{let i=typeof s=="function"?s(t):s;if(!Object.is(i,t)){let f=t;t=m??typeof i!="object"?i:Object.assign({},t,i),r.forEach(v=>v(t,f))}},n=()=>t,l={setState:o,getState:n,subscribe:s=>(r.add(s),()=>r.delete(s)),destroy:()=>{(import.meta.env&&import.meta.env.MODE)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(o,n,l),l},w=e=>e?g(e):g;var T=B(M(),1);import{useDebugValue as ue}from"react";var{useSyncExternalStoreWithSelector:se}=T.default;function ie(e,t=e.getState,r){let o=se(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return ue(o),o}var P=e=>{(import.meta.env&&import.meta.env.MODE)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t=typeof e=="function"?w(e):e,r=(o,n)=>ie(t,o,n);return Object.assign(r,t),r},A=e=>e?P(e):P;var xe=A((e,t)=>({items:[],setItem:r=>e({items:t().items.concat(r)})}));export{xe as useStripeStore};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
