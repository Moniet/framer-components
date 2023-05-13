import*as i from"react";var o="85ec1037d8db5377931b876bf302954e8fd127a647ee5ebd0e7702ef19e78322",d=`._container_hs4px_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var e=document.createElement("style");e.id=o,e.textContent=d,document.head.appendChild(e)}})();var t={container:"_container_hs4px_1",wrapper:"_wrapper_hs4px_12",xScroll:"_xScroll_hs4px_23",yScroll:"_yScroll_hs4px_28"};import{ControlType as n}from"framer";import{getSingleChild as h,getNumProps as m}from"../../utils/framerControlProps.js";import{Example as x}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var v=({children:e,snap:p="start",align:l="center",gap:s=0,direction:r="column"})=>{let c=`${(e?i.Children.count(e):2)===1?t.wrapper:t.container} ${r==="column"?t.yScroll:t.xScroll}`;return a("div",{className:c,style:{"--snap":p,"--align":l,"--gap":s+"px","--direction":r,"--axis":r==="row"?"x":"y"},children:e||a(x,{})})},S={children:{type:n.Array,control:h()},direction:{type:n.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:m(0,!0,10),align:{type:n.Enum,options:["start","center","end"]}};export{v as ScrollSnap,S as propsControls};
