import{ControlType as c}from"framer";import{useState as p}from"react";var i="1ec910e131e0c5fa40c51c767164490c20c332437a24f66e09c5dff625b5a4b3",n=`._container_1ft2e_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=n,document.head.appendChild(e)}})();var t={container:"_container_1ft2e_1",img:"_img_1ft2e_9",capture:"_capture_1ft2e_15"};import{Effect1 as f}from"./Effect1.js";import{defaultImage as m}from"./contstants.js";import{jsx as o,jsxs as g}from"react/jsx-runtime";var d={1:f},I=({image:e,effect:l=1})=>{let s=d[1],[a,r]=p(!1);return g("div",{className:t.container,children:[o("img",{className:t.img,src:e?.src||m,alt:e?.alt||""}),o(s,{image:e,isHovering:a}),o("div",{onMouseOver:()=>r(!0),onMouseLeave:()=>r(!1),className:t.capture})]})},w={image:{type:c.ResponsiveImage}};export{I as ImageRepeatOnHover,w as propsControls};
