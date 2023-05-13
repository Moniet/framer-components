import*as t from"react";import{createPortal as H}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as v,useMotionValue as y}from"framer";var f="00a7d19073de5b61addb24374390725060c08816c210613e729be76b96ff9d08",P=`._cursorWrapper_gfj04_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
  width: fit-content;
  height: fit-content;
}

._cursor_gfj04_1 {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  pointer-events: none;
  transform: translate(-50%, -50%);
  border: solid var(--border-width) var(--border-color);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=P,document.head.appendChild(e)}})();var c={cursorWrapper:"_cursorWrapper_gfj04_1",cursor:"_cursor_gfj04_1"};import{getColorProps as g,getNumProps as n}from"../../utils/framerControlProps.js";import{Fragment as S,jsx as u}from"react/jsx-runtime";var N=()=>{let e=y(0),s=y(0),[r,a]=t.useState("");return t.useEffect(()=>{let i=o=>{e.set(o.clientX),s.set(o.clientY),console.log(o.target?.nodeName);let l=o.target.nodeName;["A","BUTTON","IMG"].includes(l)?a(l):r&&a("")};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[r]),[e,s,r]},X=({children:e,delay:s=.3,size:r=20,opacity:a=1,opacityOnHover:i=.5,borderColor:o="transparent",borderWidth:l=0,hoverScale:h=3,bgColor:x="deepskyblue",hideDefaultCursor:C=!1})=>{let[w,_,m]=N(),[p,E]=t.useState(),M=!!globalThis.window;return t.useEffect(()=>{let d=document.createElement("div");return d.setAttribute("data-type","fc-cursor"),document.body.appendChild(d),E(d),C&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[M,e]),p?H(u(S,{children:u(b.div,{className:c.cursorWrapper,style:{x:w,y:_,scale:m?h:1,"--delay":`${s}s`,opacity:m?i:a},children:u(b.div,{className:c.cursor,style:{x:0,y:0,"--color":x,"--size":r+"px","--border-color":o,"--border-width":l+"px"}})})}),p):null},j={size:n(50,!1,5,{min:10,max:100}),hoverScale:n(1,!1,.1,{min:1,max:5}),bgColor:{...g("deepskyblue"),title:"Background Color"},opacity:n(1,!1,.1,{min:0,max:1}),opacityOnHover:n(1,!1,.1,{min:0,max:1}),borderWidth:n(0,!1,1,{min:0,max:10}),borderColor:g("transparent"),delay:{type:v.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:v.Boolean,defaultValue:!1}};export{X as CircleCursor,j as propControls};
