import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var s="5b1d57e977ee2cc5cf291754a27327e902d994986021e16cd89524662fbb9d28",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=x,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as w,getNumProps as t,getSingleChild as E}from"../../utils/framerControlProps.js";import b from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:d=1,easing:f="ease",duration:p=2})=>{let n=l(null),i=l(null),r=y(n,{once:!0});return _(()=>{let u=n.current,g=i.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${m})`},{transform:`scale(${d})`}],a={fill:"forwards",easing:f,duration:p*1e3};r&&(u.animate(h,a),g.animate(v,a))},[r]),o("div",{ref:n,className:c.container,children:o("div",{ref:i,children:e||o(b,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...w},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:E()};export{I as BlinkReveal,N as propsControls};
