var n="82bcdb8a2d41e1bb8d95e22bb32bf3131ba295ad12b7a5c985fc12752cced756",s=`._container_9g6si_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=s,document.head.appendChild(t)}})();var e={container:"_container_9g6si_1",wrapper:"_wrapper_9g6si_12",xScroll:"_xScroll_9g6si_17",yScroll:"_yScroll_9g6si_22"};import{ControlType as r}from"framer";import{getSingleChild as p,getNumProps as d}from"../../utils/framerControlProps.js";import{jsx as g}from"react/jsx-runtime";var y=({children:t,snap:i="start",align:a="center",gap:l=0,direction:o="column"})=>{let c=`${e.container} ${o==="column"?e.yScroll:e.xScroll}`;return g("div",{className:c,style:{"--snap":i,"--align":a,"--gap":l+"px","--direction":o,"--axis":o==="row"?"x":"y"},children:t})},u={children:{type:r.Array,control:p()},direction:{type:r.Enum,options:["column","row"],optionTitles:["Column","Row"]},gap:d(0,!0,10),align:{type:r.Enum,options:["start","center","end"]}};export{y as ScrollSnap,u as propsControls};
