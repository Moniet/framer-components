import{ControlType as t}from"framer";import{useEffect as u,useRef as f}from"react";var a="f1100545e5db11975544fced458db4dacd56bf2bf28af8b9d65ab5b884a54c14",p=`._container_1br66_1 {
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=p,document.head.appendChild(e)}})();var c={container:"_container_1br66_1"};import{jsx as n}from"react/jsx-runtime";var m=({src:e,alt:r})=>n("img",{src:e,alt:r,width:"100%",height:"100%"}),_=({filter:e,amount:r,children:i,image:o})=>{let s=f(null);return u(()=>{let d=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":return"%";case"blur":return"px";default:return""}})(),l=e+"("+r+d+")";s.current?.style.setProperty("filter",l)},[]),n("div",{className:c.container,ref:s,children:o?n(m,{...o}):i})},v={image:{type:t.ResponsiveImage,hidden:e=>!!e.children},filter:{type:t.Enum,options:["blur","sepia","contrast","hue","grayscale"],defaultValue:"blur"},amount:{type:t.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:t.Array,control:{type:t.ComponentInstance}}};export{_ as Filters,v as propsControls};
