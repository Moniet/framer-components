import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var c="578b9fcd7fbac456ecd97e007cf215dfa8c20d8f00c6b9a3749da2d5f537cf6a",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var e=document.createElement("style");e.id=c,e.textContent=x,document.head.appendChild(e)}})();var s={container:"_container_iv48f_1"};import{easingProps as w,getNumProps as t,getSingleChild as E}from"../../utils/framerControlProps.js";import b from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:f=1.3,scaleTo:m=1,easing:d="ease",duration:p=2})=>{let n=l(null),i=l(null),a=y(n,{once:!0});return _(()=>{let u=n.current,g=i.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${f})`},{transform:`scale(${m})`}],r={fill:"forwards",easing:d,duration:p*1e3};a&&(u.animate(h,r),g.animate(v,r))},[a]),o("div",{ref:n,className:s.container,children:o("div",{ref:i,children:e||o(b,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...w},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:E()};export{I as BlinkReveal,N as propsControls};
