import*as o from"react";import{createPortal as E}from"react-dom";import{motion as v}from"framer-motion";import{ControlType as b,useMotionValue as y}from"framer";var f="52850e7a9f9e1064d756fb5bf6cdddd9afac43fcd016642713bfd77a04de7360",k=`._cursorWrapper_1ku9r_1 {
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
}

._cursorPosition_1ku9r_14 {
  width: max-content;
  height: max-content;
  transform: translate(-50%, -50%);
}

._cursor_1ku9r_1 {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  pointer-events: none;
  border: solid var(--border-width) var(--border-color);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=k,document.head.appendChild(e)}})();var u={cursorWrapper:"_cursorWrapper_1ku9r_1",cursorPosition:"_cursorPosition_1ku9r_14",cursor:"_cursor_1ku9r_1"};import{getColorProps as h,getNumProps as n}from"../../utils/framerControlProps.js";import{Fragment as H,jsx as l}from"react/jsx-runtime";var M=()=>{let e=y(0),s=y(0),[r,i]=o.useState("");return o.useEffect(()=>{let a=t=>{e.set(t.clientX),s.set(t.clientY);let c=t.target.nodeName;["A","BUTTON","IMG"].includes(c)?i(c):r&&i("")};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[r]),[e,s,r]},B=({delay:e=.3,size:s=20,opacity:r=1,opacityOnHover:i=.5,borderColor:a="transparent",borderWidth:t=0,hoverScale:c=3,bgColor:g="deepskyblue",hideDefaultCursor:x=!1})=>{let[_,C,m]=M(),[p,w]=o.useState(),P=!!globalThis.window;return o.useEffect(()=>{let d=document.createElement("div");return d.setAttribute("data-type","fc-cursor"),document.body.appendChild(d),w(d),x&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[P]),p?E(l(H,{children:l(v.div,{className:u.cursorWrapper,style:{x:_,y:C,scale:m?c:1,"--delay":`${e}s`,opacity:m?i:r},children:l("div",{className:u.cursorPosition,children:l(v.div,{className:u.cursor,style:{x:0,y:0,"--color":g,"--size":s+"px","--border-color":a,"--border-width":t+"px"}})})})}),p):null},D={size:n(30,!1,5,{min:10,max:100}),hoverScale:n(2,!1,.1,{min:1,max:5}),bgColor:{...h("deepskyblue"),title:"Background Color"},opacity:n(1,!1,.1,{min:0,max:1}),opacityOnHover:n(.5,!1,.1,{min:0,max:1}),borderWidth:n(0,!1,1,{min:0,max:10}),borderColor:h("transparent"),delay:{type:b.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:b.Boolean,defaultValue:!1}};export{B as CircleCursor,D as propControls};
