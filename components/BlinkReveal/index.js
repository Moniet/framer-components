import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var s="334b79b7a1a80fd8b36a5a15e0e59652cadc443df92d2818203adc3b1c416097",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=x,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as b,getNumProps as t,getSingleChild as w}from"../../utils/framerControlProps.js";import E from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:d=1,easing:f="ease",duration:p=2})=>{let n=l(null),a=l(null),i=y(n,{once:!0});return _(()=>{let u=n.current,g=a.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${m})`},{transform:`scale(${d})`}],r={fill:"forwards",easing:f,duration:p*1e3};i&&(u.animate(h,r),g.animate(v,r))},[i]),o("div",{ref:n,className:c.container,children:o("div",{ref:a,children:e||o(E,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...b},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:w()};export{I as BlinkReveal,N as propsControls};
