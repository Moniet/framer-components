import*as a from"react";var r="0f307a97557a0058fdcf584109127fca44a7ab5b213f8e149cda6521ad290ad1",c=`._container_wvwov_1 {
  display: flex !important;
  flex-wrap: nowrap !important;
  flex-direction: row !important;
  align-items: var(--align, center) !important;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
  min-height: 100px;
}

._wrapper_wvwov_12 > div {
  display: flex;
  flex-wrap: nowrap !important;
  flex-direction: row !important;
  align-items: var(--align, center) !important;
  gap: var(--gap, 0px) !important;
  height: 100%;
  width: 100%;
}

._xScroll_wvwov_22 {
  overflow-x: auto;
  max-width: 100%;
}

._container_wvwov_1 > * {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=c,document.head.appendChild(t)}})();var o={container:"_container_wvwov_1",wrapper:"_wrapper_wvwov_12",xScroll:"_xScroll_wvwov_22"};import{ControlType as e}from"framer";import{getSingleChild as d,getNumProps as s}from"../../utils/framerControlProps.js";import{Example as m}from"./Example.js";import{jsx as n}from"react/jsx-runtime";var _=({children:t,align:i="center",gap:p=0})=>{let l=`${(t?a.Children.count(t):2)===1?o.wrapper:o.container} ${o.xScroll}`;return n("div",{className:l,style:{"--align":i,"--gap":p+"px"},children:t||n(m,{})})},u={children:{type:e.Array,control:d()},gap:s(0,!0,10),align:{type:e.Enum,options:["start","center","end"]}};export{_ as HorizontalScroll,u as propsControls};
