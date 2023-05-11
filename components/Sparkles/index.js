import{useEffect as v,useRef as g}from"react";import y from"../../hooks/useMediaQuery.js";var d="e3c91939afe142c4e06a6314c1d14f101b672c2f467140e8153c153116e97739",h=`._wrapper_1f3mn_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._star_1f3mn_7 {
  pointer-events: none;
}

._starSvgWrapper_1f3mn_11 {
  z-index: 1;
  transform-origin: center center;
}

._starSvgWrapper_1f3mn_11 svg path {
  fill: var(--path-fill, yellow);
}
`;(function(){if(globalThis.window&&!document.getElementById(d)){var t=document.createElement("style");t.id=d,t.textContent=h,document.head.appendChild(t)}})();var p={wrapper:"_wrapper_1f3mn_1",star:"_star_1f3mn_7",starSvgWrapper:"_starSvgWrapper_1f3mn_11"};import{getNumProps as m,getSingleChild as _}from"../../utils/framerControlProps.js";import{ControlType as S}from"framer";import{jsx as C}from"react/jsx-runtime";var w=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path class="star-path" fill="yellow" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,M=(t,e,r=800)=>{let a=[{transform:"scale(0.5)"},{transform:"scale(1)"}],s=[{opacity:0},{opacity:1},{opacity:0}],o={duration:r,fill:"forwards"};e.animate(s,o),t.animate(a,o)},x=(t=5,e=15)=>r=>{let a=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${a}px`,r.style.height=`${a}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},E=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(p.star),e.classList.add(p.starSvgWrapper),e.innerHTML=w,t.appendChild(e),[t,e]},b=(t,{numOfStars:e=10,duration:r=800,minSize:a=10,maxSize:s=20})=>{let o=[],l=[];for(let n=0;n<e;n++){let i=n*(r+n*10),[c,f]=E();l.push(c),t?.appendChild(c);let u=x(a,s);o.push(setInterval(()=>{u(c),M(c,f,r)},i))}return()=>{o?.forEach(n=>clearInterval(n)),l.forEach(n=>{t?.removeChild(n)})}},I=({children:t,minSize:e=20,maxSize:r=25,numOfStars:a=5,duration:s=600,color:o="#debd05"})=>{let l=g(null),n=y("(prefers-reduced-motion: reduce)");return v(()=>{let i=!n&&b(l?.current,{numOfStars:a,duration:s,minSize:e,maxSize:r});return()=>{typeof i=="function"&&i()}},[n,e,r,a,s]),C("div",{className:p.wrapper,style:{"--path-fill":o},ref:l,children:t})},R={children:_(),minSize:m(10,!0,2),maxSize:m(10,!0,2),numOfStars:m(20,!1,5,{min:1,max:100}),duration:m(.5,!1,.1,{min:.1,max:2}),color:{type:S.Color,defaultValue:"#debd05e"}};export{I as Sparkles,R as propsControls};
