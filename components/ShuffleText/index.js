import{useRef as p,useState as d}from"react";import{getNumProps as h,getTypeographyStyles as u,typography as x}from"../../utils/framerControlProps.js";import{useEffect as y}from"react";import{useSplitText as g}from"../../hooks/useSplitText.js";var c="9f8db09887028d96242e76ba367d20ad9e351bc6d33cc64b33378aeffe09cb54",l=`._container_xja2y_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--color);
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var t=document.createElement("style");t.id=c,t.textContent=l,document.head.appendChild(t)}})();var f={container:"_container_xja2y_1"};import{useMemo as v}from"react";import{jsx as s}from"react/jsx-runtime";var M=()=>{let t=Math.floor(Math.max(33,Math.random()*126));return String.fromCharCode(t)},b=({maxIterations:t=10,letter:r})=>{let a=v(()=>Math.min(10,Math.floor(Math.max(1,Math.random()*t))),[t]),[i,n]=d(""),e=p(0);return y(()=>{let o;return o=setInterval(()=>{e.current<a?(n(M()),e.current=e.current+1):(n(r),clearInterval(o))},Math.max(100,Math.random()*200)),()=>{clearInterval(o)}},[]),s("span",{children:i})},z=({text:t="Example Text",maxIterations:r=10,typography:a})=>{let n=g(t).map(({letter:e,isSpace:o},m)=>s(b,{maxIterations:r,letter:o?" ":e},m));return s("div",{style:{...u(a)},className:f.container,children:n})},N={typography:x,maxIterations:h(10,!1)};export{z as ShuffleText,N as propsControls};
