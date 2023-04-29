import{ControlType as e}from"framer";var r="dd5ccd1fab7bc01461d4b92ebde00a51465b5c852b8b9aeba2a761d5a12e280a",m=`._img_horsk_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=m,document.head.appendChild(t)}})();var a={img:"_img_horsk_1",container:"_container_horsk_9"};import{jsx as s}from"react/jsx-runtime";var i="https://labs.moniet.dev/framer-components/public/france.png",b=({image:t,alt:o="",easing:n="ease",dur:d=.3,width:p="200px",height:l="200px",br:u=10,scale:c=1.2})=>s("div",{className:a.container,style:{"--dur":d,"--easing":n,"--br":u,"--height":l+"px","--width":p+"px","--scale":c},children:s("img",{className:a.img,src:t?.src||i,alt:o})}),_={image:{type:e.ResponsiveImage,defaultValue:i},radius:{type:e.Number,defaultValue:10},dur:{title:"Duration",type:e.Number,default:.3},width:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},height:{type:e.Number,displayStepper:!0,step:10,defaultValue:200},easing:{type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"}};export{b as ScaleImage,_ as propsControls};
