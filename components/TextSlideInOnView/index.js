import{motion as f,useInView as c}from"framer-motion";var o="cdfeeec897d4d183e8fea5971c085933f7b2396ed049f3f1921a8963d7236ea1",s=`._text_s0yx6_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=s,document.head.appendChild(t)}})();var n={text:"_text_s0yx6_1",container:"_container_s0yx6_10"};import{useRef as d}from"react";import{typography as l}from"../../utils/framerControlProps.js";import{jsx as r}from"react/jsx-runtime";var m={initial:{rotateZ:90},slideIn:{rotateZ:0}},u=({text:t="Example Text Here",typography:e})=>{let i=d(null),a=c(i,{once:!0});return r("div",{className:n.container,ref:i,children:r(f.div,{variants:m,className:n.text,initial:"initial",animate:a?"slideIn":"initial",transition:{type:"spring",damping:20,bounce:0},style:{"--font-family":e?.font||"inherit","--font-size":(e?.fontSize||50)+"px","--font-weight":e?.fontWeight||600,"--color":e?.color||"#222"},children:t})})},y={typography:l};export{u as TextSlideInOnView,y as propsControls};
