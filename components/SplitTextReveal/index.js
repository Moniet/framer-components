import{useRef as w}from"react";var r="9f02033552d87e47809424796698ad704012a4414244387daf904f79d5319999",_=`._container_hv0ef_1 {
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  color: var(--color);
}

._container_hv0ef_1 span {
  display: inline-block;
}

._container_hv0ef_1 [data-component="fc-space"] {
  width: var(--space, 10px);
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=_,document.head.appendChild(t)}})();var p={container:"_container_hv0ef_1"};import{motion as T,useInView as S}from"framer-motion";import{useSplitText as E}from"../../hooks/useSplitText.js";import{getBoolProps as b,getNumProps as e,getStrProps as B,getTypeographyStyles as C,typography as I}from"../../utils/framerControlProps.js";import{jsx as a}from"react/jsx-runtime";var X=({typography:t,text:i="Example Text",space:l=20,fadeIn:c=!0,offsetY:f=0,offsetX:m=5,duration:d=1})=>{let x=i.split(" ").map(n=>n.split("")),o=w(null),g=S(o),s=d/x.flat().length,v={reveal:{x:0,y:0,opacity:1},initial:{x:m,y:f,opacity:c?0:1}},y=E(i);return a("div",{className:p.container,style:{...C(t),"--letter-spacing":t?.letterSpacing?t.letterSpacing+"px":"10px"},ref:o,children:y?.map(({isSpace:n,letter:h,position:u})=>n?a("span",{"data-component":"fc-space",style:{"--space":l+"px"}}):a(T.span,{variants:v,animate:g?"reveal":"initial",initial:"initial",transition:{delay:u*s,duration:s,type:"spring",damping:20,bounce:.1},children:h}))})},Y={typography:I,space:e(10,!0,1,{min:0,max:100}),text:B("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:b(!1)};export{X as SplitTextReveal,Y as propsControls};
