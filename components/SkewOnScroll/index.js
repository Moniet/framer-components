import{getMultipleChildren as h,getNumProps as t}from"../../utils/framerControlProps.js";import{useScroll as y,useTransform as o,useVelocity as v,motion as b}from"framer-motion";import{ControlType as s}from"framer";var i="3fb630ad3fee5f747bf25b86ed9be37d1ee9a8043873ba89391971f84ddded59",g=`._container_1mwzs_1 {
  display: flex;
  flex-direction: var(--direction, column);
  gap: var(--gap, 100px);
  min-width: 100px;
  min-height: 100px;
  height: auto;
  width: auto;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=g,document.head.appendChild(e)}})();var r={container:"_container_1mwzs_1"};import{jsx as k}from"react/jsx-runtime";var E=({children:e,duration:a=.4,stretchiness:l=1.2,skew:m=3,gap:c=100,direction:d="column"})=>{let{scrollY:p}=y(),n=v(p),u=o(n,[0,1e3],[1,l]),f=o(n,[0,1e3],[0,m]),w=o(f,x=>`${x}deg`);return k(b.div,{className:r.container,style:{"--scaleY":u,"--skew":w,"--gap":`${c}px`,"--direction":d,transform:"skewY(var(--skew)) scaleY(var(--scaleY))",transition:`transform ${a}s ease-out`},children:e})},N={skew:t(3,!0,1,{min:0,max:10}),stretchiness:t(1.2,!0,.1,{min:1,max:2}),duration:t(.4,!0,.1,{min:0,max:2}),children:h(),direction:{type:s.Enum,options:["column","row"],optionTitles:["Column","Row"],defaultValue:"column"},gap:{type:s.Number,defaultValue:100,step:100,min:0,max:1e3}};export{E as SkewOnScroll,N as propsControls};
