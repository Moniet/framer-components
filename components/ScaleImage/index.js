import{ControlType as e}from"framer";var r="1a135729e61e1f88fbdbf7b1728510e2f2814afc477701673ec1204eae0716be",g=`._img_1xnic_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1);
}

._container_1xnic_9 {
  width: 100%;
  height: 100%;
  border-radius: var(--br, 10px);
  overflow: hidden;
  transform: scale(1);
  transition: transform var(--dur, 0.3s) var(--easing);
  display: flex;
  flex-direction: var(--direction, column);
  gap: var(--gap);
}

._container_1xnic_9:hover ._img_1xnic_1 {
  transform: scale(var(--scale-img, 1.2));
}

._container_1xnic_9:hover {
  transform: scale(var(--scale-container, 0.9));
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var a=document.createElement("style");a.id=r,a.textContent=g,document.head.appendChild(a)}})();var t={img:"_img_1xnic_1",container:"_container_1xnic_9"};import{easingProps as f}from"../../utils/framerControlProps.js";import{jsx as n}from"react/jsx-runtime";var i="https://labs.moniet.dev/framer-components/public/france.jpeg",h=({image:a,alt:o="",easing:s="ease",dur:m=1,br:c=10,scaleImage:l=1.1,scaleContainer:u=.95,direction:p="column",gap:d=100})=>n("div",{className:t.container,style:{"--direction":p,"--gap":d+"px","--dur":m+"s","--easing":s,"--br":c+"px","--scale-img":l,"--scale-container":u},children:n("img",{className:t.img,src:a?.src||i,alt:o})}),y={direction:{type:e.Enum,options:["column","row"],optionTitles:["Column","Row"],defaultValue:"column"},gap:{type:e.Number,defaultValue:100,step:100,min:0,max:1e3},image:{type:e.ResponsiveImage,defaultValue:i},radius:{type:e.Number,defaultValue:10},scaleContainer:{type:e.Number,min:0,max:5,step:1,defaultValue:.95},scaleImage:{type:e.Number,min:0,max:5,step:.1,defaultValue:1.1},dur:{title:"Duration",type:e.Number,default:1,min:.1,max:2,step:.1,displayStepper:!0},easing:{...f}};export{h as ScaleImage,y as propsControls};
