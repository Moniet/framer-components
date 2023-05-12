import*as a from"react";var r="1e39f9e7440a57d23fe401605e0a967ac7d021e354fae362a1385c095b043233",c=`._container_11d6l_1 {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: var(--align, center);
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._wrapper_11d6l_11 > div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: var(--align, center);
  gap: var(--gap, 0px);
  height: 100%;
  width: 100%;
}

._xScroll_11d6l_21 {
  overflow-x: auto;
  max-width: 100%;
}

._container_11d6l_1 > * {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var e=document.createElement("style");e.id=r,e.textContent=c,document.head.appendChild(e)}})();var t={container:"_container_11d6l_1",wrapper:"_wrapper_11d6l_11",xScroll:"_xScroll_11d6l_21"};import{ControlType as n}from"framer";import{getSingleChild as d,getNumProps as s}from"../../utils/framerControlProps.js";import{Example as g}from"./Example.js";import{jsx as o}from"react/jsx-runtime";var u=({children:e,align:i="center",gap:l=0})=>{let p=`${(e?a.Children.count(e):2)===1?t.wrapper:t.container} ${t.xScroll}`;return o("div",{className:p,style:{"--align":i,"--gap":l+"px"},children:e||o(g,{})})},y={children:{type:n.Array,control:d()},gap:s(0,!0,10),align:{type:n.Enum,options:["start","center","end"]}};export{u as HorizontalScroll,y as propsControls};
