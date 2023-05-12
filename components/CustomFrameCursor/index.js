import*as n from"react";import{createPortal as b}from"react-dom";import{motion as _}from"framer-motion";import{ControlType as c,useMotionValue as m}from"framer";var f="9d99e14dd9a017a770d5a33babb0db2675f655d097d7a854b1fe50fafdc4fea8",y=`._cursor_14jhp_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
}

._example_14jhp_10 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: deepskyblue;
}

._wrapper_14jhp_17 {
  width: fit-content;
  height: fit-content;
  transform: translate(-50%, -50%);
}

`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=y,document.head.appendChild(e)}})();var l={cursor:"_cursor_14jhp_1",example:"_example_14jhp_10",wrapper:"_wrapper_14jhp_17"};import{jsx as d}from"react/jsx-runtime";var x=()=>d("div",{className:l.example}),w=({scaleTo:e})=>{let s=m(0),r=m(0),t=m(1);return n.useEffect(()=>{let a=o=>{s.set(o.clientX),r.set(o.clientY);let u=o.target.nodeName;["A","BUTTON"].includes(u)?t.set(e||2):t.get()>1&&t.set(1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[s,r,t]},N=({children:e,delay:s=.3,scale:r=2,hideDefaultCursor:t=!1})=>{let[a,o,u]=w({scaleTo:r}),[p,h]=n.useState(),v=!!globalThis.window;return n.useEffect(()=>{let i=document.createElement("div");return i.setAttribute("data-type","fc-cursor"),document.body.appendChild(i),h(i),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(i)}},[v,e]),p?b(d(_.div,{className:l.cursor,style:{x:a,y:o,scale:u,"--delay":`${s}s`},children:d("div",{className:l.wrapper,children:e||d(x,{})})}),p):null},j={children:{type:c.ComponentInstance},scale:{title:"Scale on Hover",type:c.Number,defaultValue:2,step:.1,min:1,max:5,description:"Scales the cursor on button / link hover"},delay:{type:c.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:c.Boolean,defaultValue:!1}};export{N as CustomFrameCursor,j as propControls};
