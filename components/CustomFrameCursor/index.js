import*as r from"react";import{createPortal as h}from"react-dom";import{motion as _}from"framer-motion";import{ControlType as u,useMotionValue as m}from"framer";import{getSingleChild as b}from"../../utils/framerControlProps.js";var f="5076d5733d31c5ecd4254d87a9c0bb16a7026e0c2acfa75df018dc4fdbb85672",y=`._cursor_1jpri_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=y,document.head.appendChild(e)}})();var i={cursor:"_cursor_1jpri_1",example:"_example_1jpri_10",wrapper:"_wrapper_1jpri_17"};import{jsx as c}from"react/jsx-runtime";var x=()=>c("div",{className:i.example}),w=({scaleTo:e})=>{let s=m(0),n=m(0),t=m(1);return r.useEffect(()=>{let a=o=>{s.set(o.clientX),n.set(o.clientY);let l=o.target.nodeName;["A","BUTTON"].includes(l)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,n,t]},j=({children:e,delay:s=.3,scale:n=2,hideDefaultCursor:t=!1})=>{let[a,o,l]=w({scaleTo:n}),[p,v]=r.useState();return r.useEffect(()=>{let d=document.createElement("div");return document.body.appendChild(d),v(d),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(d)}},[]),p?h(c(_.div,{className:i.cursor,style:{x:a,y:o,"--delay":`${s}s`,"--scale":`${l}s`},children:c("div",{className:i.wrapper,children:e||c(x,{})})}),p):null},P={children:b(),scale:{title:"Scale on Hover",type:u.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:u.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:u.Boolean,defaultValue:!1}};export{j as CustomFrameCursor,P as propControls};
