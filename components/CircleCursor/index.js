import*as o from"react";import{createPortal as C}from"react-dom";import{motion as w}from"framer-motion";import{ControlType as d,useMotionValue as f}from"framer";var p="5d7729dc59f429d3e5d73f42815859170a30847b697397c88e11958e0c565fdd",b=`._cursorWrapper_yhq2t_1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  transition: transform var(--delay) ease-out;
  pointer-events: none;
}

._cursor_yhq2t_1 {
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: var(--color);
  pointer-events: none;
}

._wrapper_yhq2t_18 {
  width: fit-content;
  height: fit-content;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=b,document.head.appendChild(e)}})();var u={cursorWrapper:"_cursorWrapper_yhq2t_1",cursor:"_cursor_yhq2t_1",wrapper:"_wrapper_yhq2t_18"};import{getColorProps as y,getNumProps as l,getStrProps as E}from"../../utils/framerControlProps.js";import{jsx as v}from"react/jsx-runtime";var H=()=>{let e=f(0),r=f(0),[n,s]=o.useState(!1);return o.useEffect(()=>{let a=t=>{e.set(t.clientX),r.set(t.clientY),console.log(t.target?.nodeName);let c=t.target.nodeName;["A","BUTTON","IMG"].includes(c)?s(!0):n&&s(!1)};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),[e,r,n]},z=({children:e,delay:r=.3,size:n=40,hoverSize:s=80,color:a="deepskyblue",hideDefaultCursor:t=!1})=>{let[c,h,g]=H(),[m,x]=o.useState(),_=!!globalThis.window;return o.useEffect(()=>{let i=document.createElement("div");return i.setAttribute("data-type","fc-cursor"),document.body.appendChild(i),x(i),t&&(document.body.style.cursor="none"),()=>{document.body.removeChild(i)}},[_,e]),m?C(v(w.div,{layout:!0,className:u.cursorWrapper,style:{x:c,y:h,width:g?s+"px":n+"px","--delay":`${r}s`},children:v("div",{className:u.cursor,style:{"--color":a}})}),m):null},R={textOnHover:E("hovering"),size:l(50,!1,5,{min:5,max:100}),sizeOnHover:l(50,!1,5,{min:5,max:100}),children:{type:d.ComponentInstance},textColor:y("#fff"),bgColor:{...y("deepskyblue"),title:"Background Color"},opacity:l(1,!1,.1,{min:0,max:1}),opacityOnHover:l(1,!1,.1,{min:0,max:1}),delay:{type:d.Number,min:0,max:2,step:.1,defaultValue:.3},hideDefaultCursor:{type:d.Boolean,defaultValue:!1}};export{z as CircleCursor,R as propControls};
