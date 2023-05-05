import*as s from"react";import{createPortal as y}from"react-dom";import{motion as h}from"framer-motion";import{ControlType as m,useMotionValue as d}from"framer";import{getSingleChild as b}from"../../utils/framerControlProps.js";var f="390e7a672240389a2489e5a9cdacc89ce8c803c90eea32df28c1421595c21a57",x=`._cursor_vx9wl_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=x,document.head.appendChild(e)}})();var u={cursor:"_cursor_vx9wl_1",example:"_example_vx9wl_9"};import{jsx as c}from"react/jsx-runtime";var C=()=>c("div",{className:u.example}),_=({scaleTo:e})=>{let n=d(0),r=d(0),t=d(1);return s.useEffect(()=>{let a=o=>{n.set(o.clientX),r.set(o.clientY);let l=o.target.nodeName;["A","BUTTON"].includes(l)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[n,r,t]},R=({cursor:e=c(C,{}),delay:n=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,l]=_({scaleTo:r}),[p,v]=s.useState();return s.useEffect(()=>{let i=document.createElement("div");return document.body.appendChild(i),v(i),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(i)}},[]),p?y(c("div",{children:c(h.div,{className:u.cursor,style:{x:a,y:o,scale:l,transition:`transform ${n}s ease-out`},children:e})}),p):null},P={cursor:b(),scale:{title:"Scale on Hover",type:m.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:m.Number,min:0,max:2,step:.3},hideDefaultCursor:{type:m.Boolean,defaultValue:!1}};export{R as CustomFrameCursor,P as propControls};
