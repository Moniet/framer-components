import*as i from"react";var n="8b83318d094b458cf95b9ac27ec25361eb09201d94a69368b3663e0779c880c5",d=`._container_4btui_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_4btui_12 > div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._xScroll_4btui_23 {
  overflow-x: auto;
  max-width: 100%;
}

._yScroll_4btui_28 {
  overflow-y: auto;
  max-height: 100%;
}

._container_4btui_1 > * {
  scroll-snap-align: var(--snap);
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=d,document.head.appendChild(t)}})();var r={container:"_container_4btui_1",wrapper:"_wrapper_4btui_12",xScroll:"_xScroll_4btui_23",yScroll:"_yScroll_4btui_28"};import{ControlType as o}from"framer";import{getSingleChild as m,getNumProps as u}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var b=({children:t,snap:l="start",align:c="center",gap:p=0,direction:e="column"})=>{let s=`${(t?i.Children.count(t):2)===1?r.wrapper:r.container} ${e==="column"?r.yScroll:r.xScroll}`;return a("div",{className:s,style:{"--snap":l,"--align":c,"--gap":p+"px","--direction":e,"--axis":e==="row"?"x":"y"},children:t||a(g,{})})},v={children:{type:o.Array,control:m()},direction:{type:o.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:u(0,!0,10),align:{type:o.Enum,options:["start","center","end"]}};export{b as ScrollSnap,v as propsControls};
