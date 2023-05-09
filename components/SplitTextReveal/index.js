import v,{useRef as h}from"react";var p="83ad22a35607a7f1f6071b2972d2004426b4650617e755f5c791be15059d22c0",w=`._container_owzid_1 {
  white-space: nowrap;
}

._container_owzid_1 span {
  display: inline-block;
}

._container_owzid_1 [data-component="fc-space"] {
  width: var(--space, 10px);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=w,document.head.appendChild(t)}})();var r={container:"_container_owzid_1"};import{motion as b,useInView as T}from"framer-motion";import{getBoolProps as z,getNumProps as e,getStrProps as E,getTypeographyStyles as R,typography as C}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as I}from"react/jsx-runtime";var N=({text:t="Example Text",space:c=5,typography:l,fadeIn:m=!0,offsetY:d=0,offsetX:f=10,duration:y=.5})=>{let i=t.split(" ").map(a=>a.split("")),s=h(null),x=T(s),u={reveal:{x:0,y:0,opacity:1},initial:{x:f,y:d,opacity:m?0:1}};return o("div",{className:r.container,style:{...R(l)},ref:s,children:i.map((a,n)=>I(v.Fragment,{children:[a.map((g,_)=>o(b.span,{variants:u,animate:x?"reveal":"initial",initial:"initial",transition:{delay:n+_/10,duration:y},children:g})),n<i.length&&o("span",{"data-component":"fc-space",style:{"--space":c+"px"}})]},n))})},V={space:e(10,!0,1,{min:0,max:100}),text:E("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),typography:C,offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:z(!1)};export{N as SplitTextReveal,V as propsControls};
