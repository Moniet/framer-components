import{ControlType as r}from"framer";var a="48383ef6f0266e8664a4699afda3bbe2d2ba4050d40c01a96ff73019128df51c",p=`._img_horsk_1 {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1.2);
}

._container_horsk_9 {
  width: var(--width, 200px);
  height: var(--height, 200px);
  border-radius: var(--br, 10px);
  overflow: hidden;
}

._container_horsk_9:hover ._img_horsk_1 {
  transform: scale(var(--scale, 1.2));
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=p,document.head.appendChild(e)}})();var t={img:"_img_horsk_1",container:"_container_horsk_9"};import{jsx as o}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.png",u=({image:e,alt:n="",easing:i="ease",dur:d=.3,width:c="200px",height:m="200px",br:l=10,scale:h=1.2})=>o("div",{className:t.container,style:{"--dur":d,"--easing":i,"--br":l,"--height":m,"--width":c,"--scale":h},children:o("img",{className:t.img,src:e?.src||s,alt:n})}),v={image:{type:r.ResponsiveImage,defaultValue:s},radius:{type:r.Number,defaultValue:10}};export{u as ScaleImage,v as propsControls};
