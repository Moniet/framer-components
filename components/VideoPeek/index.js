var p="729daded2d243e2067f1652e9ff3c070e1687851fd878057a0a7f18696894399",P=`._wrapper_1fr6e_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._alignTop_1fr6e_7 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
    translateY(calc(-1 * (var(--width) + var(--margin))));
}

._alignBottom_1fr6e_15 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--width) + var(--margin)));
}

._videoWrapper_1fr6e_22 {
  width: fit-content;
  height: fit-content;
  border-radius: var(--border-radius);
  overflow: hidden;
}

._video_1fr6e_22 {
  width: var(--width);
  height: var(--height);
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=P,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_1fr6e_1",alignTop:"_alignTop_1fr6e_7",alignBottom:"_alignBottom_1fr6e_15",videoWrapper:"_videoWrapper_1fr6e_22",video:"_video_1fr6e_22"};import{AnimatePresence as C,ControlType as i}from"framer";import{getNumProps as a,getSingleChild as S,boxShadowProps as B}from"../../utils/framerControlProps.js";import{ExampleChild as T}from"./ExampleChild.js";import{motion as N}from"framer-motion";import{useState as E}from"react";import{variants as R}from"./variants.js";import{jsx as o,jsxs as A}from"react/jsx-runtime";var W="https://labs.moniet.dev/framer-components/public/screen-rec.mov",H=({children:e,videoSrc:m=W,width:n=200,height:s=200,radius:l=10,margin:f=40,align:c,id:h="1234",shadows:v})=>{let g=(()=>{switch(c){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),u=v?.map(({x:r,y:b,blur:x,color:y,size:$})=>`${r}px ${b}px ${x} ${$} ${y}`).join(","),_=`${t.video} ${g}`,[w,d]=E(!1);return A("div",{className:t.wrapper,onMouseOver:()=>d(!0),onMouseLeave:()=>d(!1),children:[e||o(T,{}),o(C,{children:w&&o(N.div,{variants:R,exit:"fadeOut",animate:"fadeIn",initial:"initial",transition:{duration:.3},style:{boxShadow:u,"--border-radius":`${l}px`},className:t.videoWrapper,children:o("video",{id:`fc-video${h}`,muted:!0,style:{"--margin":`${f}px`,"--width":`${n}px`,"--height":`${s}px`},src:m,width:n,height:s,className:_,loop:!0,autoPlay:!0,onCanPlay:r=>{r.target.play()}})})})]})},L={videoSrc:{title:"Video",type:i.File,allowedFileTypes:["mov","mp4"]},width:a(250,!0,10,{min:100,max:500}),height:a(250,!0,10,{min:100,max:500}),margin:a(40,!0,10,{min:10,max:100}),align:{type:i.Enum,options:["top","bottom","left","right"]},children:S(),shadows:{type:i.Array,control:B}};export{H as VideoPeek,L as propsControls};
