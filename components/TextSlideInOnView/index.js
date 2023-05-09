import{motion as f,useInView as c}from"framer-motion";var o="fe941974756f59e488555f7cefe143e3b1e75f79a55c99951561b5c13205e0b2",a=`._text_s0yx6_1 {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: fit-content;
  height: fit-content;
  transform-origin: 0% 0%;
}

._container_s0yx6_10 {
  overflow: hidden;
  white-space: nowrap;
  height: max-content;
  width: max-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=a,document.head.appendChild(t)}})();var n={text:"_text_s0yx6_1",container:"_container_s0yx6_10"};import{useRef as m}from"react";import{typography as l}from"../../utils/framerControlProps.js";import{jsx as r}from"react/jsx-runtime";var d={initial:{rotateZ:90},slideIn:{rotateZ:0}},y=({text:t="Example Text Here",typography:e})=>{let i=m(null),s=c(i,{once:!0});return r("div",{className:n.container,ref:i,children:r(f.div,{variants:d,className:n.text,initial:"initial",animate:s?"slideIn":"initial",transition:{type:"spring",damping:15},style:{"--font-amily":e?.font||"inherit","--font-size":(e?.fontSize||50)+"px","--font-weight":e?.fontWeight||600,"--color":e?.color||"#222"},children:t})})},_={typography:l};export{y as TextSlideInOnView,_ as propsControls};
