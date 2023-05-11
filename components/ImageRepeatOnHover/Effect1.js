var n="5fe389d033038c8d5d9ddb92e33665d45d63e136c1885ebf854e1a57c5174a6e",r=`._img_owfn7_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=r,document.head.appendChild(t)}})();var o={img:"_img_owfn7_1"};import{Fragment as c,jsx as s}from"react/jsx-runtime";var i=Array(3).fill("-"),f=({isHovering:t=!1,image:a})=>s(c,{children:i.map((d,e)=>s("img",{className:o.img,alt:a?.alt||"",src:a?.src||"https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp",style:{"--z-index":e,"--delay":t?Math.sin(e/10*Math.PI/2).toFixed(2)+"s":Math.sin((i.length-e-1)/10*Math.PI/2).toFixed(2)+"s","--clip-path":t?"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","--scale":t?1:0}},e))});export{f as Effect1};
