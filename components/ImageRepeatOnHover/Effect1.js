var o="d6b25c759413090be65d5b336d737519b8af8dccd3dadff248e5c4c4f7938345",l=`._img_9x5zw_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-index);
  transition: clip-path 0.8s ease, transform 0.8s ease;
  transition-delay: var(--delay);
  clip-path: var(--clip-path);
  transform: scaleX(var(--scale));
  transform-origin: left;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=l,document.head.appendChild(t)}})();var n={img:"_img_9x5zw_1"};import{Fragment as c,jsx as i}from"react/jsx-runtime";var s=Array(3).fill("-"),f=({isHovering:t=!1,image:a})=>i(c,{children:s.map((d,e)=>i("img",{className:n.img,alt:a?.alt||"",src:a?.src||"https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp",style:{"--z-index":e,"--delay":t?Math.sin(e/10*Math.PI/2).toFixed(2)+"s":Math.sin((s.length-e-1)/10*Math.PI/2).toFixed(2)+"s","--clip-path":t?"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)","--scale":t?1:0}},e))});export{f as Effect1};
