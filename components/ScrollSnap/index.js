import*as i from"react";var o="b8c65be7f25f0a15221641c8e44631b892139257d903bd6a3f2b6b4037db0b94",d=`._container_hs4px_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_hs4px_12 > div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._xScroll_hs4px_23 {
  overflow-x: auto;
  max-width: 100%;
}

._yScroll_hs4px_28 {
  overflow-y: auto;
  max-height: 100%;
}

._wrapper_hs4px_12 > div > * {
  scroll-snap-align: var(--snap);
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}

._container_hs4px_1 > * {
  scroll-snap-align: var(--snap);
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=d,document.head.appendChild(t)}})();var r={container:"_container_hs4px_1",wrapper:"_wrapper_hs4px_12",xScroll:"_xScroll_hs4px_23",yScroll:"_yScroll_hs4px_28"};import{ControlType as n}from"framer";import{getSingleChild as h,getNumProps as m}from"../../utils/framerControlProps.js";import{Example as x}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var v=({children:t,snap:p="start",align:l="center",gap:s=0,direction:e="column"})=>{let c=`${(t?i.Children.count(t):2)===1?r.wrapper:r.container} ${e==="column"?r.yScroll:r.xScroll}`;return a("div",{className:c,style:{"--snap":p,"--align":l,"--gap":s+"px","--direction":e,"--axis":e==="row"?"x":"y"},children:t||a(x,{})})},b={children:{type:n.Array,control:h()},direction:{type:n.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:m(0,!0,10),align:{type:n.Enum,options:["start","center","end"]}};export{v as ScrollSnap,b as propsControls};
