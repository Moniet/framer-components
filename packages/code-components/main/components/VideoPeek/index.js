var s="13154c3fde6ec3e6db5d7f709dc7fb82ea97011c98ad5707e5738b16a445580a",j=`._wrapper_ooiej_1 {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
}

._alignTop_ooiej_9 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
    translateY(calc(-1 * (var(--height) + var(--margin))));
}

._alignBottom_ooiej_17 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--height) + var(--margin)));
}

._videoWrapper_ooiej_24 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
  pointer-events: none;
}

._video_ooiej_24 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=j,document.head.appendChild(e)}})();var o={wrapper:"_wrapper_ooiej_1",alignTop:"_alignTop_ooiej_9",alignBottom:"_alignBottom_ooiej_17",videoWrapper:"_videoWrapper_ooiej_24",video:"_video_ooiej_24"};import{AnimatePresence as P,ControlType as r}from"framer";import{getNumProps as a,getSingleChild as S,boxShadowProps as C}from"../../utils/framerControlProps.js";import{ExampleChild as B}from"./ExampleChild.js";import{motion as T}from"framer-motion";import{useState as N}from"react";import{variants as W}from"./variants.js";import{jsx as t,jsxs as I}from"react/jsx-runtime";var E="https://labs.moniet.dev/framer-components/public/screen-rec.mov",k=({children:e,videoSrc:p=E,w:d=200,h:l=200,radius:m=10,margin:c=40,align:h,id:g="1234",boxShadow:v})=>{let u=(()=>{switch(h){case"top":return o.alignTop;case"bottom":return o.alignBottom;default:return o.top}})(),f=v?.map(({x:i,y:w,blur:x,color:y,size:$})=>`${i}px ${w}px ${x} ${$} ${y}`).join(","),_=`${o.videoWrapper} ${u}`,[b,n]=N(!1);return I("div",{className:o.wrapper,onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1),children:[e||t(B,{}),t(P,{children:b&&t(T.div,{variants:W,exit:"fadeOut",animate:"fadeIn",initial:"initial",transition:{duration:.3},style:{boxShadow:f,"--border-radius":`${m}px`,"--width":`${parseInt(d+"")}px`,"--height":`${parseInt(l+"")}px`,"--margin":`${c}px`},className:_,children:t("video",{id:`fc-video${g}`,muted:!0,src:p,className:o.video,loop:!0,autoPlay:!0,onCanPlay:i=>{i.target.play()}})})})]})},L={videoSrc:{title:"Video",type:r.File,allowedFileTypes:["mov","mp4"]},w:{...a(200,!0,10,{min:50,max:1e3}),title:"Width"},h:{...a(200,!0,10,{min:50,max:1e3}),title:"Height"},margin:a(50,!0,10,{min:10,max:100}),align:{type:r.Enum,options:["top","bottom"],defaultValue:"top"},children:S(),boxShadow:{type:r.Array,control:C}};export{k as VideoPeek,L as propsControls};
