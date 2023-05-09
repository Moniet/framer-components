import{motion as f,useInView as c}from"framer-motion";var o="0442898732378e8d9b03b18b28d45f49b340258c008d50666bfc0fa437f66ffc",s=`._text_s0yx6_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=s,document.head.appendChild(t)}})();var e={text:"_text_s0yx6_1",container:"_container_s0yx6_10"};import{useRef as l}from"react";import{typography as m}from"../../utils/framerControlProps.js";import{jsx as r}from"react/jsx-runtime";var d={initial:{rotateZ:90},slideIn:{rotateZ:0}},y=({text:t="Example Text Here",typography:n})=>{let i=l(null),a=c(i,{once:!0});return r("div",{className:e.container,ref:i,children:r(f.div,{variants:d,className:e.text,initial:"initial",animate:a?"slideIn":"initial",transition:{type:"spring",damping:15},style:{"--font-family":n?.font||"inherit","--font-size":(n?.fontSize||50)+"px","--font-weight":n?.fontWeight||600,"--color":n?.color||"#222"},children:t})})},_={typography:m};export{y as TextSlideInOnView,_ as propsControls};
