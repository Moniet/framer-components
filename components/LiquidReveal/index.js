import{motion as f,useMotionValue as b,useInView as y}from"framer-motion";import{useRef as g}from"react";import{ControlType as e}from"framer";var i=()=>({type:e.ComponentInstance});var S={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},C={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"};import{getNumProps as x}from"../../utils/framerControlProps.js";var u="689e43fd03b5934e5f5f8af6d98bf93fc297f2857930a322e11e3e9ae198d94e",d=`._container_17nmt_1 {
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(u)){var t=document.createElement("style");t.id=u,t.textContent=d,document.head.appendChild(t)}})();var a={container:"_container_17nmt_1"};import{jsx as r,jsxs as s}from"react/jsx-runtime";var _=({children:t,id:p="123",duration:l=3})=>{let n=g(null),m=b(.1),c=y(n,{once:!0,amount:.4}),o=`fc-liquid-turb-${p}`;return s("div",{ref:n,children:[r("svg",{width:"0",height:"0",children:r("defs",{children:s("filter",{id:o,children:[r(f.feTurbulence,{type:"turbulence",result:"turbulence",baseFrequency:m,numOctaves:"1",id:"turb",animate:{baseFrequency:c?[.2,0]:[.2]},transition:{duration:l,type:"spring"}}),r("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"7",xChannelSelector:"R",yChannelSelector:"G"})]})})}),r("div",{style:{filter:`url(#${o})`},className:a.container,children:t})]})},q={children:i(),duration:x(3,!0,.1,{min:.1,max:5})};export{_ as LiquidReveal,q as propsControls};
