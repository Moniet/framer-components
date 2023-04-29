import{useTypewriter as w}from"./useTypewriter.js";import{Cursor as V}from"./Cursor.js";import{ControlType as e}from"framer";var o="5af44f841720a5f990c672260b828f3bcbd95c8be254eb6d17b714478ebda9ba",z=`._blinkingCursor_12xzj_1 {
  position: relative;
  line-height: inherit;
  left: 3px;
  top: 0;
  opacity: 1;
}

._container_12xzj_9 {
  color: var(--color);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}

._blinking_12xzj_1 {
  animation-name: _blink_12xzj_1;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
}

@keyframes _blink_12xzj_1 {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=z,document.head.appendChild(t)}})();var r={blinkingCursor:"_blinkingCursor_12xzj_1",container:"_container_12xzj_9",blinking:"_blinking_12xzj_1",blink:"_blink_12xzj_1"};import{jsx as i,jsxs as S}from"react/jsx-runtime";var H=({text:t="Hello World!, This is a simple, Typewriter",loop:n=!0,typeSpeed:l=80,deleteSpeed:a=50,delaySpeed:p=1500,cursor:s=!1,cursorStyle:u="|",cursorColor:f="inherit",cursorBlinking:d=!0,onLoopDone:m,onType:c,onDelay:y,onDelete:_,color:b="#333",fontSize:x=20,fontFamily:g,fontWeight:C})=>{let h=t.split(","),[k]=w({words:h,loop:n,typeSpeed:l,deleteSpeed:a,delaySpeed:p,onLoopDone:m,onType:c,onDelay:y,onDelete:_});return S("div",{className:r.container,style:{"--font-family":g,"--color":b,"--font-weight":C,"--font-size":x+"px"},children:[i("span",{children:k}),s&&i(V,{cursorStyle:u,cursorColor:f,cursorBlinking:d})]})},W={text:{type:e.String,defaultValue:"Hello World!, This is a simple, Typewriter"},font:{type:e.String,defaultValue:"Helvetica"},fontSize:{type:e.Number,defaultValue:20,displayStepper:!0},fontWeight:{type:e.Number,defaultValue:400,displayStepper:!0,step:100},color:{type:e.Color,defaultValue:"#222"},animation:{type:e.Object,controls:{loop:{type:e.Boolean,defaultValue:!0},typeSpeed:{type:e.Number,min:10,max:1e4,defaultValue:80},deleteSpeed:{type:e.Number,min:10,max:1e4,defaultValue:50},delaySpeed:{title:"Delay",type:e.Number,defaultValue:1500,min:10,max:1e4},cursor:{type:Boolean,defaultValue:!0},cursorBlinking:{type:e.Boolean,defaultValue:!0},cursorColor:{type:e.Color,defaultValue:"inherit"}}}};export{H as Typewriter,W as propsControls};
