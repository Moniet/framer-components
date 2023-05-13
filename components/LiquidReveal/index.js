import{motion as y,useMotionValue as b,useInView as g}from"framer-motion";import{useRef as x}from"react";import{ControlType as e}from"framer";var d=(t,i,n,r)=>({type:e.Number,defaultValue:t,displayStepper:i,...r??{},...n?{step:n}:{}});var l=()=>({type:e.ComponentInstance});var C={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},V={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},v={type:e.Object,controls:{letterSpacing:d(0,!1,1,{min:0,max:100}),fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400,step:100,min:100,max:1e3},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}};import{getNumProps as h}from"../../utils/framerControlProps.js";var s="44668334e83ec9bf21c195ba7476971f871b78134e5924f8e0c4e36337e493a1",f=`._container_17nmt_1 {
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var t=document.createElement("style");t.id=s,t.textContent=f,document.head.appendChild(t)}})();var p={container:"_container_17nmt_1"};import{jsx as o,jsxs as u}from"react/jsx-runtime";var T=({children:t,id:i="123",duration:n=3})=>{let r=x(null),c=b(.1),m=g(r,{once:!0,amount:.4}),a=`fc-liquid-turb-${i}`;return u("div",{ref:r,children:[o("svg",{width:"0",height:"0",children:o("defs",{children:u("filter",{id:a,children:[o(y.feTurbulence,{type:"turbulence",result:"turbulence",baseFrequency:c,numOctaves:"1",id:"turb",animate:{baseFrequency:m?[.2,0]:[.2]},transition:{duration:n,type:"spring"}}),o("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"7",xChannelSelector:"R",yChannelSelector:"G"})]})})}),o("div",{style:{filter:`url(#${a})`},className:p.container,children:t})]})},q={children:l(),duration:h(3,!0,.1,{min:.1,max:5})};export{T as LiquidReveal,q as propsControls};
