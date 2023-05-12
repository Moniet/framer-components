import{useTypewriter as V}from"./useTypewriter.js";import{Cursor as S}from"./Cursor.js";import{ControlType as e}from"framer";var o="ed00d06a85c7e032a753c01ad7dfa0e9062aeeb01201c9c5fe9a90981409009f",x=`._blinkingCursor_3ri72_1 {
  position: relative;
  line-height: inherit;
  left: 3px;
  top: 0;
  opacity: 1;
}

._container_3ri72_9 {
  color: var(--color);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  height: 100%;
  display: inline-flex;
  align-items: center;
}

._blinking_3ri72_1 {
  animation-name: _blink_3ri72_1;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
}

@keyframes _blink_3ri72_1 {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=x,document.head.appendChild(t)}})();var r={blinkingCursor:"_blinkingCursor_3ri72_1",container:"_container_3ri72_9",blinking:"_blinking_3ri72_1",blink:"_blink_3ri72_1"};import{jsx as i,jsxs as T}from"react/jsx-runtime";var W=({text:t="Hello World!, This is a simple, Typewriter",loop:n=!0,typeSpeed:l=80,deleteSpeed:a=50,delaySpeed:p=1500,cursor:s=!1,cursorStyle:u="|",cursorColor:f="inherit",cursorBlinking:d=!0,onLoopDone:c,onType:m,onDelay:y,onDelete:_,color:g="#333",fontSize:b=20,fontFamily:h,fontWeight:C})=>{let k=t.split(","),[w]=V({words:k,loop:n,typeSpeed:l,deleteSpeed:a,delaySpeed:p,onLoopDone:c,onType:m,onDelay:y,onDelete:_});return T("div",{className:r.container,style:{"--font-family":h,"--color":g,"--font-weight":C,"--font-size":b+"px"},children:[i("span",{children:w}),s&&i(S,{cursorStyle:u,cursorColor:f,cursorBlinking:d})]})},D={text:{type:e.String,defaultValue:"Hello World!, This is a simple, Typewriter"},font:{type:e.String,defaultValue:"Helvetica"},fontSize:{type:e.Number,defaultValue:20,displayStepper:!0},fontWeight:{type:e.Number,defaultValue:400,displayStepper:!0,step:100},color:{type:e.Color,defaultValue:"#222"},animation:{type:e.Object,controls:{loop:{type:e.Boolean,defaultValue:!0},typeSpeed:{type:e.Number,min:10,max:1e4,defaultValue:80},deleteSpeed:{type:e.Number,min:10,max:1e4,defaultValue:50},delaySpeed:{title:"Delay",type:e.Number,defaultValue:1500,min:10,max:1e4},cursor:{type:Boolean,defaultValue:!0},cursorBlinking:{type:e.Boolean,defaultValue:!0},cursorColor:{type:e.Color,defaultValue:"inherit"}}}};export{W as Typewriter,D as propsControls};
