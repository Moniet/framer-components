import{ControlType as t}from"framer";import{useEffect as u,useRef as m}from"react";var a="79e7399caec7592075af3e1a4742ce81200d64bef76a54fc18bb8e689ed11acd",d=`._container_1br66_1 {
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=d,document.head.appendChild(e)}})();var i={container:"_container_1br66_1"};import{jsx as o}from"react/jsx-runtime";var f=({src:e,alt:r})=>o("img",{src:e,alt:r,width:"100%",height:"100%"}),_=({filter:e,amount:r,children:s,image:n})=>{let c=m(null);return u(()=>{let l=(()=>{switch(e){case"sepia":case"grayscale":case"contrast":return"%";case"blur":return"px";default:return""}})(),p=`${e}(${r}${l})`;c.current?.style.setProperty("filter",p)},[e,r,n,s]),o("div",{className:i.container,ref:c,children:n?o(f,{...n}):s})},v={image:{type:t.ResponsiveImage,hidden:e=>!!e.children},filter:{type:t.Enum,options:["blur","sepia","contrast","hue","grayscale"],defaultValue:"blur"},amount:{type:t.Number,step:1,displayStepper:!0},children:{hidden:e=>!!e.image,type:t.Array,control:{type:t.ComponentInstance}}};export{_ as Filters,v as propsControls};
