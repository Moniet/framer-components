import{motion as y,useMotionValue as b,useInView as g}from"framer-motion";import{useRef as x}from"react";import{ControlType as e}from"framer";var d=(t,i,o,r)=>({type:e.Number,defaultValue:t,displayStepper:i,...r??{},...o?{step:o}:{}});var l=()=>({type:e.ComponentInstance});var C={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},V={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},v={type:e.Object,controls:{letterSpacing:d(0,!1,1,{min:0,max:100}),fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}};import{getNumProps as h}from"../../utils/framerControlProps.js";var s="ac7e0577ef4f530d9592fb27e275a0b4c3ee5ef19dec22e33a64cfc10c6a180e",f=`._container_17nmt_1 {
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var t=document.createElement("style");t.id=s,t.textContent=f,document.head.appendChild(t)}})();var u={container:"_container_17nmt_1"};import{jsx as n,jsxs as p}from"react/jsx-runtime";var T=({children:t,id:i="123",duration:o=3})=>{let r=x(null),c=b(.1),m=g(r,{once:!0,amount:.4}),a=`fc-liquid-turb-${i}`;return p("div",{ref:r,children:[n("svg",{width:"0",height:"0",children:n("defs",{children:p("filter",{id:a,children:[n(y.feTurbulence,{type:"turbulence",result:"turbulence",baseFrequency:c,numOctaves:"1",id:"turb",animate:{baseFrequency:m?[.2,0]:[.2]},transition:{duration:o,type:"spring"}}),n("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"7",xChannelSelector:"R",yChannelSelector:"G"})]})})}),n("div",{style:{filter:`url(#${a})`},className:u.container,children:t})]})},q={children:l(),duration:h(3,!0,.1,{min:.1,max:5})};export{T as LiquidReveal,q as propsControls};
