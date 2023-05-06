import*as r from"react";import{createPortal as y}from"react-dom";import{motion as _}from"framer-motion";import{ControlType as u,useMotionValue as m}from"framer";import{getSingleChild as x}from"../../utils/framerControlProps.js";var f="bdce53e04f700cc53abe5d9a49100edce15d415c37df2d9d0fcaee6e505b28ad",h=`._cursor_1jpri_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=h,document.head.appendChild(e)}})();var i={cursor:"_cursor_1jpri_1",example:"_example_1jpri_10",wrapper:"_wrapper_1jpri_17"};import{jsx as c}from"react/jsx-runtime";var b=()=>c("div",{className:i.example}),w=({scaleTo:e})=>{let n=m(0),s=m(0),t=m(1);return r.useEffect(()=>{let a=o=>{n.set(o.clientX),s.set(o.clientY);let l=o.target.nodeName;["A","BUTTON"].includes(l)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[n,s,t]},j=({children:e=c(b,{}),delay:n=.3,scale:s=2,hideDefaultCursor:t=!1})=>{let[a,o,l]=w({scaleTo:s}),[p,v]=r.useState();return r.useEffect(()=>{let d=document.createElement("div");return document.body.appendChild(d),v(d),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[]),p?y(c(_.div,{className:i.cursor,style:{x:a,y:o,"--delay":`${n}s`,"--scale":`${l}s`},children:c("div",{className:i.wrapper,children:e})}),p):null},P={children:x(),scale:{title:"Scale on Hover",type:u.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:u.Number,min:0,max:2,step:.3},hideDefaultCursor:{type:u.Boolean,defaultValue:!1}};export{j as CustomFrameCursor,P as propControls};
