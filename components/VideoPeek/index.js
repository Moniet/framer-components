var s="7733d7b31698398e164648ec50ebd6a4b978a01785459977224cefcd7376494e",P=`._wrapper_lsi8t_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
  min-width: 50px;
  min-height: 50px;
}

._alignTop_lsi8t_9 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
    translateY(calc(-1 * (var(--height) + var(--margin))));
}

._alignBottom_lsi8t_17 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--height) + var(--margin)));
}

._videoWrapper_lsi8t_24 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
}

._video_lsi8t_24 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=P,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_lsi8t_1",alignTop:"_alignTop_lsi8t_9",alignBottom:"_alignBottom_lsi8t_17",videoWrapper:"_videoWrapper_lsi8t_24",video:"_video_lsi8t_24"};import{AnimatePresence as C,ControlType as r}from"framer";import{getNumProps as a,getSingleChild as S,boxShadowProps as B}from"../../utils/framerControlProps.js";import{ExampleChild as T}from"./ExampleChild.js";import{motion as N}from"framer-motion";import{useState as E}from"react";import{variants as I}from"./variants.js";import{jsx as o,jsxs as W}from"react/jsx-runtime";var V="https://labs.moniet.dev/framer-components/public/screen-rec.mov",H=({children:e,videoSrc:p=V,width:l=200,height:d=200,radius:m=10,margin:c=40,align:h,id:g="1234",shadows:u})=>{let v=(()=>{switch(h){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),f=u?.map(({x:i,y:b,blur:x,color:y,size:$})=>`${i}px ${b}px ${x} ${$} ${y}`).join(","),_=`${t.videoWrapper} ${v}`,[w,n]=E(!1);return W("div",{className:t.wrapper,onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1),children:[e||o(T,{}),o(C,{children:w&&o(N.div,{variants:I,exit:"fadeOut",animate:"fadeIn",initial:"initial",transition:{duration:.3},style:{boxShadow:f,"--border-radius":`${m}px`,"--width":`${parseInt(l+"")}px`,"--height":`${parseInt(d+"")}px`,"--margin":`${c}px`},className:_,children:o("video",{id:`fc-video${g}`,muted:!0,src:p,className:t.video,loop:!0,autoPlay:!0,onCanPlay:i=>{i.target.play()}})})})]})},L={videoSrc:{title:"Video",type:r.File,allowedFileTypes:["mov","mp4"]},width:a(200,!0,10,{min:100,max:500}),height:a(200,!0,10,{min:100,max:500}),margin:a(50,!0,10,{min:10,max:100}),align:{type:r.Enum,options:["top","bottom","left","right"],defaultValue:"top"},children:S(),shadows:{type:r.Array,control:B}};export{H as VideoPeek,L as propsControls};
