import*as o from"react";import{createPortal as E}from"react-dom";import{motion as f}from"framer-motion";import{ControlType as v,useMotionValue as y}from"framer";var b="4c30b15793bcccc2227dad9aa525b1d519e2b2b4c5dbb5e097522f02aad600ba",P=`._cursorWrapper_10tzq_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(b)){var e=document.createElement("style");e.id=b,e.textContent=P,document.head.appendChild(e)}})();var l={cursorWrapper:"_cursorWrapper_10tzq_1",cursorPosition:"_cursorPosition_10tzq_12",cursor:"_cursor_10tzq_1"};import{getColorProps as h,getNumProps as s}from"../../utils/framerControlProps.js";import{Fragment as H,jsx as u}from"react/jsx-runtime";var M=()=>{let e=y(0),n=y(0),[t,a]=o.useState("");return o.useEffect(()=>{let i=r=>{e.set(r.clientX),n.set(r.clientY);let c=r.target.nodeName;["A","BUTTON","IMG"].includes(c)?a(c):t&&a("")};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[t]),[e,n,t]},k=({delay:e=.3,size:n=20,opacity:t=1,opacityOnHover:a=.5,borderColor:i="transparent",borderWidth:r=0,hoverScale:c=3,bgColor:g="deepskyblue",hideDefaultCursor:x=!1})=>{let[_,C,m]=M(),[p,w]=o.useState(),z=!!globalThis.window;return o.useEffect(()=>{let d=document.createElement("div");return d.setAttribute("data-type","fc-cursor"),document.body.appendChild(d),w(d),x&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[z]),p?E(u(H,{children:u(f.div,{className:l.cursorWrapper,style:{x:_,y:C,scale:m?c:1,"--delay":`${e}s`,opacity:m?a:t},children:u("div",{className:l.cursorPosition,children:u(f.div,{className:l.cursor,style:{x:0,y:0,"--color":g,"--size":n+"px","--border-color":i,"--border-width":r+"px"}})})})}),p):null},B={size:s(30,!1,5,{min:10,max:100}),hoverScale:s(2,!1,.1,{min:1,max:5}),bgColor:{...h("deepskyblue"),title:"Background Color"},opacity:s(1,!1,.1,{min:0,max:1}),opacityOnHover:s(.5,!1,.1,{min:0,max:1}),borderWidth:s(0,!1,1,{min:0,max:10}),borderColor:h("transparent"),delay:{type:v.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:v.Boolean,defaultValue:!1}};export{k as CircleCursor,B as propControls};
