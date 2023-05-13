import{ControlType as u}from"framer";import{useState as l}from"react";var i="e34723e02529bb21fb4e4f306ae6b10456068ecccfee70a591d1483ce90976ac",f=`._container_1ft2e_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=f,document.head.appendChild(e)}})();var t={container:"_container_1ft2e_1",img:"_img_1ft2e_9",capture:"_capture_1ft2e_15"};import{Effect1 as g}from"./Effect1.js";import{defaultImage as a}from"./contstants.js";import{getNumProps as s}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as v}from"react/jsx-runtime";var _={1:g},P=({image:e,effect:n=1,duration:m=1,radius:c=10})=>{let p=_[n||1],[d,r]=l(!1);return v("div",{className:t.container,style:{"--dur":m+"s","--border-radius":c+"px"},children:[o("img",{className:t.img,src:e?.src||a,alt:e?.alt||""}),o(p,{image:e,isHovering:d}),o("div",{onMouseOver:()=>r(!0),onMouseLeave:()=>r(!1),className:t.capture})]})},H={image:{type:u.ResponsiveImage,defaultValue:a},duration:s(1,!1,.1,{min:.1,max:2}),radius:s(10,!0,1,{min:0,max:20})};export{P as ImageRepeatOnHover,H as propsControls};
