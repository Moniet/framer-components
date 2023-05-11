import{useEffect as g,useRef as y}from"react";import S from"../../hooks/useMediaQuery.js";var f="bb5431ad1ef5b9bec1d34c9deb2754be37e312c18c64f0cf9f57d0fb9df43aea",v=`._wrapper_1isad_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._star_1isad_7 {
  pointer-events: none;
}

._start_1isad_11 svg {
  fill: var(--path-fill);
}

._starSvgWrapper_1isad_15 {
  z-index: 1;
  transform-origin: center center;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=v,document.head.appendChild(t)}})();var d={wrapper:"_wrapper_1isad_1",star:"_star_1isad_7",start:"_start_1isad_11",starSvgWrapper:"_starSvgWrapper_1isad_15"};import{getNumProps as p,getSingleChild as M}from"../../utils/framerControlProps.js";import{ControlType as w}from"framer";import{jsx as L}from"react/jsx-runtime";var b=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path class="star-path" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,x=(t,e,r=800)=>{let a=[{transform:"scale(0.5)"},{transform:"scale(1)"}],n=[{opacity:0},{opacity:1},{opacity:0}],s={duration:r,fill:"forwards"};e.animate(n,s),t.animate(a,s)},E=(t=5,e=15)=>r=>{let a=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${a}px`,r.style.height=`${a}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},C=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(d.star),e.classList.add(d.starSvgWrapper),e.innerHTML=b,t.appendChild(e),[t,e]},T=(t,{numOfStars:e=10,duration:r=800,minSize:a=10,maxSize:n=20})=>{let s=r,m=3013,i=[],l=[];for(let o=0;o<e;o++){let u=o*(r+o*10),[c,h]=C();l.push(c),t?.appendChild(c);let _=E(a,n);i.push(setInterval(()=>{_(c),x(c,h,r)},u))}return()=>{i?.forEach(o=>clearInterval(o)),l.forEach(o=>{t?.removeChild(o)})}},$=({children:t,minSize:e=10,maxSize:r=20,numOfStars:a=5,duration:n=600,color:s="#debd05e"})=>{let m=y(null),i=S("(prefers-reduced-motion: reduce)");return g(()=>{let l=!i&&T(m?.current,{numOfStars:a,duration:n,minSize:e,maxSize:r});return()=>{typeof l=="function"&&l()}},[i,e,r,a,n]),L("div",{className:d.wrapper,style:{"--path-fill":s},ref:m,children:t})},A={children:M(),minSize:p(10,!0,2),maxSize:p(10,!0,2),numOfStars:p(20,!1,5,{min:1,max:100}),duration:p(.5,!1,.1,{min:.1,max:2}),color:{type:w.Color,defaultValue:"#debd05e"}};export{$ as Sparkles,A as propsControls};
