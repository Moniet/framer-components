import*as n from"react";import{createPortal as _}from"react-dom";import{motion as b}from"framer-motion";import{ControlType as l,useMotionValue as m}from"framer";var f="5cc40e22648416e64da52e12ba74f5d02ba48ef98544e0fabd8d7fffa0c04aca",h=`._cursor_11vzy_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  transform: scale(--scale);
  pointer-events: none;
}

._example_11vzy_11 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}

._wrapper_11vzy_18 {
  width: fit-content;
  height: fit-content;
  transform: translate(-50%, -50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=h,document.head.appendChild(e)}})();var c={cursor:"_cursor_11vzy_1",example:"_example_11vzy_11",wrapper:"_wrapper_11vzy_18"};import{jsx as i}from"react/jsx-runtime";var x=()=>i("div",{className:c.example}),w=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let d=o.target.nodeName;["A","BUTTON"].includes(d)?t.set(e||2):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},z=({children:e,delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,d]=w({scaleTo:r}),[p,v]=n.useState(),y=!!globalThis.window;return n.useEffect(()=>{let u=document.createElement("div");return document.body.appendChild(u),v(u),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(u)}},[y]),p?_(i(b.div,{className:c.cursor,style:{x:a,y:o,scale:d,"--delay":`${s}s`},children:i("div",{className:c.wrapper,children:e||i(x,{})})}),p):null},M={children:{type:l.ComponentInstance},scale:{title:"Scale on Hover",type:l.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:l.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:l.Boolean,defaultValue:!1}};export{z as CustomFrameCursor,M as propControls};
