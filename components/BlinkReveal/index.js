import{useInView as x}from"framer";import{useEffect as y,useRef as l}from"react";var s="561f5bfbbc2c5393c1a91edb2914f727d3b92661f396c1a826eb7e0ca973dbce",b=`._container_iv48f_1 {
  clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=b,document.head.appendChild(e)}})();var c={container:"_container_iv48f_1"};import{easingProps as _,getNumProps as t,getSingleChild as w}from"../../utils/framerControlProps.js";import E from"./BlinkRevealExample.js";import{jsx as o}from"react/jsx-runtime";var I=({children:e,scaleFrom:m=1.3,scaleTo:f=1,easing:d="ease",duration:p=2})=>{let n=l(null),i=l(null),a=x(n,{once:!0});return y(()=>{let u=n.current,g=i.current,h=[{clipPath:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}],v=[{transform:`scale(${m})`},{transform:`scale(${f})`}],r={fill:"forwards",easing:d,duration:p*1e3};a&&(u.animate(h,r),g.animate(v,r))},[a]),o("div",{ref:n,className:c.container,children:o("div",{ref:i,children:e||o(E,{})})})},N={duration:t(2,!1,.5,{min:.5,max:10}),easing:{..._},scaleFrom:t(1.3,!0,.1,{min:1,max:2}),scaleTo:t(1,!0,.1,{min:1,max:2}),children:w()};export{I as BlinkReveal,N as propsControls};
