import{useEffect as v,useRef as g}from"react";import _ from"../../hooks/useMediaQuery.js";var m="8a3e571d3462bc16e8251dadd42adf6e3f337f9a25afa4189b8c8cdf65985cd4",u=`._wrapper_1ah6c_1 {
  position: relative;
  min-width: 20px;
  min-height: 20px;
  width: 100%;
  height: 100%;
}

._star_1ah6c_9 {
  pointer-events: none;
}

._starSvgWrapper_1ah6c_13 {
  position: relative;
  z-index: 1;
  transform-origin: center center;
}

._starSvgWrapper_1ah6c_13 svg path {
  fill: var(--path-fill, yellow);
}
`;(function(){if(globalThis.window&&!document.getElementById(m)){var t=document.createElement("style");t.id=m,t.textContent=u,document.head.appendChild(t)}})();var p={wrapper:"_wrapper_1ah6c_1",star:"_star_1ah6c_9",starSvgWrapper:"_starSvgWrapper_1ah6c_13"};import{getNumProps as d,getSingleChild as y}from"../../utils/framerControlProps.js";import{ControlType as S}from"framer";import{jsx as C}from"react/jsx-runtime";var w=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,x=(t,e,r=800)=>{let o=[{transform:"scale(0.5)"},{transform:"scale(1)"}],s=[{opacity:0},{opacity:1},{opacity:0}],n={duration:r,fill:"forwards"};e.animate(s,n),t.animate(o,n)},M=(t=5,e=15)=>r=>{let o=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${o}px`,r.style.height=`${o}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},E=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(p.star),e.classList.add(p.starSvgWrapper),e.innerHTML=w,t.appendChild(e),[t,e]},b=(t,{numOfStars:e=10,duration:r=800,minSize:o=10,maxSize:s=20})=>{let n=[],i=[];for(let a=0;a<e;a++){let l=a*(r+a*10),[c,f]=E();i.push(c),t?.appendChild(c);let h=M(o,s);n.push(setInterval(()=>{h(c),x(c,f,r)},l))}return()=>{n?.forEach(a=>clearInterval(a)),i.forEach(a=>{t?.removeChild(a)})}},I=({children:t,minSize:e=20,maxSize:r=25,numOfStars:o=5,duration:s=600,color:n="#debd05"})=>{let i=g(null),a=_("(prefers-reduced-motion: reduce)");return v(()=>{let l=!a&&b(i?.current,{numOfStars:o,duration:s,minSize:e,maxSize:r});return()=>{typeof l=="function"&&l()}},[a,e,r,o,s]),C("div",{className:p.wrapper,style:{"--path-fill":n},ref:i,children:t})},R={children:y(),minSize:d(10,!0,2),maxSize:d(10,!0,2),numOfStars:d(20,!1,5,{min:1,max:100}),duration:d(.5,!1,.1,{min:.1,max:2}),color:{type:S.Color,defaultValue:"#debd05"}};export{I as Sparkles,R as propsControls};
