import{useRef as p,useState as d}from"react";import{getNumProps as h,getTypeographyStyles as u,typography as x}from"../../utils/framerControlProps.js";import{useEffect as y}from"react";import{useSplitText as g}from"../../hooks/useSplitText.js";var f="472ae9bf42a98a9f20dea5a38c56b44a6cd5d2426b0045d7b2e3bbbe118c2fe8",l=`._container_1bskn_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=l,document.head.appendChild(t)}})();var m={container:"_container_1bskn_1"};import{useMemo as b}from"react";import{jsx as s}from"react/jsx-runtime";var M=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},v=({maxIterations:t=10,letter:r})=>{let a=b(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[i,n]=d(""),e=p(0);return y(()=>{let o;return o=setInterval(()=>{e.current<a?(n(M()),e.current=e.current+1):(n(r),clearInterval(o))},Math.max(100,Math.random()*200)),()=>{clearInterval(o)}},[]),s("span",{children:i})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let n=g(t).map(({letter:e,isSpace:o},c)=>s(v,{maxIterations:r,letter:o?" ":e},c));return s("div",{style:{...u(a)},className:m.container,children:n})},z={typography:x,maxIterations:h(10,!1)};export{k as ShuffleText,z as propsControls};
