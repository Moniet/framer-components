import*as o from"react";import{createPortal as M}from"react-dom";import{motion as v}from"framer-motion";import{ControlType as b,useMotionValue as y}from"framer";var f="bb31f726a28e547e37a2f238d6a038f75512f34d0cd58531c89ff7843dacc6b9",E=`._cursorWrapper_1gd19_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
  width: fit-content;
  height: fit-content;
  min-width: 10px;
  min-height: 10px;
  transform-origin: center;
}

@media (max-width: 991px) {
  ._cursorWrapper_1gd19_1 {
    display: none;
  }
}

._cursorPosition_1gd19_21 {
  width: max-content;
  height: max-content;
  transform: translate(-50%, -50%);
}

._cursor_1gd19_1 {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  pointer-events: none;
  border: solid var(--border-width) var(--border-color);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=E,document.head.appendChild(e)}})();var l={cursorWrapper:"_cursorWrapper_1gd19_1",cursorPosition:"_cursorPosition_1gd19_21",cursor:"_cursor_1gd19_1"};import{getColorProps as g,getNumProps as n}from"../../utils/framerControlProps.js";import{Fragment as N,jsx as u}from"react/jsx-runtime";var H=()=>{let e=y(0),s=y(0),[r,i]=o.useState("");return o.useEffect(()=>{let a=t=>{e.set(t.clientX),s.set(t.clientY);let d=t.target.nodeName;["A","BUTTON","IMG"].includes(d)?i(d):r&&i("")};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[r]),[e,s,r]},B=({delay:e=.3,size:s=20,opacity:r=1,opacityOnHover:i=.5,borderColor:a="transparent",borderWidth:t=0,hoverScale:d=3,bgColor:h="deepskyblue",hideDefaultCursor:x=!1})=>{let[_,C,m]=H(),[p,w]=o.useState(),P=!!globalThis.window;return o.useEffect(()=>{let c=document.createElement("div");return c.setAttribute("data-type","fc-cursor"),document.body.appendChild(c),w(c),x&&(document.body.style.cursor="none"),()=>{document.body.removeChild(c)}},[P]),p?M(u(N,{children:u(v.div,{className:l.cursorWrapper,style:{x:_,y:C,scale:m?d:1,"--delay":`${e}s`,opacity:m?i:r},children:u("div",{className:l.cursorPosition,children:u(v.div,{className:l.cursor,style:{x:0,y:0,"--color":h,"--size":s+"px","--border-color":a,"--border-width":t+"px"}})})})}),p):null},D={size:n(30,!1,5,{min:10,max:100}),hoverScale:n(2,!1,.1,{min:1,max:5}),bgColor:{...g("deepskyblue"),title:"Background Color"},opacity:n(1,!1,.1,{min:0,max:1}),opacityOnHover:n(.5,!1,.1,{min:0,max:1}),borderWidth:n(0,!1,1,{min:0,max:10}),borderColor:g("transparent"),delay:{type:b.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:b.Boolean,defaultValue:!1}};export{B as CircleCursor,D as propControls};
