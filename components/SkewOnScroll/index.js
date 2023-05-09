import{getMultipleChildren as h,getNumProps as e}from"../../utils/framerControlProps.js";import{useScroll as y,useTransform as o,useVelocity as v,motion as k}from"framer-motion";import{ControlType as r}from"framer";var a="a20e364f64a98cd41b82d5fa44ea0dde5ab51c958f5e980a39acf70f1ca33921",g=`._container_1mwzs_1 {
  display: flex;
  flex-direction: var(--direction, column);
  gap: var(--gap, 100px);
  min-width: 100px;
  min-height: 100px;
  height: auto;
  width: auto;
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var t=document.createElement("style");t.id=a,t.textContent=g,document.head.appendChild(t)}})();var i={container:"_container_1mwzs_1"};import{jsx as C}from"react/jsx-runtime";var E=({children:t,duration:s=.4,stretchiness:c=1.2,skew:l=3,gap:m=100,direction:d="column"})=>{let{scrollY:p}=y(),n=v(p),u=o(n,[0,1e3],[1,c]),f=o(n,[0,1e3],[0,l]),w=o(f,x=>`${x}deg`);return C(k.div,{className:i.container,style:{"--scaleY":u,"--skew":w,"--gap":`${m}px`,"--direction":d,transform:"skewY(var(--skew)) scaleY(var(--scaleY))",transition:`transform ${s}s ease-out`},children:t})},N={skew:e(3,!0,1,{min:0,max:10}),stretchiness:e(1.2,!0,.1,{min:1,max:2}),duration:e(.4,!0,.1,{min:0,max:2}),children:h(),direction:{type:r.Enum,options:["column","row"],optionTitles:["Column","Row"],defaultValue:"column"},gap:{type:r.Number,defaultValue:100,step:100,min:0,max:1e3}};export{E as SkewOnScroll,N as propsControls};
