import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var s="0e842cd44ca78d3973e21d407e04f29d97faf8efd20dfc6140b02acaabc65af6",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=x,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as w,getNumProps as t,getSingleChild as E}from"../../utils/framerControlProps.js";import C from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:f=1.3,scaleTo:m=1,easing:d="ease",duration:p=2})=>{let n=l(null),a=l(null),i=y(n,{once:!0});return _(()=>{let u=n.current,g=a.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${f})`},{transform:`scale(${m})`}],r={fill:"forwards",easing:d,duration:p*1e3};i&&(u.animate(h,r),g.animate(v,r))},[i]),o("div",{ref:n,className:c.container,children:o("div",{ref:a,children:e||o(C,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...w},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:E()};export{I as BlinkReveal,N as propsControls};
