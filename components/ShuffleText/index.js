import{useRef as f,useState as d}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var i="5caf5a959aeb0a5bdbc0cce0c608a4347ed2f795a93503abc9b233a7347c502a",h=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=h,document.head.appendChild(t)}})();var l={container:"_container_8s2l8_1"};import{useMemo as b}from"react";import{useInView as w}from"framer-motion";import{jsx as c}from"react/jsx-runtime";var I=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},C=({maxIterations:t=10,letter:r})=>{let a=b(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=d(""),o=f(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(I()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),c("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=f(null),o=w(e),n=s.map(({letter:m,isSpace:p},u)=>c(C,{maxIterations:r,letter:p?" ":m},u));return c("div",{ref:e,style:{...x(a)},className:l.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
