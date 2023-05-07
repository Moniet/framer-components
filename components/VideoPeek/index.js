var i="71a72adcae0fc7d583a758e3fbd1f2234859e1219a1a892e0ae0c98e1c862de1",h=`._container_1xoyh_1 {
  position: relative;
}

._alignTop_1xoyh_5 {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-1 * var(--margin)));
}

._alignBottom_1xoyh_12 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(var(--margin));
}

._video_1xoyh_19 {
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=h,document.head.appendChild(e)}})();var t={container:"_container_1xoyh_1",alignTop:"_alignTop_1xoyh_5",alignBottom:"_alignBottom_1xoyh_12",video:"_video_1xoyh_19"};import{ControlType as r}from"framer";import{getNumProps as o,getSingleChild as g}from"../../utils/framerControlProps.js";import{jsx as u,jsxs as _}from"react/jsx-runtime";var b=({children:e,videoSrc:a,width:n=200,height:s=200,radius:d=10,margin:l=40,align:m})=>{let p=(()=>{switch(m){case"top":return t.alignTop;case"bottom":return t.alignBottom;default:return t.top}})(),c=`${t.video} ${p}`;return _("div",{className:t.wrapper,children:[e,u("video",{style:{"--border-radius":`${d}px`,"--margin":`${l}px`},src:a,width:n,height:s,className:c})]})},w={videoSrc:{title:"Video",type:r.File,allowedFileTypes:["mov","mp4"]},width:o(250,!0,10,{min:100,max:500}),height:o(250,!0,10,{min:100,max:500}),margin:o(40,!0,10,{min:10,max:100}),align:{type:r.Enum,options:["top","bottom","left","right"]},children:g()};export{b as VideoPeek,w as propsControls};
