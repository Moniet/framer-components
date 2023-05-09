import{useRef as w}from"react";var p="12980d5b51329814ba9ddff523a639f1fca30642468c4b1325701086b9c4e3d0",h=`._container_f9uf0_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=h,document.head.appendChild(t)}})();var r={container:"_container_f9uf0_1"};import{motion as b,useInView as T}from"framer-motion";import{useSplitText as S}from"../../hooks/useSplitText.js";import{getBoolProps as E,getNumProps as e,getStrProps as B,getTypeographyStyles as C,typography as I}from"../../utils/framerControlProps.js";import{jsx as a}from"react/jsx-runtime";var W=({typography:t,text:i="Example Text",space:c=20,fadeIn:f=!0,offsetY:l=0,offsetX:m=5,duration:d=1})=>{let x=i.split(" ").map(n=>n.split("")),o=w(null),g=T(o),s=d/x.flat().length,u={reveal:{x:0,y:0,opacity:1,rotateX:0},initial:{rotateX:50,x:m,y:l,opacity:f?0:1}},y=S(i);return a("div",{className:r.container,style:{...C(t),"--letter-spacing":t?.letterSpacing?t.letterSpacing+"px":"10px"},ref:o,children:y?.map(({isSpace:n,letter:v,position:_})=>n?a("span",{"data-component":"fc-space",style:{"--space":c+"px"}}):a(b.span,{variants:u,animate:g?"reveal":"initial",initial:"initial",transition:{delay:_*s,duration:s,type:"spring",damping:20,bounce:.1},children:v}))})},Y={typography:I,space:e(10,!0,1,{min:0,max:100}),text:B("Example Text"),duration:e(.5,!1,.1,{min:.1,max:2}),offsetX:e(5,!1,1,{min:-50,max:50}),offsetY:e(0,!1,1,{min:-50,max:50}),fadeIn:E(!1)};export{W as SplitTextReveal,Y as propsControls};
