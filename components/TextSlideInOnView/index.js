import{motion as f,useInView as c}from"framer-motion";var o="c123a55e1769d16a7a23db1c46b579a0faefe2c1e7ab7025e36da32b9db64ec0",s=`._text_s0yx6_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=s,document.head.appendChild(t)}})();var e={text:"_text_s0yx6_1",container:"_container_s0yx6_10"};import{useRef as l}from"react";import{typography as d}from"../../utils/framerControlProps.js";import{jsx as a}from"react/jsx-runtime";var m={initial:{rotateZ:90},slideIn:{rotateZ:0}},u=({text:t="Example Text Here",typography:n})=>{let i=l(null),r=c(i,{once:!0});return a("div",{className:e.container,ref:i,children:a(f.div,{variants:m,className:e.text,initial:"initial",animate:r?"slideIn":"initial",transition:{type:"spring",damping:20,bounce:0},style:{"--font-family":n?.font||"inherit","--font-size":(n?.fontSize||50)+"px","--font-weight":n?.fontWeight||600,"--color":n?.color||"#222"},children:t})})},y={typography:d};export{u as TextSlideInOnView,y as propsControls};