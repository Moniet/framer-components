import{ControlType as r}from"framer";import{useEffect as u,useRef as f}from"react";var c="d2824b33c204fbc4ef08a5f3c20d1481d4f1436a947d8aca01b89ae37bff7edc",p=`._container_1br66_1 {
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var e=document.createElement("style");e.id=c,e.textContent=p,document.head.appendChild(e)}})();var i={container:"_container_1br66_1"};import{jsx as s}from"react/jsx-runtime";var m=({src:e,alt:t})=>s("img",{src:e,alt:t,width:"100%",height:"100%"}),v=({filter:e,amount:t,children:o,image:n})=>{let a=f(null);return u(()=>{let l=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":case"invert":return"%";case"blur":return"px";case"hue":return"deg";default:return""}})(),d=`${e}(${t}${l})`;a.current?.style.setProperty("filter",d)},[e,t,n,o]),s("div",{className:i.container,ref:a,children:n?s(m,{...n}):o})},C={image:{type:r.ResponsiveImage,hidden:e=>!!e.children},filter:{type:r.Enum,options:["blur","sepia","contrast","hue-rotate","grayscale","invert"],optionTitles:["Blur","Sepia","Contrast","Hue","Grayscale","Invert"],defaultValue:"blur"},amount:{type:r.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:r.ComponentInstance}};export{v as Filters,C as propsControls};
