var p="a0d0e9c585810809e28bfb1e4d04d58738daaf5f0bc9c639afe47e288d8126c0",k=`._wrapper_1pk6m_1 {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
}

._alignTop_1pk6m_9 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
    translateY(calc(-1 * (var(--height) + var(--margin))));
}

._alignBottom_1pk6m_17 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--height) + var(--margin)));
}

._videoWrapper_1pk6m_24 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
}

._video_1pk6m_24 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=k,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_1pk6m_1",alignTop:"_alignTop_1pk6m_9",alignBottom:"_alignBottom_1pk6m_17",videoWrapper:"_videoWrapper_1pk6m_24",video:"_video_1pk6m_24"};import{AnimatePresence as P,ControlType as r}from"framer";import{getNumProps as a,getSingleChild as S,boxShadowProps as C}from"../../utils/framerControlProps.js";import{ExampleChild as B}from"./ExampleChild.js";import{motion as T}from"framer-motion";import{useState as N}from"react";import{variants as W}from"./variants.js";import{jsx as o,jsxs as I}from"react/jsx-runtime";var E="https://labs.moniet.dev/framer-components/public/screen-rec.mov",j=({children:e,videoSrc:s=E,w:m=200,h:d=200,radius:l=10,margin:c=40,align:h,id:g="1234",boxShadow:u})=>{let v=(()=>{switch(h){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),f=u?.map(({x:i,y:w,blur:x,color:y,size:$})=>`${i}px ${w}px ${x} ${$} ${y}`).join(","),_=`${t.videoWrapper} ${v}`,[b,n]=N(!1);return I("div",{className:t.wrapper,onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1),children:[e||o(B,{}),o(P,{children:b&&o(T.div,{variants:W,exit:"fadeOut",animate:"fadeIn",initial:"initial",transition:{duration:.3},style:{boxShadow:f,"--border-radius":`${l}px`,"--width":`${parseInt(m+"")}px`,"--height":`${parseInt(d+"")}px`,"--margin":`${c}px`},className:_,children:o("video",{id:`fc-video${g}`,muted:!0,src:s,className:t.video,loop:!0,autoPlay:!0,onCanPlay:i=>{i.target.play()}})})})]})},L={videoSrc:{title:"Video",type:r.File,allowedFileTypes:["mov","mp4"]},w:{...a(200,!0,10,{min:50,max:1e3}),title:"Width"},h:{...a(200,!0,10,{min:50,max:1e3}),title:"Height"},margin:a(50,!0,10,{min:10,max:100}),align:{type:r.Enum,options:["top","bottom"],defaultValue:"top"},children:S(),boxShadow:{type:r.Array,control:C}};export{j as VideoPeek,L as propsControls};
