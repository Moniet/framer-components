import{getMultipleChildren as h,getNumProps as e}from"../../utils/framerControlProps.js";import{useScroll as y,useTransform as o,useVelocity as v,motion as b}from"framer-motion";import{ControlType as s}from"framer";var i="13f7666c6b2352d3e68286a60f0d357f262d41a5959f29aad291b3bbbc8ed70d",g=`._container_1mwzs_1 {
  display: flex;
  flex-direction: var(--direction, column);
  gap: var(--gap, 100px);
  min-width: 100px;
  min-height: 100px;
  height: auto;
  width: auto;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=g,document.head.appendChild(t)}})();var r={container:"_container_1mwzs_1"};import{jsx as k}from"react/jsx-runtime";var E=({children:t,duration:a=.4,stretchiness:c=1.2,skew:l=3,gap:m=100,direction:d="column"})=>{let{scrollY:p}=y(),n=v(p),u=o(n,[0,1e3],[1,c]),f=o(n,[0,1e3],[0,l]),w=o(f,x=>`${x}deg`);return k(b.div,{className:r.container,style:{"--scaleY":u,"--skew":w,"--gap":`${m}px`,"--direction":d,transform:"skewY(var(--skew)) scaleY(var(--scaleY))",transition:`transform ${a}s ease-out`},children:t})},N={skew:e(3,!0,1,{min:0,max:10}),stretchiness:e(1.2,!0,.1,{min:1,max:2}),duration:e(.4,!0,.1,{min:0,max:2}),children:h(),direction:{type:s.Enum,options:["column","row"],optionTitles:["Column","Row"],defaultValue:"column"},gap:{type:s.Number,defaultValue:100,step:100,min:0,max:1e3}};export{E as SkewOnScroll,N as propsControls};
