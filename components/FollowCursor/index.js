import{motion as N,useMotionValue as g,useSpring as v,useTransform as x}from"framer";import y,{useRef as S}from"react";var p="bd4b420867bfc44977530c20279b0ac5c42d7d646350d9f1a0de8a8a8352ce99",L=`._container_lopt7_1 {
  width: "fit-content";
  height: "fit-content";
  transition: transform var(--duration) ease;
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=L,document.head.appendChild(e)}})();var h={container:"_container_lopt7_1"};import{getNumProps as w,getSingleChild as z}from"../../utils/framerControlProps.js";import H from"./FollowCursorExample.js";import{jsx as m}from"react/jsx-runtime";var u,J=({children:e,duration:T=.3,movement:o=30})=>{let n=g(0),r=g(0),E=x(n,[-200,200],[-o,o]),M=x(r,[-200,200],[-o,o]),i=S(null),f=y.useRef({});y.useEffect(()=>{let t=()=>{clearTimeout(u),u=setTimeout(()=>{let{width:s,height:c,top:a,left:d}=i.current?.getBoundingClientRect()||{},l={left:d,top:a,width:s,height:c};f.current=l},200)};return t(),window.addEventListener("resize",t),()=>{try{clearTimeout(u),window.removeEventListener("resize",t)}catch{}}},[i]);let P=v(E),b=v(M),C=t=>{t.preventDefault(),t.stopPropagation();let{left:s=0,top:c=0}=f.current||{};t.currentTarget.scrollWidth;let a=t.currentTarget.clientWidth,d=t.currentTarget.clientHeight,l=s+a,R=c+d,D=t.screenX-l,_=t.screenY-R;n.set(D),r.set(_)};return m("div",{onMouseMove:t=>C(t),onMouseLeave:t=>{t.preventDefault(),t.stopPropagation(),n.set(0),r.set(0)},children:m(N.div,{ref:i,className:h.container,style:{x:P,y:b,"--duration":`${T}s`},children:e||m(H,{})})})},V={movement:w(30,!1,5,{min:10,max:100}),duration:w(.3,!1,.1,{min:.1,max:2}),children:z()};export{J as FollowCursor,V as propsControls};
