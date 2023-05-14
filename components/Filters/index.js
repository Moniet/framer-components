import{ControlType as n}from"framer";import{useEffect as d,useRef as m}from"react";var i="40652e6756679ab9306e6e83faf334073c6d494f2f57102d3a3f7a1cca7aba61",u=`._container_1ecmn_1 {
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=u,document.head.appendChild(e)}})();var c={container:"_container_1ecmn_1"};import{jsx as s}from"react/jsx-runtime";var f=({src:e,alt:t})=>s("img",{src:e,alt:t,width:"100%",height:"100%"}),b=({filter:e,amount:t,children:a,image:r})=>{let o=m(null);return d(()=>{let p=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":case"invert":return"%";case"blur":return"px";case"hue":return"deg";default:return""}})(),l=`${e}(${t}${p})`;o.current?.style.setProperty("filter",l)},[e,t,r,a]),s("div",{className:c.container,ref:o,children:r?s(f,{...r}):a})},x={image:{type:n.ResponsiveImage,hidden:e=>!!e.children},filter:{type:n.Enum,options:["blur","sepia","contrast","hue-rotate","grayscale","invert"],optionTitles:["Blur","Sepia","Contrast","Hue","Grayscale","Invert"],defaultValue:"blur"},amount:{type:n.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:n.ComponentInstance}};export{b as Filters,x as propsControls};
