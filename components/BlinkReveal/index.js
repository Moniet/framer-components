import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var c="397ee45526136c91fd977e5741b56e0f7fc20cc234eecc173c3023a155ef6d50",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var e=document.createElement("style");e.id=c,e.textContent=x,document.head.appendChild(e)}})();var s={container:"_container_iv48f_1"};import{easingProps as w,getNumProps as t,getSingleChild as E}from"../../utils/framerControlProps.js";import C from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:f=1,easing:d="ease",duration:p=2})=>{let n=l(null),i=l(null),r=y(n,{once:!0});return _(()=>{let u=n.current,g=i.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${m})`},{transform:`scale(${f})`}],a={fill:"forwards",easing:d,duration:p*1e3};r&&(u.animate(h,a),g.animate(v,a))},[r]),o("div",{ref:n,className:s.container,children:o("div",{ref:i,children:e||o(C,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...w},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:E()};export{I as BlinkReveal,N as propsControls};
