import*as a from"react";var o="623b8346c62cecb421eb74ae45d40d2a645c92be8530fe5d3181c566a22bfbe8",l=`._container_wvwov_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=l,document.head.appendChild(t)}})();var e={container:"_container_wvwov_1",wrapper:"_wrapper_wvwov_12",xScroll:"_xScroll_wvwov_22"};import{ControlType as r}from"framer";import{getSingleChild as s,getNumProps as d}from"../../utils/framerControlProps.js";import{Example as m}from"./Example.js";import{jsx as n}from"react/jsx-runtime";var f=({children:t,align:i="center",gap:p=0})=>{let c=`${(t?a.Children.count(t):2)===1?e.wrapper:e.container} ${e.xScroll}`;return n("div",{className:c,style:{"--align":i,"--gap":p+"px"},children:t||n(m,{})})},u={children:{type:r.Array,control:s()},gap:d(0,!0,10),align:{type:r.Enum,options:["start","center","end"]}};export{f as HorizontalScroll,u as propsControls};
