var s="3f469c8f2cf061402b790e8a5406c6cb7a40f8fff0dfdba2ffe6f871f0988ee3",g=`._container_tvvpp_1 {
  width: 100%;
  height: 100%;
  background: linear-gradient(var(--lg));
  background-size: var(--background-size);
  background-repeat: no-repeat;
}

._wrapper_tvvpp_9 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--br);
  box-shadow: var(--bs-x) var(--bs-y) var(--bs-blur) var(--bs-color);
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var o=document.createElement("style");o.id=s,o.textContent=g,document.head.appendChild(o)}})();var p={container:"_container_tvvpp_1",wrapper:"_wrapper_tvvpp_9"};import{ControlType as t}from"framer";import{motion as S}from"framer-motion";import{ControlType as e}from"framer";var h=(o,i,a,r)=>({type:e.Number,defaultValue:o,displayStepper:i,...r??{},...a?{step:a}:{}});var u={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},N={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},P={type:e.Object,controls:{letterSpacing:h(0,!1,1,{min:0,max:100}),fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}};import{jsx as d,jsxs as v}from"react/jsx-runtime";var b="hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)",I=({colorsText:o=b,borderRadius:i=20,size:a=300,angle:r=0,blur:l=0,animation:{duration:m=2,animateAngle:c=!1},shadow:n,withShadow:f=!1})=>{let y=o.split(","),x=f?{"--bs-x":n.x+"px","--bs-y":n.y+"px","--bs-blur":n.blur+"px","--bs-spread":n.size+"px","--bs-color":n.color}:{};return v("div",{style:{"--br":`${i}px`,...x},className:p.wrapper,children:[d(S.div,{transition:{duration:m,repeat:1/0},style:{"--lg":`${r}deg, ${y}`,"--angle":r||0,"--background-size":a?`${a}% ${a}%`:"300% 300%"},animate:{backgroundPositionY:["0%","100%","0%"],backgroundPositionX:["0%","100%","0%"],...c?{"--angle":[r,r+180,r]}:{}},className:p.container}),!!l&&d("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,backdropFilter:`blur(${l}px)`,borderRadius:`${i}px`}})]})},T={colorText:{title:"Colors",type:t.String,defaultValue:b},size:{type:t.Number,min:100,max:1e3,defaultValue:300},blur:{type:t.Number,defaultValue:0,displaySteppr:!0},angle:{type:t.Number,defaultValue:30,min:0,max:360,step:5},borderRadius:{type:t.Number,min:0,max:1e3},withShadow:{title:"With Shadow",type:t.Boolean,defaultValue:!1},shadow:{hidden:o=>!o.withShadow,title:"Shadow",type:t.Object,controls:{...u}},animation:{title:"Animation",type:t.Object,controls:{animateAngle:{type:t.Boolean,defaultValue:!1},duration:{title:"Duration",type:t.Number,defaultValue:10,displayStepper:!0}}}};export{I as GradientBgAnimation,T as propControls};
