import{ControlType as n}from"framer";import{useEffect as u,useRef as m}from"react";var i="4dbf91d066d4153758fe5c01139636f326c0eba388946e703c894d5974c0cd9d",l=`._container_1ecmn_1 {
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=l,document.head.appendChild(e)}})();var a={container:"_container_1ecmn_1"};import{jsx as s}from"react/jsx-runtime";var h=({src:e,alt:t})=>s("img",{src:e,alt:t,width:"100%",height:"100%"}),b=({filter:e,amount:t,children:o,image:r})=>{let c=m(null);return u(()=>{let d=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":case"invert":return"%";case"blur":return"px";case"hue":return"deg";default:return""}})(),p=`${e}(${t}${d})`;c.current?.style.setProperty("filter",p)},[e,t,r,o]),s("div",{className:a.container,ref:c,children:r?s(h,{...r}):o})},x={image:{type:n.ResponsiveImage,hidden:e=>!!e.children},filter:{type:n.Enum,options:["blur","sepia","contrast","hue-rotate","grayscale","invert"],optionTitles:["Blur","Sepia","Contrast","Hue","Grayscale","Invert"],defaultValue:"blur"},amount:{type:n.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:n.ComponentInstance}};export{b as Filters,x as propsControls};
