import{motion as f,useMotionValue as y,useInView as b}from"framer-motion";import{useRef as g}from"react";import{ControlType as e}from"framer";var i=()=>({type:e.ComponentInstance});var S={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},C={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},V={type:e.Object,controls:{fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}};import{getNumProps as x}from"../../utils/framerControlProps.js";var a="7b59a10064ae3ca30e70967207fd5d9d220c41c2dbdeb49ea42b32f8a04a21f9",d=`._container_17nmt_1 {
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var t=document.createElement("style");t.id=a,t.textContent=d,document.head.appendChild(t)}})();var l={container:"_container_17nmt_1"};import{jsx as o,jsxs as s}from"react/jsx-runtime";var z=({children:t,id:u="123",duration:p=3})=>{let n=g(null),c=y(.1),m=b(n,{once:!0,amount:.4}),r=`fc-liquid-turb-${u}`;return s("div",{ref:n,children:[o("svg",{width:"0",height:"0",children:o("defs",{children:s("filter",{id:r,children:[o(f.feTurbulence,{type:"turbulence",result:"turbulence",baseFrequency:c,numOctaves:"1",id:"turb",animate:{baseFrequency:m?[.2,0]:[.2]},transition:{duration:p,type:"spring"}}),o("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"7",xChannelSelector:"R",yChannelSelector:"G"})]})})}),o("div",{style:{filter:`url(#${r})`},className:l.container,children:t})]})},T={children:i(),duration:x(3,!0,.1,{min:.1,max:5})};export{z as LiquidReveal,T as propsControls};
