var n="df5ded222b911036a35cfb4858f6f80a2e00dee06c057478d6810e146facd3ec",c=`._container_9g6si_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=c,document.head.appendChild(e)}})();var t={container:"_container_9g6si_1",wrapper:"_wrapper_9g6si_12",xScroll:"_xScroll_9g6si_17",yScroll:"_yScroll_9g6si_22"};import{useRef as d}from"react";import{jsx as p}from"react/jsx-runtime";var x=({children:e,snap:o="start",align:i="center",gap:a=0,direction:r="column"})=>{let l=`${t.container} ${r==="column"?t.yScroll:t.xScroll}`,s=d(null);return p("div",{ref:s,className:l,style:{"--snap":o,"--align":i,"--gap":a+"px","--direction":r,"--axis":r==="row"?"x":"y"},children:e})},u={};export{x as ScrollSnap,u as propsControls};
