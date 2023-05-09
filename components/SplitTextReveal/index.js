import{useRef as w}from"react";var p="274493bc627327c08c6146fdeed957bb0298c42dfc8133b43e41134c32fa7a89",_=`._container_qxz3g_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=_,document.head.appendChild(t)}})();var r={container:"_container_qxz3g_1"};import{motion as b,useInView as T}from"framer-motion";import{useSplitText as z}from"../../hooks/useSplitText.js";import{getBoolProps as q,getNumProps as n,getStrProps as E,getTypeographyStyles as P,typography as S}from"../../utils/framerControlProps.js";import{jsx as a}from"react/jsx-runtime";var O=({text:t="Example Text",space:c=5,typography:l,fadeIn:f=!0,offsetY:m=0,offsetX:d=10,duration:x=2})=>{let o=t.split(" ").map(e=>e.split("")),i=w(null),y=T(i),s=x/o.flat().length,B=o.flat().map(e=>{}),g={reveal:{x:0,y:0,opacity:1},initial:{x:d,y:m,opacity:f?0:1}},u=z(t);return a("div",{className:r.container,style:{...P(l)},ref:i,children:u?.map(({isSpace:e,letter:h,position:v})=>e?a("span",{"data-component":"fc-space",style:{"--space":c+"px"}}):a(b.span,{variants:g,animate:y?"reveal":"initial",initial:"initial",transition:{delay:v*s,duration:s,type:"spring",damping:15,bounce:.5},children:h}))})},W={typography:S,space:n(10,!0,1,{min:0,max:100}),text:E("Example Text"),duration:n(.5,!1,.1,{min:.1,max:2}),offsetX:n(5,!1,1,{min:-50,max:50}),offsetY:n(0,!1,1,{min:-50,max:50}),fadeIn:q(!1)};export{O as SplitTextReveal,W as propsControls};
