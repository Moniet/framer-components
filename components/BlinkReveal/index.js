import{useInView as y}from"framer";import{useEffect as _,useRef as l}from"react";var s="21c45167c41859f5c6e72cea299822d2d4f10463dadb61021f8561ec24cb61f8",x=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=x,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as w,getNumProps as t,getSingleChild as E}from"../../utils/framerControlProps.js";import C from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:f=1,easing:d="ease",duration:p=2})=>{let n=l(null),i=l(null),a=y(n,{once:!0});return _(()=>{let u=n.current,g=i.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${m})`},{transform:`scale(${f})`}],r={fill:"forwards",easing:d,duration:p*1e3};a&&(u.animate(h,r),g.animate(v,r))},[a]),o("div",{ref:n,className:c.container,children:o("div",{ref:i,children:e||o(C,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{...w},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:E()};export{I as BlinkReveal,N as propsControls};
