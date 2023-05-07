import*as n from"react";import{createPortal as _}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as l,useMotionValue as m}from"framer";var f="255dc85003e08dca38a94502324eb81cc38e3cb92d03e4071573ed765c111fcd",h=`._cursor_1apt8_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=h,document.head.appendChild(e)}})();var i={cursor:"_cursor_1apt8_1",example:"_example_1apt8_10",wrapper:"_wrapper_1apt8_17"};import{jsx as d}from"react/jsx-runtime";var x=()=>d("div",{className:i.example}),w=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let u=o.target.nodeName;["A","BUTTON"].includes(u)?t.set(e||2):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},N=({children:e,delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,u]=w({scaleTo:r}),[p,v]=n.useState(),y=!!globalThis.window;return n.useEffect(()=>{let c=document.createElement("div");return c.setAttribute("data-type","fc-cursor"),document.body.appendChild(c),v(c),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(c)}},[y,e]),p?_(d(b.div,{className:i.cursor,style:{x:a,y:o,scale:u,"--delay":`${s}s`},children:d("div",{className:i.wrapper,children:e||d(x,{})})}),p):null},P={children:{type:l.ComponentInstance},scale:{title:"Scale on Hover",type:l.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:l.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:l.Boolean,defaultValue:!1}};export{N as CustomFrameCursor,P as propControls};
