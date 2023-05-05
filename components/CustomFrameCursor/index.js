import*as n from"react";import{createPortal as y}from"react-dom";import{motion as x}from"framer-motion";import{ControlType as d,useMotionValue as m}from"framer";import{getSingleChild as h}from"../../utils/framerControlProps.js";var f="865204962ce31d986b437543e5e088b7ed48bc4168bfef582e0cdb3347d9bad2",b=`._cursor_v3e3n_1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000;
  pointer-events: none;
}

._example_v3e3n_9 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=b,document.head.appendChild(e)}})();var u={cursor:"_cursor_v3e3n_1",example:"_example_v3e3n_9"};import{jsx as c}from"react/jsx-runtime";var C=()=>c("div",{className:u.example}),_=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let i=o.target.nodeName;["A","BUTTON"].includes(i)?t.set(e):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},R=({cursor:e=c(C,{}),delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,i]=_({scaleTo:r}),[p,v]=n.useState();return n.useEffect(()=>{let l=document.createElement("div");return document.body.appendChild(l),v(l),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(l)}},[]),p?y(c("div",{children:c(x.div,{className:u.cursor,style:{x:a,y:o,scale:i,transition:`transform ${s}s ease-out`},children:e})}),p):null},P={cursor:h(),scale:{title:"Scale on Hover",type:d.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:d.Number,min:0,max:2,step:.3},hideDefaultCursor:{type:d.Boolean,defaultValue:!1}};export{R as CustomFrameCursor,P as propControls};
