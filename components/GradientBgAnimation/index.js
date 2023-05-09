var s="defd5f593c12e0b97babbb746ecc9e2c9e5ec375bdf818ed9099a121881ac6cd",g=`._container_tvvpp_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(s)){var o=document.createElement("style");o.id=s,o.textContent=g,document.head.appendChild(o)}})();var i={container:"_container_tvvpp_1",wrapper:"_wrapper_tvvpp_9"};import{ControlType as t}from"framer";import{motion as h}from"framer-motion";import{ControlType as e}from"framer";var u={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},V={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},N={type:e.Object,controls:{fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}};import{jsx as d,jsxs as S}from"react/jsx-runtime";var b="hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)",E=({colorsText:o=b,borderRadius:p=20,size:n=300,angle:r=0,blur:l=0,animation:{duration:m=2,animateAngle:c=!1},shadow:a,withShadow:y=!1})=>{let f=o.split(","),x=y?{"--bs-x":a.x+"px","--bs-y":a.y+"px","--bs-blur":a.blur+"px","--bs-spread":a.size+"px","--bs-color":a.color}:{};return S("div",{style:{"--br":`${p}px`,...x},className:i.wrapper,children:[d(h.div,{transition:{duration:m,repeat:1/0},style:{"--lg":`${r}deg, ${f}`,"--angle":r||0,"--background-size":n?`${n}% ${n}%`:"300% 300%"},animate:{backgroundPositionY:["0%","100%","0%"],backgroundPositionX:["0%","100%","0%"],...c?{"--angle":[r,r+180,r]}:{}},className:i.container}),!!l&&d("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,backdropFilter:`blur(${l}px)`,borderRadius:`${p}px`}})]})},I={colorText:{title:"Colors",type:t.String,defaultValue:b},size:{type:t.Number,min:100,max:1e3,defaultValue:300},blur:{type:t.Number,defaultValue:0,displaySteppr:!0},angle:{type:t.Number,defaultValue:30,min:0,max:360,step:5},borderRadius:{type:t.Number,min:0,max:1e3},withShadow:{title:"With Shadow",type:t.Boolean,defaultValue:!1},shadow:{hidden:o=>!o.withShadow,title:"Shadow",type:t.Object,controls:{...u}},animation:{title:"Animation",type:t.Object,controls:{animateAngle:{type:t.Boolean,defaultValue:!1},duration:{title:"Duration",type:t.Number,defaultValue:10,displayStepper:!0}}}};export{E as GradientBgAnimation,I as propControls};
