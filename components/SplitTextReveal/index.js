import _,{useRef as w}from"react";var r="6869782611935e15949d93ae41402f797c83b2d83cb464ebb9a3ecb542c86469",v=`._container_qxz3g_1 {
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}

._container_qxz3g_1 span {
  display: inline-block;
}

._container_qxz3g_1 [data-component="fc-space"] {
  width: var(--space, 10px);
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=v,document.head.appendChild(t)}})();var p={container:"_container_qxz3g_1"};import{motion as b,useInView as z}from"framer-motion";import{getBoolProps as T,getNumProps as e,getStrProps as q,getTypeographyStyles as E,typography as R}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as C}from"react/jsx-runtime";var F=({text:t="Example Text",space:c=5,typography:l,fadeIn:m=!0,offsetY:f=0,offsetX:d=10,duration:x=.5})=>{let i=t.split(" ").map(a=>a.split("")),s=w(null),y=z(s),g={reveal:{x:0,y:0,opacity:1},initial:{x:d,y:f,opacity:m?0:1}};return o("div",{className:p.container,style:{...E(l)},ref:s,children:i.map((a,n)=>C(_.Fragment,{children:[a.map((h,u)=>o(b.span,{variants:g,animate:y?"reveal":"initial",initial:"initial",transition:{delay:n+u/10,duration:x},children:h})),n<i.length&&o("span",{"data-component":"fc-space",style:{"--space":c+"px"}})]},n))})},N={typography:R,space:e(10,!0,1,{min:0,max:100}),text:q("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:T(!1)};export{F as SplitTextReveal,N as propsControls};
