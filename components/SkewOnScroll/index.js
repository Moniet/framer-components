import{getMultipleChildren as h,getNumProps as t}from"../../utils/framerControlProps.js";import{useScroll as y,useTransform as o,useVelocity as v,motion as k}from"framer-motion";import{ControlType as s}from"framer";var i="27ca04c0112b8516917e469925fa754f1215ee3ee6e25a11bac17e55625c8f11",g=`._container_1mwzs_1 {
  display: flex;
  flex-direction: var(--direction, column);
  gap: var(--gap, 100px);
  min-width: 100px;
  min-height: 100px;
  height: auto;
  width: auto;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=g,document.head.appendChild(e)}})();var r={container:"_container_1mwzs_1"};import{jsx as C}from"react/jsx-runtime";var E=({children:e,duration:a=.4,stretchiness:c=1.2,skew:l=3,gap:m=100,direction:p="column"})=>{let{scrollY:u}=y(),n=v(u),d=o(n,[0,1e3],[1,c]),f=o(n,[0,1e3],[0,l]),w=o(f,x=>`${x}deg`);return C(k.div,{className:r.container,style:{"--scaleY":d,"--skew":w,"--gap":`${m}px`,"--direction":p,transform:"skewY(var(--skew)) scaleY(var(--scaleY))",transition:`transform ${a}s ease-out`},children:e})},N={skew:t(3,!0,1,{min:0,max:10}),stretchiness:t(1.2,!0,.1,{min:1,max:2}),duration:t(.4,!0,.1,{min:0,max:2}),children:h(),direction:{type:s.Enum,options:["column","row"],optionTitles:["Column","Row"],defaultValue:"column"},gap:{type:s.Number,defaultValue:100,step:100,min:0,max:1e3}};export{E as SkewOnScroll,N as propsControls};
