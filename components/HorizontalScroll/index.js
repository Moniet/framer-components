import*as i from"react";var o="730b14fc0e4944398ee28b414437998856991028e401996ed8765a7c1eb99b68",c=`._container_wvwov_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=c,document.head.appendChild(t)}})();var e={container:"_container_wvwov_1",wrapper:"_wrapper_wvwov_12",xScroll:"_xScroll_wvwov_22"};import{ControlType as r}from"framer";import{getSingleChild as s,getNumProps as m}from"../../utils/framerControlProps.js";import{Example as w}from"./Example.js";import{jsx as n}from"react/jsx-runtime";var f=({children:t,align:a="center",gap:p=0})=>{let l=`${(t?i.Children.count(t):2)===1?e.wrapper:e.container} ${e.xScroll}`;return n("div",{className:l,style:{"--align":a,"--gap":p+"px"},children:t||n(w,{})})},u={children:{type:r.Array,control:s()},gap:m(0,!0,10),align:{type:r.Enum,options:["start","center","end"]}};export{f as HorizontalScroll,u as propsControls};
