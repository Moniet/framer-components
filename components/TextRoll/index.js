import{ControlType as e}from"framer";import{AnimatePresence as v,motion as V}from"framer-motion";import{useEffect as w,useState as C}from"react";var d="d5fee233366eeea6dd2181edbef4cf7f3899693e5f89e614c0c53ee222684b8f",S=`._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(d)){var t=document.createElement("style");t.id=d,t.textContent=S,document.head.appendChild(t)}})();var i={container:"_container_e9816_1",text:"_text_e9816_7"};import{jsx as a}from"react/jsx-runtime";var B=({text:t="Example Text, Goes Here",typography:u={fontWeight:400,fontSize:20,font:"Helvetica, sans-serif",color:"#555"},animation:m={fadeInOut:!0,delay:2e3,duration:1e3,offset:50,initialAnimation:!1,syncAnimations:!0}})=>{let{fontWeight:c,fontSize:p,font:y,color:x}=u,{fadeInOut:h,delay:b,duration:r,offset:l,initialAnimation:g,syncAnimations:A}=m,[n,s]=C(0),o=t.split(","),_=o[n];return w(()=>{let I=setInterval(()=>{let f=n+1;if(f<o.length)return s(f);s(0)},b);return()=>{clearInterval(I)}},[o]),a("div",{className:i.container,children:a(v,{initial:g,mode:A?"popLayout":"wait",children:a(V.div,{className:i.text,style:{fontFamily:y||"inherit",fontSize:p+"px",fontWeight:c,color:x},animate:{y:[l,0],opacity:1,dur:r},exit:{opacity:h?0:1,y:-l,dur:r},children:_},n)})})},E={text:{type:e.String,defaultValue:"Example Text, Created By, Comma Separating, These Words"},animation:{type:e.Object,Title:"Animation",controls:{duration:{type:e.Number,defaultValue:1e3,max:1e4,min:100,displayStepper:!0},delay:{type:e.Number,max:1e4,min:100,defaultValue:2e3},offset:{type:e.Number,defaultValue:50},fadeInOut:{title:"Fade In/Out",type:e.Boolean,defaultValue:!1},initialAnimation:{title:"Initial Anim",type:e.Boolean,defaultValue:!1},syncAnimations:{title:"Sync",type:e.Boolean,defaultValue:!0}}},typography:{type:e.Object,controls:{fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}}};export{B as TextRoll,E as propControls};
