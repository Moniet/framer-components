import{motion as S,useMotionValue as d,useSpring as l,useTransform as p,transform as f}from"framer";import{useRef as X}from"react";import{useCachedRect as Y}from"../../hooks/useCachedRect.js";var c="084ccb62556636d9e6c722085c35d0f5f3b50345de785a902aeec11051c41a3e",E=`._container_lopt7_1 {
  width: "fit-content";
  height: "fit-content";
  transition: transform var(--duration) ease;
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var o=document.createElement("style");o.id=c,o.textContent=E,document.head.appendChild(o)}})();var m={container:"_container_lopt7_1"};import{getNumProps as r,getSingleChild as A}from"../../utils/framerControlProps.js";import{jsx as B}from"react/jsx-runtime";var z=({children:o,duration:u=.3,sensitivity:h=2,movement:v=3})=>{let s=d(0),i=d(0),e=f(h,[1,10],[50,300]),n=f(v,[1,10],[5,100]),x=p(s,[-e,e],[-n,n]),y=p(i,[-e,e],[-n,n]),a=X(null),g=Y(a),P=l(x),b=l(y);return B(S.div,{ref:a,className:m.container,style:{x:P,y:b,"--duration":`${u}s`},onMouseMove:t=>{t.preventDefault(),t.stopPropagation();let{left:w,top:C,height:_,width:D}=g,M=w+D/2,R=C+_/2,T=t.clientX-M,N=t.clientY-R;s.set(T),i.set(N)},onMouseLeave:t=>{t.preventDefault(),t.stopPropagation(),s.set(0),i.set(0)},children:o})},G={movement:r(3,!1,.5,{min:1,max:10}),sensitivity:r(2,!1,.5,{min:1,max:10}),duration:r(.3,!1,.1,{min:.1,max:2}),children:A()};export{z as FollowCursor,G as propsControls};
