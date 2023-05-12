import{useRef as d,useState as p}from"react";import{getNumProps as h,getTypeographyStyles as u,typography as x}from"../../utils/framerControlProps.js";import{useEffect as y}from"react";import{useSplitText as g}from"../../hooks/useSplitText.js";var c="aca673ada8037dfab7d43de5a8254d60ecef5db8fbca4e2db228d3a7c49a4881",l=`._container_1bskn_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var t=document.createElement("style");t.id=c,t.textContent=l,document.head.appendChild(t)}})();var f={container:"_container_1bskn_1"};import{useMemo as M}from"react";import{jsx as s}from"react/jsx-runtime";var v=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},b=({maxIterations:t=10,letter:r})=>{let a=M(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[i,n]=p(""),e=d(0);return y(()=>{let o;return o=setInterval(()=>{e.current<a?(n(v()),e.current=e.current+1):(n(r),clearInterval(o))},Math.max(100,Math.random()*200)),()=>{clearInterval(o)}},[]),s("span",{children:i})},k=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let n=g(t).map(({letter:e,isSpace:o},m)=>s(b,{maxIterations:r,letter:o?" ":e},m));return s("div",{style:{...u(a)},className:f.container,children:n})},z={typography:x,maxIterations:h(10,!1)};export{k as ShuffleText,z as propsControls};
