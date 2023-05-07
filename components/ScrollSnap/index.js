import*as i from"react";var n="1a633e5b383453537fb200fddd78dbc59586c2de3699fea65c48b9c2f6893da6",d=`._container_vu66z_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=d,document.head.appendChild(t)}})();var e={container:"_container_vu66z_1",wrapper:"_wrapper_vu66z_12",xScroll:"_xScroll_vu66z_23",yScroll:"_yScroll_vu66z_28"};import{ControlType as o}from"framer";import{getSingleChild as m,getNumProps as u}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as a}from"react/jsx-runtime";var f=({children:t,snap:l="start",align:c="center",gap:p=0,direction:r="column"})=>{let s=`${i.Children.count(t)===1?e.wrapper:e.container} ${r==="column"?e.yScroll:e.xScroll}`;return a("div",{className:s,style:{"--snap":l,"--align":c,"--gap":p+"px","--direction":r,"--axis":r==="row"?"x":"y"},children:t||a(g,{})})},S={children:{type:o.Array,control:m()},direction:{type:o.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:u(0,!0,10),align:{type:o.Enum,options:["start","center","end"]}};export{f as ScrollSnap,S as propsControls};
