import{ControlType as r}from"framer";import{useEffect as d,useRef as f}from"react";var c="aa7ea2f1fa8970ce1d83fdb7e44e2c7f8e5b7b4baedc56f8050d8839939e23e1",u=`._container_1br66_1 {
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var e=document.createElement("style");e.id=c,e.textContent=u,document.head.appendChild(e)}})();var i={container:"_container_1br66_1"};import{jsx as s}from"react/jsx-runtime";var m=({src:e,alt:t})=>s("img",{src:e,alt:t,width:"100%",height:"100%"}),v=({filter:e,amount:t,children:o,image:n})=>{let a=f(null);return d(()=>{let l=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":case"invert":return"%";case"blur":return"px";case"hue":return"deg";default:return""}})(),p=`${e}(${t}${l})`;a.current?.style.setProperty("filter",p)},[e,t,n,o]),s("div",{className:i.container,ref:a,children:n?s(m,{...n}):o})},C={image:{type:r.ResponsiveImage,hidden:e=>!!e.children},filter:{type:r.Enum,options:["blur","sepia","contrast","hue-rotate","grayscale","invert"],optionTitles:["Blur","Sepia","Contrast","Hue","Grayscale","Invert"],defaultValue:"blur"},amount:{type:r.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:r.ComponentInstance}};export{v as Filters,C as propsControls};
