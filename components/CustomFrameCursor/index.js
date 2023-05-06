import*as n from"react";import{createPortal as _}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as i,useMotionValue as m}from"framer";var f="320a53e3360120dec0f80d63dd31118f51cdf2575adbe442dd47a50b87a8ac9b",h=`._cursor_1apt8_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=h,document.head.appendChild(e)}})();var l={cursor:"_cursor_1apt8_1",example:"_example_1apt8_10",wrapper:"_wrapper_1apt8_17"};import{jsx as c}from"react/jsx-runtime";var x=()=>c("div",{className:l.example}),w=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let d=o.target.nodeName;["A","BUTTON"].includes(d)?t.set(e||2):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},N=({children:e,delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,d]=w({scaleTo:r}),[p,v]=n.useState(),y=!!globalThis.window;return n.useEffect(()=>{let u=document.createElement("div");return document.body.appendChild(u),v(u),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(u)}},[y]),p?_(c(b.div,{className:l.cursor,style:{x:a,y:o,scale:d,"--delay":`${s}s`},children:c("div",{className:l.wrapper,children:e||c(x,{})})}),p):null},P={children:{type:i.ComponentInstance},scale:{title:"Scale on Hover",type:i.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:i.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:i.Boolean,defaultValue:!1}};export{N as CustomFrameCursor,P as propControls};
