import{ControlType as t}from"framer";var a="4667f14b4ce0c1ac7400d84c008798815b5da81652cd8b45447dcb46f1623d2c",u=`._img_16xft_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1);
}

._container_16xft_9 {
  width: 100%;
  height: 100%;
  border-radius: var(--br, 10px);
  overflow: hidden;
  transform: scale(1);
  transition: transform var(--dur, 0.3s) var(--easing);
}

._container_16xft_9:hover ._img_16xft_1 {
  transform: scale(var(--scale-img, 1.2));
}

._container_16xft_9:hover {
  transform: scale(var(--scale-container, 0.9));
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=u,document.head.appendChild(e)}})();var r={img:"_img_16xft_1",container:"_container_16xft_9"};import{easingProps as p}from"../../utils/framerControlProps.js";import{jsx as n}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",h=({image:e,alt:i="",easing:o="ease",dur:m=1,br:c=10,scaleImage:l=1.1,scaleContainer:d=.95})=>n("div",{className:r.container,style:{"--dur":m+"s","--easing":o,"--br":c+"px","--scale-img":l,"--scale-container":d},children:n("img",{className:r.img,src:e?.src||s,alt:i})}),v={image:{type:t.ResponsiveImage,defaultValue:s},radius:{type:t.Number,defaultValue:10},scaleContainer:{type:t.Number,min:0,max:5,step:1,defaultValue:.95},scaleImage:{type:t.Number,min:0,max:5,step:.1,defaultValue:1.1},dur:{title:"Duration",type:t.Number,default:1,min:.1,max:2,step:.1,displayStepper:!0},easing:{...p}};export{h as ScaleImage,v as propsControls};
