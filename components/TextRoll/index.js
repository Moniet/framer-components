import{ControlType as t}from"framer";import{AnimatePresence as v,motion as V}from"framer-motion";import{useEffect as w,useState as C}from"react";var f="c15c3b66921a00b92d3b4aebfdf5a000d2ec06752dc25198bc4d9c88baad351c",S=`._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(f)){var e=document.createElement("style");e.id=f,e.textContent=S,document.head.appendChild(e)}})();var i={container:"_container_e9816_1",text:"_text_e9816_7"};import{jsx as a}from"react/jsx-runtime";var B=({text:e="Example Text, Goes Here",typography:u={fontWeight:400,fontSize:20,font:"Helvetica, sans-serif",color:"#555"},animation:c={fadeInOut:!0,delay:2e3,duration:1e3,offset:50,initialAnimation:!1,syncAnimations:!0}})=>{let{fontWeight:m,fontSize:p,font:y,color:x}=u,{fadeInOut:b,delay:h,duration:r,offset:l,initialAnimation:g,syncAnimations:A}=c,[n,s]=C(0),o=e.split(","),_=o[n];return w(()=>{let I=setInterval(()=>{let d=n+1;if(d<o.length)return s(d);s(0)},h);return()=>{clearInterval(I)}},[o]),a("div",{className:i.container,children:a(v,{initial:g,mode:A?"popLayout":"wait",children:a(V.div,{className:i.text,style:{fontFamily:y||"inherit",fontSize:p+"px",fontWeight:m,color:x},animate:{y:[l,0],opacity:1,dur:r},exit:{opacity:b?0:1,y:-l,dur:r},children:_},n)})})},E={text:{type:t.String,defaultValue:"Example Text, Created By, Comma Separating, These Words"},animation:{type:t.Object,Title:"Animation",controls:{duration:{type:t.Number,defaultValue:1e3,max:1e4,min:100,displayStepper:!0},delay:{type:t.Number,max:1e4,min:100,defaultValue:2e3},offset:{type:t.Number,defaultValue:50},fadeInOut:{title:"Fade In/Out",type:t.Boolean,defaultValue:!1},initialAnimation:{title:"Initial Anim",type:t.Boolean,defaultValue:!1},syncAnimations:{title:"Sync",type:t.Boolean,defaultValue:!0}}},typography:{type:t.Object,controls:{fontSize:{type:t.Number,defaultValue:20,min:1,max:100},fontWeight:{type:t.Number,defaultValue:400},font:{type:t.String,default:"Helvetica, sans-serif"},color:{type:t.Color,default:"#555"}}}};export{B as TextRoll,E as propControls};
