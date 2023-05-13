import*as i from"react";var r="3f0b37932740489849cc17fe4a6d257b8b340a644029914336dc4d1122091d2b",c=`._container_wvwov_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=c,document.head.appendChild(t)}})();var o={container:"_container_wvwov_1",wrapper:"_wrapper_wvwov_12",xScroll:"_xScroll_wvwov_22"};import{ControlType as e}from"framer";import{getSingleChild as d,getNumProps as s}from"../../utils/framerControlProps.js";import{Example as m}from"./Example.js";import{jsx as n}from"react/jsx-runtime";var f=({children:t,align:a="center",gap:p=0})=>{let l=`${(t?i.Children.count(t):2)===1?o.wrapper:o.container} ${o.xScroll}`;return n("div",{className:l,style:{"--align":a,"--gap":p+"px"},children:t||n(m,{})})},u={children:{type:e.Array,control:d()},gap:s(0,!0,10),align:{type:e.Enum,options:["start","center","end"]}};export{f as HorizontalScroll,u as propsControls};
