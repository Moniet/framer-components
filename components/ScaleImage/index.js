import{ControlType as e}from"framer";var r="40374958f40ba2f71d0eac42f7f2e6e29688c789feb4e792ce11531f034a5b9f",g=`._img_1k470_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1);
}

._container_1k470_9 {
  width: var(--width, 200px);
  height: var(--height, 200px);
  border-radius: var(--br, 10px);
  overflow: hidden;
  transform: scale(1);
  transition: transform var(--dur, 0.3s) var(--easing);
}

._container_1k470_9:hover ._img_1k470_1 {
  transform: scale(var(--scale-img, 1.2));
}

._container_1k470_9:hover {
  transform: scale(var(--scale-container, 0.9));
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=g,document.head.appendChild(t)}})();var a={img:"_img_1k470_1",container:"_container_1k470_9"};import{jsx as n}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",_=({image:t,alt:i="",easing:o="ease",dur:m=.3,width:l=200,height:u=200,br:p=10,scaleImage:c=1.1,scaleContainer:d=.95})=>n("div",{className:a.container,style:{"--dur":m+"s","--easing":o,"--br":p+"px","--height":u+"px","--width":l+"px","--scale-img":c,"--scale-container":d},children:n("img",{className:a.img,src:t?.src||s,alt:i})}),v={image:{type:e.ResponsiveImage,defaultValue:s},radius:{type:e.Number,defaultValue:10},scaleContainer:{type:e.Number,min:0,max:5,step:1,defaultValue:.95},scaleImage:{type:e.Number,min:0,max:5,step:1,defaultValue:1.1},dur:{title:"Duration",type:e.Number,default:.3,min:.1,max:2,step:.1,displayStepper:!0},width:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},height:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{_ as ScaleImage,v as propsControls};
