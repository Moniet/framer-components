import{motion as f,useInView as d}from"framer-motion";var o="195fa6db31b168749b323dd080e9234247258bde27327b1a9d92d354c381767b",s=`._text_s0yx6_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=s,document.head.appendChild(t)}})();var e={text:"_text_s0yx6_1",container:"_container_s0yx6_10"};import{useRef as c}from"react";import{typography as l}from"../../utils/framerControlProps.js";import{jsx as r}from"react/jsx-runtime";var m={initial:{rotateZ:90},slideIn:{rotateZ:0}},y=({text:t="Example Text Here",typography:n})=>{let i=c(null),a=d(i,{once:!0});return r("div",{className:e.container,ref:i,children:r(f.div,{variants:m,className:e.text,initial:"initial",animate:a?"slideIn":"initial",transition:{type:"spring",damping:15},style:{"--font-family":n?.font||"inherit","--font-size":(n?.fontSize||50)+"px","--font-weight":n?.fontWeight||600,"--color":n?.color||"#222"},children:t})})},_={typography:l};export{y as TextSlideInOnView,_ as propsControls};
