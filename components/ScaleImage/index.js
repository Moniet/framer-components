import{ControlType as a}from"framer";var r="150b089600c1c3184cdaa5a35adb205eab235a8c2434c9c808da16e785bae4ac",u=`._img_16xft_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var e=document.createElement("style");e.id=r,e.textContent=u,document.head.appendChild(e)}})();var t={img:"_img_16xft_1",container:"_container_16xft_9"};import{easingProps as p}from"../../utils/framerControlProps.js";import{jsx as n}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",h=({image:e,alt:i="",easing:o="ease",dur:m=1,radius:c=10,scaleImage:l=1.1,scaleContainer:d=.95})=>n("div",{className:t.container,style:{"--dur":m+"s","--easing":o,"--br":c+"px","--scale-img":l,"--scale-container":d},children:n("img",{className:t.img,src:e?.src||s,alt:i})}),v={image:{type:a.ResponsiveImage,defaultValue:s},radius:{type:a.Number,defaultValue:10},scaleContainer:{type:a.Number,min:0,max:5,step:1,defaultValue:.95},scaleImage:{type:a.Number,min:0,max:5,step:.1,defaultValue:1.1},dur:{title:"Duration",type:a.Number,default:1,min:.1,max:2,step:.1,displayStepper:!0},easing:{...p}};export{h as ScaleImage,v as propsControls};
