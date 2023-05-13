import{useRef as c,useState as h}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var i="db2364327bf20a8afe3e51dedf7b293d693def7f8bfc30da36b8eb9860e6bff1",u=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=u,document.head.appendChild(t)}})();var l={container:"_container_8s2l8_1"};import{useMemo as b}from"react";import{useInView as w}from"framer-motion";import{jsx as f}from"react/jsx-runtime";var I=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},C=({maxIterations:t=10,letter:r})=>{let a=b(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=h(""),o=c(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(I()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),f("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=c(null),o=w(e),n=s.map(({letter:m,isSpace:p},d)=>f(C,{maxIterations:r,letter:p?" ":m},d));return f("div",{ref:e,style:{...x(a)},className:l.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
