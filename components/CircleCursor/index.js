import*as t from"react";import{createPortal as E}from"react-dom";import{motion as v}from"framer-motion";import{ControlType as b,useMotionValue as y}from"framer";var f="cbe0c23a539a01b1045915544ed1a7e7ce15a0552a0603664fef20379aba0706",P=`._cursorWrapper_10tzq_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
  width: fit-content;
  height: fit-content;
}

._cursorPosition_10tzq_12 {
  width: max-content;
  height: max-content;
  transform: translate(-50%, -50%);
}

._cursor_10tzq_1 {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  pointer-events: none;
  border: solid var(--border-width) var(--border-color);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=P,document.head.appendChild(e)}})();var d={cursorWrapper:"_cursorWrapper_10tzq_1",cursorPosition:"_cursorPosition_10tzq_12",cursor:"_cursor_10tzq_1"};import{getColorProps as h,getNumProps as n}from"../../utils/framerControlProps.js";import{Fragment as N,jsx as u}from"react/jsx-runtime";var M=()=>{let e=y(0),s=y(0),[r,a]=t.useState("");return t.useEffect(()=>{let i=o=>{e.set(o.clientX),s.set(o.clientY),console.log(o.target?.nodeName);let c=o.target.nodeName;["A","BUTTON","IMG"].includes(c)?a(c):r&&a("")};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[r]),[e,s,r]},k=({delay:e=.3,size:s=20,opacity:r=1,opacityOnHover:a=.5,borderColor:i="transparent",borderWidth:o=0,hoverScale:c=3,bgColor:g="deepskyblue",hideDefaultCursor:x=!1})=>{let[_,C,m]=M(),[p,w]=t.useState(),z=!!globalThis.window;return t.useEffect(()=>{let l=document.createElement("div");return l.setAttribute("data-type","fc-cursor"),document.body.appendChild(l),w(l),x&&(document.body.style.cursor="none"),()=>{document.body.removeChild(l)}},[z]),p?E(u(N,{children:u(v.div,{className:d.cursorWrapper,style:{x:_,y:C,scale:m?c:1,"--delay":`${e}s`,opacity:m?a:r},children:u("div",{className:d.cursorPosition,children:u(v.div,{className:d.cursor,style:{x:0,y:0,"--color":g,"--size":s+"px","--border-color":i,"--border-width":o+"px"}})})})}),p):null},B={size:n(50,!1,5,{min:10,max:100}),hoverScale:n(1,!1,.1,{min:1,max:5}),bgColor:{...h("deepskyblue"),title:"Background Color"},opacity:n(1,!1,.1,{min:0,max:1}),opacityOnHover:n(1,!1,.1,{min:0,max:1}),borderWidth:n(0,!1,1,{min:0,max:10}),borderColor:h("transparent"),delay:{type:b.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:b.Boolean,defaultValue:!1}};export{k as CircleCursor,B as propControls};
