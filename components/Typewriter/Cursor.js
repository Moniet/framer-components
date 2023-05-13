import{memo as a}from"react";var o="0062966a589639f8ee9653e89118450853555856954472b5bfad5327dcd55d1f",e=`._blinkingCursor_3ri72_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var i=document.createElement("style");i.id=o,i.textContent=e,document.head.appendChild(i)}})();var n={blinkingCursor:"_blinkingCursor_3ri72_1",container:"_container_3ri72_9",blinking:"_blinking_3ri72_1",blink:"_blink_3ri72_1"};import{jsx as s}from"react/jsx-runtime";var l=({cursorBlinking:i=!0,cursorStyle:t="|",cursorColor:r="inherit"})=>s("span",{style:{color:r},className:`${n.blinkingCursor} ${i?n.blinking:""}`,children:t}),m=a(l);export{m as Cursor};
