import{ControlType as e}from"framer";import{AnimatePresence as v,motion as V}from"framer-motion";import{useEffect as w,useState as C}from"react";var u="1a8e02ae73c745e6e5e151258ee898e1e7bbf1eb8d6fb328f5a3de2355a004d7",S=`._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(u)){var t=document.createElement("style");t.id=u,t.textContent=S,document.head.appendChild(t)}})();var i={container:"_container_e9816_1",text:"_text_e9816_7"};import{jsx as a}from"react/jsx-runtime";var B=({text:t="Example Text, Goes Here",typography:d={fontWeight:400,fontSize:20,font:"Helvetica, sans-serif",color:"#555"},animation:m={fadeInOut:!0,delay:2e3,duration:1e3,offset:50,initialAnimation:!1,syncAnimations:!0}})=>{let{fontWeight:p,fontSize:c,font:y,color:x}=d,{fadeInOut:b,delay:h,duration:r,offset:l,initialAnimation:g,syncAnimations:A}=m,[n,s]=C(0),o=t.split(","),_=o[n];return w(()=>{let I=setInterval(()=>{let f=n+1;if(f<o.length)return s(f);s(0)},h);return()=>{clearInterval(I)}},[o]),a("div",{className:i.container,children:a(v,{initial:g,mode:A?"popLayout":"wait",children:a(V.div,{className:i.text,style:{fontFamily:y||"inherit",fontSize:c+"px",fontWeight:p,color:x},animate:{y:[l,0],opacity:1,dur:r},exit:{opacity:b?0:1,y:-l,dur:r},children:_},n)})})},E={text:{type:e.String,defaultValue:"Example Text, Created By, Comma Separating, These Words"},animation:{type:e.Object,Title:"Animation",controls:{duration:{type:e.Number,defaultValue:1e3,max:1e4,min:100,displayStepper:!0},delay:{type:e.Number,max:1e4,min:100,defaultValue:2e3},offset:{type:e.Number,defaultValue:50},fadeInOut:{title:"Fade In/Out",type:e.Boolean,defaultValue:!1},initialAnimation:{title:"Initial Anim",type:e.Boolean,defaultValue:!1},syncAnimations:{title:"Sync",type:e.Boolean,defaultValue:!0}}},typography:{type:e.Object,controls:{fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}}};export{B as TextRoll,E as propControls};
