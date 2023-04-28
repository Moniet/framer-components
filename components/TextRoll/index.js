import{ControlType as t}from"framer";import{AnimatePresence as m,motion as p}from"framer-motion";import{useEffect as c,useState as y}from"react";var s="75ba2dcd5807987a9e9f8e8ab23d23720e5c2d214a1783e28f8067a6d624c912",u=`._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=u,document.head.appendChild(e)}})();var i={container:"_container_e9816_1",text:"_text_e9816_7"};import{jsx as a}from"react/jsx-runtime";var S=({text:e="Example Text, Goes Here",typography:x={fontWeight:400,fontSize:20,font:"Helvetica, sans-serif",color:"#555"},animation:h={fadeInOut:!0,delay:2e3,duration:1e3,offset:50,initialAnimation:!1,syncAnimations:!0}})=>{let[n,r]=y(0),o=e.split(","),d=o[n];return c(()=>{let f=setInterval(()=>{let l=n+1;if(l<o.length)return r(l);r(0)},delay);return()=>{clearInterval(f)}},[o]),a("div",{className:i.container,children:a(m,{initial:initialAnimation,mode:syncAnimations?"popLayout":"wait",children:a(p.div,{className:i.text,style:{fontFamily:font||"inherit",fontSize:fontSize+"px",fontWeight,color},animate:{y:[offset,0],opacity:1,dur:duration},exit:{opacity:fadeInOut?0:1,y:-offset,dur:duration},children:d},n)})})},v={text:{type:t.String,defaultValue:"Example Text, Created By, Comma Separating, These Words"},animation:{type:t.Object,Title:"Animation",controls:{duration:{type:t.Number,defaultValue:1e3,max:1e4,min:100,displayStepper:!0},delay:{type:t.Number,max:1e4,min:100,defaultValue:2e3},offset:{type:t.Number,defaultValue:50},fadeInOut:{title:"Fade In/Out",type:t.Boolean,defaultValue:!1},initialAnimation:{title:"Initial Anim",type:t.Boolean,defaultValue:!1},syncAnimations:{title:"Sync",type:t.Boolean,defaultValue:!0}}},typography:{type:t.Object,controls:{fontSize:{type:t.Number,defaultValue:20,min:1,max:100},fontWeight:{type:t.Number,defaultValue:400},font:{type:t.String,default:"Helvetica, sans-serif"},color:{type:t.Color,default:"#555"}}}};export{S as TextRoll,v as propControls};
