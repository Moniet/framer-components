import{ControlType as f}from"framer";import{useState as p}from"react";var i="cc0191d744adda8e420213f8d419cc40f1a72b481a7533eb9e6cc59fff29c964",c=`._container_1ft2e_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=c,document.head.appendChild(e)}})();var t={container:"_container_1ft2e_1",img:"_img_1ft2e_9",capture:"_capture_1ft2e_15"};import{Effect1 as d}from"./Effect1.js";import{defaultImage as a}from"./contstants.js";import{getNumProps as l}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as g}from"react/jsx-runtime";var u={1:d},y=({image:e,effect:s=1})=>{let n=u[s||1],[m,r]=p(!1);return g("div",{className:t.container,children:[o("img",{className:t.img,src:e?.src||a,alt:e?.alt||""}),o(n,{image:e,isHovering:m}),o("div",{onMouseOver:()=>r(!0),onMouseLeave:()=>r(!1),className:t.capture})]})},C={image:{type:f.ResponsiveImage,defaultValue:a},duration:l(1,!1,.1,{min:.1,max:2})};export{y as ImageRepeatOnHover,C as propsControls};
