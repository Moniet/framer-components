import{useEffect as _,useRef as g}from"react";import S from"../../hooks/useMediaQuery.js";var f="2bc0ef1fe4a12b7603518d7f89b4b670159a524bbbc66cbed7117d572c8b7afa",y=`._wrapper_17qcm_1 {
  position: relative;
}

._star_17qcm_5 {
  pointer-events: none;
}

._starSvgWrapper_17qcm_9 {
  z-index: 1;
  transform-origin: center center;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=y,document.head.appendChild(t)}})();var p={wrapper:"_wrapper_17qcm_1",star:"_star_17qcm_5",starSvgWrapper:"_starSvgWrapper_17qcm_9"};import{getNumProps as m,getSingleChild as M}from"../../utils/framerControlProps.js";import{ControlType as b}from"framer";import{jsx as L}from"react/jsx-runtime";var w=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path fill="var(--path-fill)" class="star-path" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`,E=(t,e,r=800)=>{let a=[{transform:"scale(0.5)"},{transform:"scale(1)"}],n=[{opacity:0},{opacity:1},{opacity:0}],s={duration:r,fill:"forwards"};e.animate(n,s),t.animate(a,s)},x=(t=5,e=15)=>r=>{let a=Math.floor(Math.max(Math.random()*e,t));r.style.width=`${a}px`,r.style.height=`${a}px`,r.style.top=`${Math.floor(Math.random()*70)}%`,r.style.left=`${Math.floor(Math.random()*100)}%`},C=()=>{let t=document.createElement("div"),e=document.createElement("div");return t.style.position="absolute",t.classList.add(p.star),e.classList.add(p.startSvgWrapper),e.innerHTML=w,t.appendChild(e),[t,e]},T=(t,{numOfStars:e=10,duration:r=800,minSize:a=10,maxSize:n=20})=>{let s=r,d=3013,c=[],l=[];for(let o=0;o<e;o++){let u=o*(r+o*10),[i,h]=C();l.push(i),t?.appendChild(i);let v=x(a,n);c.push(setInterval(()=>{v(i),E(i,h,r)},u))}return()=>{c?.forEach(o=>clearInterval(o)),l.forEach(o=>{t?.removeChild(o)})}},$=({children:t,minSize:e=10,maxSize:r=20,numOfStars:a=5,duration:n=600,color:s="#debd05e"})=>{let d=g(null),c=S("(prefers-reduced-motion: reduce)");return _(()=>{let l=!c&&T(d?.current,{numOfStars:a,duration:n,minSize:e,maxSize:r});return()=>{typeof l=="function"&&l()}},[c,e,r,a,n]),L("div",{className:p.wrapper,style:{"--path-fill":s},ref:d,children:t})},A={children:M(),minSize:m(10,!0,2),maxSize:m(10,!0,2),numOfStars:m(20,!1,5,{min:1,max:100}),duration:m(20,!1,5),color:{type:b.Color}};export{$ as Sparkles,A as propsControls};
