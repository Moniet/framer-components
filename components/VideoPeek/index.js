var s="68a04f62e50c7eb11586c59f1f5c64422c7f23011cb1b13c8a1968e694d23733",h=`._wrapper_1k06u_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._alignTop_1k06u_7 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-1 * var(--margin)));
}

._alignBottom_1k06u_14 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--width) + var(--margin)));
}

._video_1k06u_21 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
  object-fit: contain;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=h,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_1k06u_1",alignTop:"_alignTop_1k06u_7",alignBottom:"_alignBottom_1k06u_14",video:"_video_1k06u_21"};import{AnimatePresence as f,ControlType as m}from"framer";import{getNumProps as o,getSingleChild as v}from"../../utils/framerControlProps.js";import{ExampleChild as _}from"./ExampleChild.js";import{motion as b}from"framer-motion";import{useState as w}from"react";import{jsx as r,jsxs as y}from"react/jsx-runtime";var x="https://labs.moniet.dev/framer-components/public/screen-rec.mov",S=({children:e,videoSrc:l=x,width:i=200,height:n=200,radius:p=10,margin:d=40,align:c})=>{let u=(()=>{switch(c){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),g=`${t.video} ${u}`,[k,a]=w(!1);return y("div",{className:t.wrapper,onMouseOver:()=>a(!0),onMouseLeave:()=>a(!1),children:[e||r(_,{}),r(f,{children:r(b.video,{style:{"--border-radius":`${p}px`,"--margin":`${d}px`,"--width":`${i}px`,"--height":`${n}px`},src:l,width:i,height:n,className:g})})]})},R={videoSrc:{title:"Video",type:m.File,allowedFileTypes:["mov","mp4"]},width:o(250,!0,10,{min:100,max:500}),height:o(250,!0,10,{min:100,max:500}),margin:o(40,!0,10,{min:10,max:100}),align:{type:m.Enum,options:["top","bottom","left","right"]},children:v()};export{S as VideoPeek,R as propsControls};
