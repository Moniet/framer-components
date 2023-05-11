import{useEffect as v,useRef as g}from"react";import x from"../../hooks/useMediaQuery.js";var m="1a148cf88348b6f1fbd2578a405ca222aba368e804afc166961fca5973d2b40a",u=`._wrapper_1x26s_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
  min-width: 20px;
  min-height: 20px;
  width: 100%;
  height: 100%;
}

._star_1x26s_11 {
  pointer-events: none;
}

._starSvgWrapper_1x26s_15 {
  position: relative;
  z-index: 1;
  transform-origin: center center;
}

._starSvgWrapper_1x26s_15 svg path {
  fill: var(--path-fill, yellow);
}
`;(function(){if(globalThis.window&&!document.getElementById(m)){var t=document.createElement("style");t.id=m,t.textContent=u,document.head.appendChild(t)}})();var p={wrapper:"_wrapper_1x26s_1",star:"_star_1x26s_11",starSvgWrapper:"_starSvgWrapper_1x26s_15"};import{getNumProps as d,getSingleChild as _}from"../../utils/framerControlProps.js";import{ControlType as y}from"framer";import{jsx as C}from"react/jsx-runtime";var w=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path class="star-path" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,S=(t,e,r=800)=>{let n=[{transform:"scale(0.5)"},{transform:"scale(1)"}],s=[{opacity:0},{opacity:1},{opacity:0}],o={duration:r,fill:"forwards"};e.animate(s,o),t.animate(n,o)},M=(t=5,e=15)=>r=>{let n=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${n}px`,r.style.height=`${n}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},b=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(p.star),e.classList.add(p.starSvgWrapper),e.innerHTML=w,t.appendChild(e),[t,e]},E=(t,{numOfStars:e=10,duration:r=800,minSize:n=10,maxSize:s=20})=>{let o=[],i=[];for(let a=0;a<e;a++){let l=a*(r+a*10),[c,f]=b();i.push(c),t?.appendChild(c);let h=M(n,s);o.push(setInterval(()=>{h(c),S(c,f,r)},l))}return()=>{o?.forEach(a=>clearInterval(a)),i.forEach(a=>{t?.removeChild(a)})}},I=({children:t,minSize:e=20,maxSize:r=25,numOfStars:n=5,duration:s=600,color:o="#debd05"})=>{let i=g(null),a=x("(prefers-reduced-motion: reduce)");return v(()=>{let l=!a&&E(i?.current,{numOfStars:n,duration:s,minSize:e,maxSize:r});return()=>{typeof l=="function"&&l()}},[a,e,r,n,s]),C("div",{className:p.wrapper,style:{"--path-fill":o},ref:i,children:t})},R={children:_(),minSize:d(10,!0,2),maxSize:d(10,!0,2),numOfStars:d(20,!1,5,{min:1,max:100}),duration:d(.5,!1,.1,{min:.1,max:2}),color:{type:y.Color,defaultValue:"#debd05"}};export{I as Sparkles,R as propsControls};
