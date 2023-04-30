import{ControlType as e}from"framer";var r="6e2ca52519df207fec0b1caf33400272ec7bcfc2607e625dbba854669cca45ce",d=`._img_16xft_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=d,document.head.appendChild(t)}})();var a={img:"_img_16xft_1",container:"_container_16xft_9"};import{jsx as n}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",b=({image:t,alt:i="",easing:o="ease",dur:m=1,br:c=10,scaleImage:l=1.1,scaleContainer:u=.95})=>n("div",{className:a.container,style:{"--dur":m+"s","--easing":o,"--br":c+"px","--scale-img":l,"--scale-container":u},children:n("img",{className:a.img,src:t?.src||s,alt:i})}),_={image:{type:e.ResponsiveImage,defaultValue:s},radius:{type:e.Number,defaultValue:10},scaleContainer:{type:e.Number,min:0,max:5,step:1,defaultValue:.95},scaleImage:{type:e.Number,min:0,max:5,step:1,defaultValue:1.1},dur:{title:"Duration",type:e.Number,default:1,min:.1,max:2,step:.1,displayStepper:!0},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{b as ScaleImage,_ as propsControls};
