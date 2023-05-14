import{useRef as f,useState as d}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var c="01bf995678f7d961f576c7e91b8503e3b69c141ea29f4c75fa538a26ac701868",h=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var t=document.createElement("style");t.id=c,t.textContent=h,document.head.appendChild(t)}})();var l={container:"_container_8s2l8_1"};import{useMemo as w}from"react";import{useInView as I}from"framer-motion";import{jsx as i}from"react/jsx-runtime";var C=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},S=({maxIterations:t=10,letter:r})=>{let a=w(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=d(""),o=f(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(C()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),i("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=f(null),o=I(e),n=s.map(({letter:m,isSpace:p},u)=>i(S,{maxIterations:r,letter:p?" ":m},u));return i("div",{ref:e,style:{...x(a)},className:l.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
