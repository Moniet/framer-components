import{useEffect as y,useRef as _}from"react";import S from"../../hooks/useMediaQuery.js";var f="8cf38cc1c8773dd12c3278665d39d9ca32c4b846980556635d215c3119b19dbf",g=`._wrapper_qd4p2_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._star_qd4p2_7 {
  pointer-events: none;
}

._starSvgWrapper_qd4p2_11 {
  z-index: 1;
  transform-origin: center center;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=g,document.head.appendChild(t)}})();var p={wrapper:"_wrapper_qd4p2_1",star:"_star_qd4p2_7",starSvgWrapper:"_starSvgWrapper_qd4p2_11"};import{getNumProps as d,getSingleChild as M}from"../../utils/framerControlProps.js";import{ControlType as w}from"framer";import{jsx as L}from"react/jsx-runtime";var x=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path fill="var(--path-fill)" class="star-path" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,E=(t,e,r=800)=>{let o=[{transform:"scale(0.5)"},{transform:"scale(1)"}],n=[{opacity:0},{opacity:1},{opacity:0}],s={duration:r,fill:"forwards"};e.animate(n,s),t.animate(o,s)},b=(t=5,e=15)=>r=>{let o=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${o}px`,r.style.height=`${o}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},C=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(p.star),e.classList.add(p.startSvgWrapper),e.innerHTML=x,t.appendChild(e),[t,e]},T=(t,{numOfStars:e=10,duration:r=800,minSize:o=10,maxSize:n=20})=>{let s=r,m=3013,c=[],i=[];for(let a=0;a<e;a++){let u=a*(r+a*10),[l,h]=C();i.push(l),t?.appendChild(l);let v=b(o,n);c.push(setInterval(()=>{v(l),E(l,h,r)},u))}return()=>{c?.forEach(a=>clearInterval(a)),i.forEach(a=>{t?.removeChild(a)})}},W=({children:t,minSize:e=10,maxSize:r=20,numOfStars:o=5,duration:n=600,color:s="#debd05e"})=>{let m=_(null),c=S("(prefers-reduced-motion: reduce)");return y(()=>{let i=!c&&T(m?.current,{numOfStars:o,duration:n,minSize:e,maxSize:r});return()=>{typeof i=="function"&&i()}},[c,e,r,o,n]),L("div",{className:p.wrapper,style:{"--path-fill":s},ref:m,children:t})},$={children:M(),minSize:d(10,!0,2),maxSize:d(10,!0,2),numOfStars:d(20,!1,5,{min:1,max:100}),duration:d(.5,!1,.1,{min:.1,max:2}),color:{type:w.Color,defaultValue:"#debd05e"}};export{W as Sparkles,$ as propsControls};
