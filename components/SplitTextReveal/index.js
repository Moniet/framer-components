import{useRef as w}from"react";var p="88e2f5b430c3100727ed3d55490af56c9b0d672732c513f2bcbd371b08ee0d73",_=`._container_f9uf0_1 {
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
}

._container_f9uf0_1 span {
  display: inline-block;
}

._container_f9uf0_1 [data-component="fc-space"] {
  width: var(--space, 10px);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=_,document.head.appendChild(t)}})();var r={container:"_container_f9uf0_1"};import{motion as b,useInView as T}from"framer-motion";import{useSplitText as S}from"../../hooks/useSplitText.js";import{getBoolProps as E,getNumProps as e,getStrProps as B,getTypeographyStyles as C,typography as I}from"../../utils/framerControlProps.js";import{jsx as a}from"react/jsx-runtime";var X=({typography:t,text:i="Example Text",space:c=20,fadeIn:f=!0,offsetY:l=0,offsetX:m=5,duration:d=1})=>{let g=i.split(" ").map(n=>n.split("")),o=w(null),x=T(o),s=d/g.flat().length,y={reveal:{x:0,y:0,opacity:1},initial:{x:m,y:l,opacity:f?0:1}},u=S(i);return a("div",{className:r.container,style:{...C(t),"--letter-spacing":t?.letterSpacing||"10px"},ref:o,children:u?.map(({isSpace:n,letter:v,position:h})=>n?a("span",{"data-component":"fc-space",style:{"--space":c+"px"}}):a(b.span,{variants:y,animate:x?"reveal":"initial",initial:"initial",transition:{delay:h*s,duration:s,type:"spring",damping:20,bounce:.1},children:v}))})},Y={typography:I,space:e(10,!0,1,{min:0,max:100}),text:B("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:E(!1)};export{X as SplitTextReveal,Y as propsControls};
