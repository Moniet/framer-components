import{useInView as x}from"framer";import{useEffect as y,useRef as l}from"react";var s="1bfb5ab14448577ab34f77ac5a4c7e86b29ddfab6c41649bf2b231fc2e07a5b7",v=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=v,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as _,getNumProps as t,getSingleChild as w}from"../../utils/framerControlProps.js";import E from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:f=1,easing:d="ease",duration:p=2})=>{let n=l(null),a=l(null),i=x(n,{once:!0});return y(()=>{let u=n.current,g=a.current,b=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],h=[{transform:`scale(${m})`},{transform:`scale(${f})`}],r={fill:"forwards",easing:d,duration:p*1e3};i&&(u.animate(b,r),g.animate(h,r))},[i]),o("div",{ref:n,className:c.container,children:o("div",{ref:a,children:e||o(E,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{..._},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:w()};export{I as BlinkReveal,N as propsControls};
