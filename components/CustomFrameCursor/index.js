import*as n from"react";import{createPortal as b}from"react-dom";import{motion as h}from"framer-motion";import{ControlType as d,useMotionValue as m}from"framer";var f="35d0015f7203df5ed3be30915bdd0bd6a04d7979b41c22f1b31f73d1d5db6a23",y=`._cursor_1jpri_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=y,document.head.appendChild(e)}})();var i={cursor:"_cursor_1jpri_1",example:"_example_1jpri_10",wrapper:"_wrapper_1jpri_17"};import{jsx as l}from"react/jsx-runtime";var _=()=>l("div",{className:i.example}),x=({scaleTo:e})=>{let r=m(0),s=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{r.set(o.clientX),s.set(o.clientY);let c=o.target.nodeName;["A","BUTTON"].includes(c)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[r,s,t]},T=({children:e,delay:r=.3,scale:s=2,hideDefaultCursor:t=!1})=>{let[a,o,c]=x({scaleTo:s}),[p,v]=n.useState();return n.useEffect(()=>{let u=document.createElement("div");return document.body.appendChild(u),v(u),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(u)}},[]),p?b(l(h.div,{className:i.cursor,style:{x:a,y:o,"--delay":`${r}s`,"--scale":`${c}s`},children:l("div",{className:i.wrapper,children:e||l(_,{})})}),p):null},M={children:{type:d.ComponentInstance},scale:{title:"Scale on Hover",type:d.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:d.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:d.Boolean,defaultValue:!1}};export{T as CustomFrameCursor,M as propControls};
