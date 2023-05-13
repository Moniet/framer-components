import*as a from"react";var r="6468eb03c2a637e5138f2854246ec4b97c084c2751f0a87b05d203a4692b9802",l=`._container_10347_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: var(--align, center);
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
  min-height: 100px;
}

._wrapper_10347_12 > div {
  display: flex;
  flex-wrap: nowrap !important;
  flex-direction: row !important;
  align-items: var(--align, center) !important;
  gap: var(--gap, 0px) !important;
  height: 100%;
  width: 100%;
}

._xScroll_10347_22 {
  overflow-x: auto;
  max-width: 100%;
}

._container_10347_1 > * {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=l,document.head.appendChild(t)}})();var e={container:"_container_10347_1",wrapper:"_wrapper_10347_12",xScroll:"_xScroll_10347_22"};import{ControlType as n}from"framer";import{getSingleChild as s,getNumProps as d}from"../../utils/framerControlProps.js";import{Example as m}from"./Example.js";import{jsx as o}from"react/jsx-runtime";var u=({children:t,align:i="center",gap:p=0})=>{let c=`${(t?a.Children.count(t):2)===1?e.wrapper:e.container} ${e.xScroll}`;return o("div",{className:c,style:{"--align":i,"--gap":p+"px"},children:t||o(m,{})})},y={children:{type:n.Array,control:s()},gap:d(0,!0,10),align:{type:n.Enum,options:["start","center","end"]}};export{u as HorizontalScroll,y as propsControls};
