import{getMultipleChildren as p,getNumProps as o}from"../../utils/framerControlProps.js";import{useScroll as f,useTransform as s,useVelocity as d,motion as k}from"framer-motion";import{jsx as w}from"react/jsx-runtime";var x=({children:e,duration:r=.4,stretch:n=1.2,skew:a=3})=>{let{scrollY:i}=f(),t=d(i),l=s(t,[0,1e3],[1,n]),c=s(t,[0,1e3],[0,a]),m=s(c,u=>`${u}deg`);return w(k.div,{style:{"--scaleY":l,"--skew":m,transform:"skewY(var(--skew)) scaleY(var(--scaleY))",transition:`transform ${r}s ease-out`},children:e})},y={skew:o(3,!0,1,{min:0,max:10}),stretchiness:o(1.2,!0,.1,{min:1,max:2}),duration:o(.4,!0,.1,{min:0,max:2}),children:p()};export{x as SkewOnScroll,y as propsControls};