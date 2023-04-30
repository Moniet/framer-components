var s="2403f0f2fd16315640fa73c3ce3b042c94241759681d3fa3b576c1317a976a1d",x=`._container_tvvpp_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(s)){var t=document.createElement("style");t.id=s,t.textContent=x,document.head.appendChild(t)}})();var n={container:"_container_tvvpp_1",wrapper:"_wrapper_tvvpp_9"};import{ControlType as e}from"framer";import{motion as g}from"framer-motion";import{ControlType as a}from"framer";var d={x:{type:a.Number,displayStepper:!0,defaultValue:0},y:{type:a.Number,displayStepper:!0,defaultValue:0},blur:{type:a.Number,displayStepper:!0,defaultValue:20},color:{type:a.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:a.Number,displayStepper:!0,defaultValue:0}};import{jsx as u,jsxs as v}from"react/jsx-runtime";var b="hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)",C=({colorsText:t=b,borderRadius:p=20,size:i=300,angle:o=0,blur:l=0,animation:{duration:m=2,animateAngle:c=!1},shadow:r,withShadow:y=!1})=>{let f=t.split(","),h=y?{"--bs-x":r.x+"px","--bs-y":r.y+"px","--bs-blur":r.blur+"px","--bs-spread":r.size+"px","--bs-color":r.color}:{};return v("div",{style:{"--br":`${p}px`,...h},className:n.wrapper,children:[u(g.div,{transition:{duration:m,repeat:1/0},style:{"--lg":`${o}deg, ${f}`,"--angle":o||0,"--background-size":i?`${i}% ${i}%`:"300% 300%"},animate:{backgroundPositionY:["0%","100%","0%"],backgroundPositionX:["0%","100%","0%"],...c?{"--angle":[o,o+180,o]}:{}},className:n.container}),!!l&&u("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,backdropFilter:`blur(${l}px)`,borderRadius:`${p}px`}})]})},$={colorText:{title:"Colors",type:e.String,defaultValue:b},size:{type:e.Number,min:100,max:1e3,defaultValue:300},blur:{type:e.Number,defaultValue:0,displaySteppr:!0},angle:{type:e.Number,defaultValue:30,min:0,max:360,step:5},borderRadius:{type:e.Number,min:0,max:1e3},withShadow:{title:"With Shadow",type:e.Boolean,defaultValue:!1},shadow:{hidden:t=>!t.withShadow,title:"Shadow",type:e.Object,controls:{...d}},animation:{title:"Animation",type:e.Object,controls:{animateAngle:{type:e.Boolean,defaultValue:!1},duration:{title:"Duration",type:e.Number,defaultValue:10,displayStepper:!0}}}};export{C as GradientBgAnimation,$ as propControls};
