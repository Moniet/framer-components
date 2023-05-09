import h,{useRef as b}from"react";var p="c3f1ba32af9aecb6d056745d3e6b2b0883387aed9ed84c6611d6e1b09ca51bf6",_=`._container_vug22_1 {
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
}

._container_vug22_1 span {
  display: inline-block;
}

._container_vug22_1 [data-component="fc-space"] {
  width: var(--space, 10px);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=_,document.head.appendChild(t)}})();var r={container:"_container_vug22_1"};import{motion as w,useInView as T}from"framer-motion";import{getBoolProps as E,getNumProps as e,getStrProps as R,getTypeographyStyles as C,typography as I}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as P}from"react/jsx-runtime";var V=({text:t="Example Text",space:c=5,typography:l,fadeIn:m=!0,offsetY:d=0,offsetX:f=10,duration:y=.5})=>{let i=t.split(" ").map(a=>a.split("")),s=b(null),x=T(s),g={reveal:{x:0,y:0,opacity:1},initial:{x:f,y:d,opacity:m?0:1}};return o("div",{className:r.container,style:{...C(l)},ref:s,children:i.map((a,n)=>P(h.Fragment,{children:[a.map((u,v)=>o(w.span,{variants:g,animate:x?"reveal":"initial",initial:"initial",transition:{delay:n+v/10,duration:y},children:u})),n<i.length&&o("span",{"data-component":"fc-space",style:{"--space":c+"px"}})]},n))})},W={typography:I,space:e(10,!0,1,{min:0,max:100}),text:R("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:E(!1)};export{V as SplitTextReveal,W as propsControls};
