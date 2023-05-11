import{ControlType as f}from"framer";import{useState as l}from"react";var i="d5bdf1bdcb1c88ae30083e28aba14ad87b9e068e6e766b981bbb1cb3262b87a4",u=`._container_1ft2e_1 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--border-radius);
  position: relative;
}

._img_1ft2e_9 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

._capture_1ft2e_15 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=u,document.head.appendChild(e)}})();var t={container:"_container_1ft2e_1",img:"_img_1ft2e_9",capture:"_capture_1ft2e_15"};import{Effect1 as g}from"./Effect1.js";import{defaultImage as s}from"./contstants.js";import{getNumProps as a}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as _}from"react/jsx-runtime";var b={1:g},P=({image:e,effect:n=1,duration:m=1,radius:d=10})=>{let p=b[n||1],[c,r]=l(!1);return _("div",{className:t.container,style:{"--dur":m+"s","--border-radius":d+"px"},children:[o("img",{className:t.img,src:e?.src||s,alt:e?.alt||""}),o(p,{image:e,isHovering:c}),o("div",{onMouseOver:()=>r(!0),onMouseLeave:()=>r(!1),className:t.capture})]})},H={image:{type:f.ResponsiveImage,defaultValue:s},duration:a(1,!1,.1,{min:.1,max:2}),radius:a(10,!0,1,{min:0,max:20})};export{P as ImageRepeatOnHover,H as propsControls};
