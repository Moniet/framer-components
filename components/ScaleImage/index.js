import{ControlType as e}from"framer";var r="06016b622e52b9f902788aa37e2834a675f2e39dff396fd853b061bebcc33f49",c=`._img_horsk_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=c,document.head.appendChild(t)}})();var a={img:"_img_horsk_1",container:"_container_horsk_9"};import{jsx as s}from"react/jsx-runtime";var i="https://labs.moniet.dev/framer-components/public/france.jpeg",_=({image:t,alt:o="",easing:n="ease",dur:p=.3,width:d="200px",height:l="200px",br:u=10,scale:m=1.2})=>s("div",{className:a.container,style:{"--dur":p+"s","--easing":n,"--br":u+"px","--height":l+"px","--width":d+"px","--scale":m},children:s("img",{className:a.img,src:t?.src||i,alt:o})}),b={image:{type:e.ResponsiveImage,defaultValue:i},radius:{type:e.Number,defaultValue:10},dur:{title:"Duration",type:e.Number,default:.3,min:.1,max:2,step:.1,displayStepper:!0},width:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},height:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{_ as ScaleImage,b as propsControls};
