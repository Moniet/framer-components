import*as t from"react";import{createPortal as P}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as v,useMotionValue as y}from"framer";var f="4597d4562031f27cf22279f3ba688940cbde93f36517e40316f9059cc912dbae",M=`._cursorWrapper_gfj04_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=M,document.head.appendChild(e)}})();var d={cursorWrapper:"_cursorWrapper_gfj04_1",cursor:"_cursor_gfj04_1"};import{getColorProps as g,getNumProps as n}from"../../utils/framerControlProps.js";import{Fragment as N,jsx as u}from"react/jsx-runtime";var H=()=>{let e=y(0),s=y(0),[r,a]=t.useState("");return t.useEffect(()=>{let i=o=>{e.set(o.clientX),s.set(o.clientY),console.log(o.target?.nodeName);let c=o.target.nodeName;["A","BUTTON","IMG"].includes(c)?a(c):r&&a("")};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[r]),[e,s,r]},D=({delay:e=.3,size:s=20,opacity:r=1,opacityOnHover:a=.5,borderColor:i="transparent",borderWidth:o=0,hoverScale:c=3,bgColor:h="deepskyblue",hideDefaultCursor:x=!1})=>{let[C,w,m]=H(),[p,_]=t.useState(),E=!!globalThis.window;return t.useEffect(()=>{let l=document.createElement("div");return l.setAttribute("data-type","fc-cursor"),document.body.appendChild(l),_(l),x&&(document.body.style.cursor="none"),()=>{document.body.removeChild(l)}},[E]),p?P(u(N,{children:u(b.div,{className:d.cursorWrapper,style:{x:C,y:w,scale:m?c:1,"--delay":`${e}s`,opacity:m?a:r},children:u(b.div,{className:d.cursor,style:{x:0,y:0,"--color":h,"--size":s+"px","--border-color":i,"--border-width":o+"px"}})})}),p):null},j={size:n(50,!1,5,{min:10,max:100}),hoverScale:n(1,!1,.1,{min:1,max:5}),bgColor:{...g("deepskyblue"),title:"Background Color"},opacity:n(1,!1,.1,{min:0,max:1}),opacityOnHover:n(1,!1,.1,{min:0,max:1}),borderWidth:n(0,!1,1,{min:0,max:10}),borderColor:g("transparent"),delay:{type:v.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:v.Boolean,defaultValue:!1}};export{D as CircleCursor,j as propControls};
