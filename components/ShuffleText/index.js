import{useRef as l,useState as h}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var i="be89cc6df9edbc603e851f1f3c117fec3ab4e639dd6c0871cee41cf37e97f8e6",d=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=d,document.head.appendChild(t)}})();var f={container:"_container_8s2l8_1"};import{useMemo as w}from"react";import{useInView as I}from"framer-motion";import{jsx as c}from"react/jsx-runtime";var C=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},S=({maxIterations:t=10,letter:r})=>{let a=w(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=h(""),o=l(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(C()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),c("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=l(null),o=I(e),n=s.map(({letter:m,isSpace:p},u)=>c(S,{maxIterations:r,letter:p?" ":m},u));return c("div",{ref:e,style:{...x(a)},className:f.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
