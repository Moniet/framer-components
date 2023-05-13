var n="783995e43ea4415d90b9212100d5ea1d011bff2544df333fa2d1789049768191",r=`._img_owfn7_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-index);
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
  transition: clip-path var(--dur), transform var(--dur) ease;
  transition-delay: var(--delay);
  clip-path: var(--clip-path);
  transform: scaleX(var(--scale));
  transform-origin: left;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=r,document.head.appendChild(t)}})();var o={img:"_img_owfn7_1"};import{Fragment as l,jsx as s}from"react/jsx-runtime";var i=Array(3).fill("-"),f=({isHovering:t=!1,image:e})=>s(l,{children:i.map((d,a)=>s("img",{className:o.img,alt:e?.alt||"",src:e?.src||"https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp",style:{"--z-index":a,"--delay":t?Math.sin(a/10*Math.PI/2).toFixed(2)+"s":Math.sin((i.length-a-1)/10*Math.PI/2).toFixed(2)+"s","--clip-path":t?"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","--scale":t?1:0}},a))});export{f as Effect1};
