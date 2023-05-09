import{ControlType as p}from"framer";import{useState as d}from"react";var i="f51314d6a7f36005e81f811ec4fdc37f91df1f1f631616e4346c1c8ea15a3467",c=`._container_1ft2e_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=c,document.head.appendChild(e)}})();var t={container:"_container_1ft2e_1",img:"_img_1ft2e_9",capture:"_capture_1ft2e_15"};import{Effect1 as u}from"./Effect1.js";import{defaultImage as a}from"./contstants.js";import{getNumProps as l}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as _}from"react/jsx-runtime";var g={1:u},C=({image:e,effect:s=1,duration:n=1})=>{let m=g[s||1],[f,r]=d(!1);return _("div",{className:t.container,style:{"--dur":n+"s"},children:[o("img",{className:t.img,src:e?.src||a,alt:e?.alt||""}),o(m,{image:e,isHovering:f}),o("div",{onMouseOver:()=>r(!0),onMouseLeave:()=>r(!1),className:t.capture})]})},P={image:{type:p.ResponsiveImage,defaultValue:a},duration:l(1,!1,.1,{min:.1,max:2})};export{C as ImageRepeatOnHover,P as propsControls};
