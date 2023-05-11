import{motion as a,useScroll as u,useTransform as g}from"framer-motion";import{useRef as b}from"react";import{ControlType as t}from"framer";var s="e699d3473f9824294183dc695f6d5c68f823b3d76c841ad4ffd0e6663bfda68f",p=`._container_1wmzq_1 {
  width: 100%;
  height: 100%;
  border-radius: var(--br);
  overflow: hidden;
}

._img_1wmzq_8 {
  object-fit: cover;
  width: 100%;
  height: calc(100% + var(--offset));
  transform: transition 0.5s ease-in-out;
}
`;(function(){if(globalThis.window&&!document.getElementById(s)){var e=document.createElement("style");e.id=s,e.textContent=p,document.head.appendChild(e)}})();var r={container:"_container_1wmzq_1",img:"_img_1wmzq_8"};import{jsx as i}from"react/jsx-runtime";var y="https://images.unsplash.com/photo-1683142667313-49cb993d29e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";function C({image:e,borderRadius:c=10,offset:n=100,startAnimationFrom:m="screen-center"}){let o=b(null),d=(()=>m==="screen-end"?["start end","end start"]:["start center","end start"])(),{scrollYProgress:f}=u({target:o,offset:d}),l=g(f,[0,1],[0,-1*Math.round(n/2)]);return i(a.div,{ref:o,style:{"--br":`${c}px`},className:r.container,children:i(a.img,{src:e?.src||y,alt:e?.alt||"",className:r.img,style:{y:l,"--offset":`${n}px`}})})}var P={scale:{type:t.Number,defaultValue:1.3,min:1,max:2,step:.1},borderRadius:{type:t.Number,defaultValue:10,min:0,max:20},image:{type:t.ResponsiveImage},startAnimationFrom:{type:t.Enum,options:["screen-end","screen-center"],optionTitles:["Screen End","Screen Start"]}};export{C as ImageParallaxOnScroll,P as propsControls};