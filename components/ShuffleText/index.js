import{useRef as c,useState as h}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as b}from"react";import{useSplitText as v}from"../../hooks/useSplitText.js";var f="bb351b07ceb5e54d33275465f6be909b5cd3bd71e65f4df048b28a2cffb28f5b",d=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=d,document.head.appendChild(t)}})();var l={container:"_container_8s2l8_1"};import{useMemo as M}from"react";import{useInView as w}from"framer-motion";import{jsx as i}from"react/jsx-runtime";var I=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},C=({maxIterations:t=10,letter:r})=>{let a=M(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=h(""),o=c(0);return b(()=>{let n;return n=setInterval(()=>{o.current<a?(e(I()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),i("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=v(t),e=c(null),o=w(e),n=s.map(({letter:m,isSpace:p},u)=>i(C,{maxIterations:r,letter:p?" ":m},u));return i("div",{ref:e,style:{...x(a)},className:l.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
