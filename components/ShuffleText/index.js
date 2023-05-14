import{useRef as c,useState as h}from"react";import{getNumProps as g,getTypeographyStyles as x,typography as y}from"../../utils/framerControlProps.js";import{useEffect as v}from"react";import{useSplitText as M}from"../../hooks/useSplitText.js";var f="d1de7f45a5ff76e1dc45188fdb14093f6637fe00919ead2d119cd1d17ab1331a",u=`._container_8s2l8_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  letter-spacing: var(--letter-spacing, 0);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=u,document.head.appendChild(t)}})();var l={container:"_container_8s2l8_1"};import{useMemo as w}from"react";import{useInView as I}from"framer-motion";import{jsx as i}from"react/jsx-runtime";var C=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},S=({maxIterations:t=10,letter:r})=>{let a=w(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[s,e]=h(""),o=c(0);return v(()=>{let n;return n=setInterval(()=>{o.current<a?(e(C()),o.current=o.current+1):(e(r),clearInterval(n))},Math.max(100,Math.random()*200)),()=>{clearInterval(n)}},[]),i("span",{children:s})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let s=M(t),e=c(null),o=I(e),n=s.map(({letter:m,isSpace:p},d)=>i(S,{maxIterations:r,letter:p?" ":m},d));return i("div",{ref:e,style:{...x(a)},className:l.container,children:o?n:null})},B={typography:y,maxIterations:g(10,!1)};export{k as ShuffleText,B as propsControls};
