var l="8f7fa03013adc7279248330bbd8f90f3ddd54c8f4600843c62c8d13b19d04576",g=`._container_tvvpp_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(l)){var t=document.createElement("style");t.id=l,t.textContent=g,document.head.appendChild(t)}})();var p={container:"_container_tvvpp_1",wrapper:"_wrapper_tvvpp_9"};import{ControlType as e}from"framer";import{motion as h}from"framer-motion";import{ControlType as o}from"framer";var u={x:{type:o.Number,displayStepper:!0,defaultValue:0},y:{type:o.Number,displayStepper:!0,defaultValue:0},blur:{type:o.Number,displayStepper:!0,defaultValue:20},color:{type:o.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:o.Number,displayStepper:!0,defaultValue:0}},N={type:o.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"};import{jsx as d,jsxs as v}from"react/jsx-runtime";var b="hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)",E=({colorsText:t=b,borderRadius:i=20,size:n=300,angle:r=0,blur:s=0,animation:{duration:m=2,animateAngle:c=!1},shadow:a,withShadow:y=!1})=>{let x=t.split(","),f=y?{"--bs-x":a.x+"px","--bs-y":a.y+"px","--bs-blur":a.blur+"px","--bs-spread":a.size+"px","--bs-color":a.color}:{};return v("div",{style:{"--br":`${i}px`,...f},className:p.wrapper,children:[d(h.div,{transition:{duration:m,repeat:1/0},style:{"--lg":`${r}deg, ${x}`,"--angle":r||0,"--background-size":n?`${n}% ${n}%`:"300% 300%"},animate:{backgroundPositionY:["0%","100%","0%"],backgroundPositionX:["0%","100%","0%"],...c?{"--angle":[r,r+180,r]}:{}},className:p.container}),!!s&&d("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,backdropFilter:`blur(${s}px)`,borderRadius:`${i}px`}})]})},I={colorText:{title:"Colors",type:e.String,defaultValue:b},size:{type:e.Number,min:100,max:1e3,defaultValue:300},blur:{type:e.Number,defaultValue:0,displaySteppr:!0},angle:{type:e.Number,defaultValue:30,min:0,max:360,step:5},borderRadius:{type:e.Number,min:0,max:1e3},withShadow:{title:"With Shadow",type:e.Boolean,defaultValue:!1},shadow:{hidden:t=>!t.withShadow,title:"Shadow",type:e.Object,controls:{...u}},animation:{title:"Animation",type:e.Object,controls:{animateAngle:{type:e.Boolean,defaultValue:!1},duration:{title:"Duration",type:e.Number,defaultValue:10,displayStepper:!0}}}};export{E as GradientBgAnimation,I as propControls};
