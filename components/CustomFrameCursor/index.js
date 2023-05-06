import*as n from"react";import{createPortal as y}from"react-dom";import{motion as h}from"framer-motion";import{ControlType as l,useMotionValue as m}from"framer";var f="a791fb42d3cef18974ef2d225b5bb365b8460b6282f2f5c1c28260fee1f56dbb",v=`._cursor_1jpri_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  pointer-events: none;
  transition: transform var(--delay) ease-out;
}

._example_1jpri_10 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}

._wrapper_1jpri_17 {
  width: fit-content;
  height: fit-content;
  transform: translate(-50%, -50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=v,document.head.appendChild(e)}})();var i={cursor:"_cursor_1jpri_1",example:"_example_1jpri_10",wrapper:"_wrapper_1jpri_17"};import{jsx as c}from"react/jsx-runtime";var _=()=>c("div",{className:i.example}),x=({scaleTo:e})=>{let r=m(0),s=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{r.set(o.clientX),s.set(o.clientY);let u=o.target.nodeName;["A","BUTTON"].includes(u)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[r,s,t]},T=({children:e,delay:r=.3,scale:s=2,hideDefaultCursor:t=!1})=>{let[a,o,u]=x({scaleTo:s}),[p,b]=n.useState();return n.useEffect(()=>{let d=document.createElement("div");return document.body.appendChild(d),b(d),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[]),p?y(c(h.div,{className:i.cursor,style:{x:a,y:o,"--delay":`${r}s`,"--scale":`${u}s`},children:c("div",{className:i.wrapper,children:e})}),p):null},M={children:{type:l.ComponentInstance,defaultValue:c(_,{})},scale:{title:"Scale on Hover",type:l.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:l.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:l.Boolean,defaultValue:!1}};export{T as CustomFrameCursor,M as propControls};
