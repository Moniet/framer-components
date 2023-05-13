import*as i from"react";var e="0fbd6c419c175b8cc5bf26ffe5b176e0beaa9b812daaacc754898683d3f63bf8",s=`._container_1tdwj_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_1tdwj_12 > div {
  display: flex !important;
  flex-wrap: nowrap !important;
  flex-direction: var(--direction, column) !important;
  scroll-snap-type: var(--axis) mandatory !important;
  align-items: var(--align, center);
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._xScroll_1tdwj_23 {
  overflow-x: auto;
  max-width: 100%;
}

._yScroll_1tdwj_28 {
  overflow-y: auto;
  max-height: 100%;
}

._wrapper_1tdwj_12 > div > * {
  scroll-snap-align: var(--snap);
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}

._container_1tdwj_1 > * {
  scroll-snap-align: var(--snap);
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=s,document.head.appendChild(t)}})();var r={container:"_container_1tdwj_1",wrapper:"_wrapper_1tdwj_12",xScroll:"_xScroll_1tdwj_23",yScroll:"_yScroll_1tdwj_28"};import{ControlType as o}from"framer";import{getSingleChild as m,getNumProps as w}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var v=({children:t,snap:l="start",align:p="center",gap:c=0,direction:n="column"})=>{let d=`${(t?i.Children.count(t):2)===1?r.wrapper:r.container} ${n==="column"?r.yScroll:r.xScroll}`;return a("div",{className:d,style:{"--snap":l,"--align":p,"--gap":c+"px","--direction":n,"--axis":n==="row"?"x":"y"},children:t||a(g,{})})},b={children:{type:o.Array,control:m()},direction:{type:o.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:w(0,!0,10),align:{type:o.Enum,options:["start","center","end"]}};export{v as ScrollSnap,b as propsControls};
