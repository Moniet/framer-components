import*as i from"react";var n="44d10642c25e83a15039c0b7019c02209f4aa8f6ea65ba9ff0248d28f516a923",d=`._container_4btui_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=d,document.head.appendChild(t)}})();var r={container:"_container_4btui_1",wrapper:"_wrapper_4btui_12",xScroll:"_xScroll_4btui_23",yScroll:"_yScroll_4btui_28"};import{ControlType as e}from"framer";import{getSingleChild as m,getNumProps as u}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var v=({children:t,snap:l="start",align:c="center",gap:p=0,direction:o="column"})=>{let s=`${(t?i.Children.count(t):2)===1?r.wrapper:r.container} ${o==="column"?r.yScroll:r.xScroll}`;return a("div",{className:s,style:{"--snap":l,"--align":c,"--gap":p+"px","--direction":o,"--axis":o==="row"?"x":"y"},children:t||a(g,{})})},b={children:{type:e.Array,control:m()},direction:{type:e.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:u(0,!0,10),align:{type:e.Enum,options:["start","center","end"]}};export{v as ScrollSnap,b as propsControls};
