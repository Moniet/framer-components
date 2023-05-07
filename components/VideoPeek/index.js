var s="a161fde1dd7b583601952f8e7159e5b3bec590278be066e7fac0ab9f9513e1b6",b=`._wrapper_gwbt3_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._alignTop_gwbt3_7 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-1 * var(--margin)));
}

._alignBottom_gwbt3_14 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--width) + var(--margin)));
}

._video_gwbt3_21 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=b,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_gwbt3_1",alignTop:"_alignTop_gwbt3_7",alignBottom:"_alignBottom_gwbt3_14",video:"_video_gwbt3_21"};import{AnimatePresence as f,ControlType as m}from"framer";import{getNumProps as o,getSingleChild as u}from"../../utils/framerControlProps.js";import{ExampleChild as v}from"./ExampleChild.js";import{motion as w}from"framer-motion";import{useState as _}from"react";import{jsx as r,jsxs as y}from"react/jsx-runtime";var x="https://labs.moniet.dev/framer-components/components/VideoPeek/screen-rec.mov",V=({children:e,videoSrc:l=x,width:i=200,height:n=200,radius:d=10,margin:p=40,align:g})=>{let c=(()=>{switch(g){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),h=`${t.video} ${c}`,[C,a]=_(!1);return y("div",{className:t.wrapper,onMouseOver:()=>a(!0),onMouseLeave:()=>a(!1),children:[e||r(v,{}),r(f,{children:r(w.video,{style:{"--border-radius":`${d}px`,"--margin":`${p}px`,"--width":`${i}px`,"--height":`${n}px`},src:l,width:i,height:n,className:h})})]})},R={videoSrc:{title:"Video",type:m.File,allowedFileTypes:["mov","mp4"]},width:o(250,!0,10,{min:100,max:500}),height:o(250,!0,10,{min:100,max:500}),margin:o(40,!0,10,{min:10,max:100}),align:{type:m.Enum,options:["top","bottom","left","right"]},children:u()};export{V as VideoPeek,R as propsControls};
