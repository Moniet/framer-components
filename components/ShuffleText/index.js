import{useRef as l,useState as h}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var i="cdb0ac95dbb9fc27a4b108f8eb2c4ffc3d0e4c8a5a50f3e23df93700b97eb274",d=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=d,document.head.appendChild(t)}})();var f={container:"_container_8s2l8_1"};import{useMemo as b}from"react";import{useInView as w}from"framer-motion";import{jsx as c}from"react/jsx-runtime";var I=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},C=({maxIterations:t=10,letter:r})=>{let a=b(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=h(""),o=l(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(I()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),c("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=l(null),o=w(e),n=s.map(({letter:m,isSpace:p},u)=>c(C,{maxIterations:r,letter:p?" ":m},u));return c("div",{ref:e,style:{...x(a)},className:f.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
