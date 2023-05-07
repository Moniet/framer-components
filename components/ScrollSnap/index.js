import*as i from"react";var n="c78d7a7906b741095771f1ea8020633bc48d5921a085f1d574d4d60332821b61",d=`._container_vu66z_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_vu66z_12 > div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._xScroll_vu66z_23 {
  overflow-x: auto;
  max-width: 100%;
}

._yScroll_vu66z_28 {
  overflow-y: auto;
  max-height: 100%;
}

._container_vu66z_1 > * {
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=d,document.head.appendChild(t)}})();var r={container:"_container_vu66z_1",wrapper:"_wrapper_vu66z_12",xScroll:"_xScroll_vu66z_23",yScroll:"_yScroll_vu66z_28"};import{ControlType as o}from"framer";import{getSingleChild as m,getNumProps as u}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var f=({children:t,snap:l="start",align:c="center",gap:p=0,direction:e="column"})=>{let s=`${(t?i.Children.count(t):2)===1?r.wrapper:r.container} ${e==="column"?r.yScroll:r.xScroll}`;return a("div",{className:s,style:{"--snap":l,"--align":c,"--gap":p+"px","--direction":e,"--axis":e==="row"?"x":"y"},children:t||a(g,{})})},S={children:{type:o.Array,control:m()},direction:{type:o.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:u(0,!0,10),align:{type:o.Enum,options:["start","center","end"]}};export{f as ScrollSnap,S as propsControls};
