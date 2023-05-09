var s="f5758e9d8bf77cd3c683a553573a8a21d11e5429639f0c5687803895f2f84384",$=`._wrapper_1acfr_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._alignTop_1acfr_7 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
    translateY(calc(-1 * (var(--height) + var(--margin))));
}

._alignBottom_1acfr_15 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--height) + var(--margin)));
}

._videoWrapper_1acfr_22 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
}

._video_1acfr_22 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=$,document.head.appendChild(e)}})();var t={wrapper:"_wrapper_1acfr_1",alignTop:"_alignTop_1acfr_7",alignBottom:"_alignBottom_1acfr_15",videoWrapper:"_videoWrapper_1acfr_22",video:"_video_1acfr_22"};import{AnimatePresence as P,ControlType as a}from"framer";import{getNumProps as i,getSingleChild as C,boxShadowProps as S}from"../../utils/framerControlProps.js";import{ExampleChild as B}from"./ExampleChild.js";import{motion as T}from"framer-motion";import{useState as N}from"react";import{variants as E}from"./variants.js";import{jsx as o,jsxs as A}from"react/jsx-runtime";var W="https://labs.moniet.dev/framer-components/public/screen-rec.mov",H=({children:e,videoSrc:d=W,width:p=200,height:m=200,radius:l=10,margin:c=40,align:f,id:h="1234",shadows:g})=>{let v=(()=>{switch(f){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),u=g?.map(({x:r,y:w,blur:b,color:x,size:y})=>`${r}px ${w}px ${b} ${y} ${x}`).join(","),_=`${t.videoWrapper} ${v}`,[R,n]=N(!1);return A("div",{className:t.wrapper,onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1),children:[e||o(B,{}),o(P,{children:o(T.div,{variants:E,exit:"fadeOut",animate:"fadeIn",initial:"initial",transition:{duration:.3},style:{boxShadow:u,"--border-radius":`${l}px`,"--width":`${p}px`,"--height":`${m}px`,"--margin":`${c}px`},className:_,children:o("video",{id:`fc-video${h}`,muted:!0,src:d,className:t.video,loop:!0,autoPlay:!0,onCanPlay:r=>{r.target.play()}})})})]})},L={videoSrc:{title:"Video",type:a.File,allowedFileTypes:["mov","mp4"]},width:i(250,!0,10,{min:100,max:500}),height:i(250,!0,10,{min:100,max:500}),margin:i(40,!0,10,{min:10,max:100}),align:{type:a.Enum,options:["top","bottom","left","right"]},children:C(),shadows:{type:a.Array,control:S}};export{H as VideoPeek,L as propsControls};
