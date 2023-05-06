import*as n from"react";import{createPortal as _}from"react-dom";import{motion as x}from"framer-motion";import{ControlType as c,useMotionValue as m}from"framer";var f="0f338de8e446ac2149c57a9a22961e45a9e3f0ba9d90e5dcd9f531df46a97691",h=`._cursor_1apt8_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
}

._example_1apt8_10 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}

._wrapper_1apt8_17 {
  width: fit-content;
  height: fit-content;
  transform: translate(-50%, -50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=h,document.head.appendChild(e)}})();var l={cursor:"_cursor_1apt8_1",example:"_example_1apt8_10",wrapper:"_wrapper_1apt8_17"};import{jsx as d}from"react/jsx-runtime";var b=()=>d("div",{className:l.example}),w=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let u=o.target.nodeName;["A","BUTTON"].includes(u)?t.set(e||2):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},N=({children:e,delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,u]=w({scaleTo:r}),[p,v]=n.useState(),y=!!globalThis.window;return n.useEffect(()=>{let i=document.createElement("div");return i.setAttribute("data-type","fc-cursor"),document.body.appendChild(i),v(i),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(i)}},[y,e]),p?_(d(x.div,{className:l.cursor,style:{x:a,y:o,scale:u,"--delay":`${s}s`},children:d("div",{className:l.wrapper,children:e||d(b,{})})}),p):null},P={children:{type:c.ComponentInstance},scale:{title:"Scale on Hover",type:c.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:c.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:c.Boolean,defaultValue:!1}};export{N as CustomFrameCursor,P as propControls};
