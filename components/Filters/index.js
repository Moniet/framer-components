import{ControlType as n}from"framer";import{useEffect as u,useRef as m}from"react";var c="99ac9a02df22d1093da49b871c9ec1dcdd048812ba01e296ee5f0acb63c204ca",l=`._container_1ecmn_1 {
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var e=document.createElement("style");e.id=c,e.textContent=l,document.head.appendChild(e)}})();var i={container:"_container_1ecmn_1"};import{jsx as s}from"react/jsx-runtime";var h=({src:e,alt:t})=>s("img",{src:e,alt:t,width:"100%",height:"100%"}),v=({filter:e,amount:t,children:o,image:r})=>{let a=m(null);return u(()=>{let d=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":case"invert":return"%";case"blur":return"px";case"hue":return"deg";default:return""}})(),p=`${e}(${t}${d})`;a.current?.style.setProperty("filter",p)},[e,t,r,o]),s("div",{className:i.container,ref:a,children:r?s(h,{...r}):o})},x={image:{type:n.ResponsiveImage,hidden:e=>!!e.children},filter:{type:n.Enum,options:["blur","sepia","contrast","hue-rotate","grayscale","invert"],optionTitles:["Blur","Sepia","Contrast","Hue","Grayscale","Invert"],defaultValue:"blur"},amount:{type:n.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:n.ComponentInstance}};export{v as Filters,x as propsControls};
