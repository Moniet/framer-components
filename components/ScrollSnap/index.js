var n="f2ef3b4299fac8aa18e99822350510797ee89f1780f58d92260028c79ceca27a",p=`._container_9g6si_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: var(--direction, column);
  align-items: var(--align, center);
  scroll-snap-type: var(--axis) mandatory;
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_9g6si_12 {
  width: 100%;
  height: 100%;
}

._xScroll_9g6si_17 {
  overflow-x: auto;
  max-width: 100%;
}

._yScroll_9g6si_22 {
  overflow-y: auto;
  max-height: 100%;
}

._container_9g6si_1 > * {
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=p,document.head.appendChild(t)}})();var e={container:"_container_9g6si_1",wrapper:"_wrapper_9g6si_12",xScroll:"_xScroll_9g6si_17",yScroll:"_yScroll_9g6si_22"};import{ControlType as r}from"framer";import{getSingleChild as d,getNumProps as g}from"../../utils/framerControlProps.js";import{Example as m}from"./Example.js";import{jsx as i}from"react/jsx-runtime";var u=({children:t,snap:a="start",align:l="center",gap:s=0,direction:o="column"})=>{let c=`${e.container} ${o==="column"?e.yScroll:e.xScroll}`;return i("div",{className:c,style:{"--snap":a,"--align":l,"--gap":s+"px","--direction":o,"--axis":o==="row"?"x":"y"},children:t||i(m,{})})},w={children:{type:r.Array,control:d()},direction:{type:r.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:g(0,!0,10),align:{type:r.Enum,options:["start","center","end"]}};export{u as ScrollSnap,w as propsControls};
