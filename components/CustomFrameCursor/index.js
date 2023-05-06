import*as n from"react";import{createPortal as y}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as u,useMotionValue as m}from"framer";import{getSingleChild as h}from"../../utils/framerControlProps.js";var f="b96dda91d9a11b601110897c137a6688e22a6717da66142477a570c3b6d9fdcd",x=`._cursor_vx9wl_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  pointer-events: none;
}

._example_vx9wl_9 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=x,document.head.appendChild(e)}})();var d={cursor:"_cursor_vx9wl_1",example:"_example_vx9wl_9"};import{jsx as l}from"react/jsx-runtime";var C=()=>l("div",{className:d.example}),_=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let i=o.target.nodeName;["A","BUTTON"].includes(i)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},R=({children:e=l(C,{}),delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,i]=_({scaleTo:r}),[p,v]=n.useState();return n.useEffect(()=>{let c=document.createElement("div");return document.body.appendChild(c),v(c),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(c)}},[]),p?y(l("div",{children:l(b.div,{className:d.cursor,style:{x:a,y:o,scale:i,transition:`transform ${s}s ease-out`},children:e})}),p):null},P={children:h(),scale:{title:"Scale on Hover",type:u.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:u.Number,min:0,max:2,step:.3},hideDefaultCursor:{type:u.Boolean,defaultValue:!1}};export{R as CustomFrameCursor,P as propControls};
