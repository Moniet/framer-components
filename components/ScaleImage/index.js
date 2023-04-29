import{ControlType as e}from"framer";var r="50915761890087c6fa4d5313f141c9c75cb8a49158e01fc62972bc3b27860ebb",m=`._img_q3doa_1 {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--dur, 0.3s) var(--easing);
  transform: scale(1.2);
}

._container_q3doa_9 {
  width: var(--width, 200px);
  height: var(--height, 200px);
  border-radius: var(--br, 10px);
  overflow: hidden;
}

._container_q3doa_9:hover > ._img_q3doa_1 {
  transform: scale(var(--scale, 1.2));
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=m,document.head.appendChild(t)}})();var a={img:"_img_q3doa_1",container:"_container_q3doa_9"};import{jsx as i}from"react/jsx-runtime";var s="https://labs.moniet.dev/framer-components/public/france.jpeg",_=({image:t,alt:o="",easing:n="ease",dur:d=.3,width:p=200,height:l=200,br:u=10,scale:c=1.2})=>i("div",{className:a.container,style:{"--dur":d+"s","--easing":n,"--br":u+"px","--height":l+"px","--width":p+"px","--scale":c},children:i("img",{className:a.img,src:t?.src||s,alt:o})}),b={image:{type:e.ResponsiveImage,defaultValue:s},radius:{type:e.Number,defaultValue:10},dur:{title:"Duration",type:e.Number,default:.3,min:.1,max:2,step:.1,displayStepper:!0},width:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},height:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{_ as ScaleImage,b as propsControls};
