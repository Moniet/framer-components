import{ControlType as e}from"framer";var i="cfc9ef9b0bc22757d3efcc19c2666da6206670d3e559c497f1a8f0e24cf3b4ec",m=`._img_otic9_1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1);
}

._container_otic9_9 {
  width: var(--width, 200px);
  height: var(--height, 200px);
  border-radius: var(--br, 10px);
  overflow: hidden;
}

._container_otic9_9:hover ._img_otic9_1 {
  transform: scale(var(--scale, 1.2));
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=m,document.head.appendChild(t)}})();var a={img:"_img_otic9_1",container:"_container_otic9_9"};import{jsx as r}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",_=({image:t,alt:o="",easing:n="ease",dur:c=.3,width:p=200,height:d=200,br:l=10,scale:u=1.2})=>r("div",{className:a.container,style:{"--dur":c+"s","--easing":n,"--br":l+"px","--height":d+"px","--width":p+"px","--scale":u},children:r("img",{className:a.img,src:t?.src||s,alt:o})}),y={image:{type:e.ResponsiveImage,defaultValue:s},radius:{type:e.Number,defaultValue:10},dur:{title:"Duration",type:e.Number,default:.3,min:.1,max:2,step:.1,displayStepper:!0},width:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},height:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{_ as ScaleImage,y as propsControls};
