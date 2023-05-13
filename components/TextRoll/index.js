import{ControlType as t}from"framer";import{AnimatePresence as v,motion as V}from"framer-motion";import{useEffect as w,useState as C}from"react";var u="352d8962a65652748e86e46b0f1a877d3ea4040e29f1107540fa5e3141e22888",S=`._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(u)){var e=document.createElement("style");e.id=u,e.textContent=S,document.head.appendChild(e)}})();var i={container:"_container_e9816_1",text:"_text_e9816_7"};import{jsx as a}from"react/jsx-runtime";var B=({text:e="Example Text, Goes Here",typography:d={fontWeight:400,fontSize:20,font:"Helvetica, sans-serif",color:"#555"},animation:m={fadeInOut:!0,delay:2e3,duration:1e3,offset:50,initialAnimation:!1,syncAnimations:!0}})=>{let{fontWeight:p,fontSize:c,font:y,color:x}=d,{fadeInOut:h,delay:g,duration:r,offset:l,initialAnimation:b,syncAnimations:A}=m,[n,s]=C(0),o=e.split(","),_=o[n];return w(()=>{let I=setInterval(()=>{let f=n+1;if(f<o.length)return s(f);s(0)},g);return()=>{clearInterval(I)}},[o]),a("div",{className:i.container,children:a(v,{initial:b,mode:A?"popLayout":"wait",children:a(V.div,{className:i.text,style:{fontFamily:y||"inherit",fontSize:c+"px",fontWeight:p,color:x},animate:{y:[l,0],opacity:1,dur:r},exit:{opacity:h?0:1,y:-l,dur:r},children:_},n)})})},E={text:{type:t.String,defaultValue:"Example Text, Created By, Comma Separating, These Words"},animation:{type:t.Object,Title:"Animation",controls:{duration:{type:t.Number,defaultValue:1e3,max:1e4,min:100,displayStepper:!0},delay:{type:t.Number,max:1e4,min:100,defaultValue:2e3},offset:{type:t.Number,defaultValue:50},fadeInOut:{title:"Fade In/Out",type:t.Boolean,defaultValue:!1},initialAnimation:{title:"Initial Anim",type:t.Boolean,defaultValue:!1},syncAnimations:{title:"Sync",type:t.Boolean,defaultValue:!0}}},typography:{type:t.Object,controls:{fontSize:{type:t.Number,defaultValue:20,min:1,max:100},fontWeight:{type:t.Number,defaultValue:400},font:{type:t.String,default:"Helvetica, sans-serif"},color:{type:t.Color,default:"#555"}}}};export{B as TextRoll,E as propControls};
