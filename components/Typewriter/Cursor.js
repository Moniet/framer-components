import{memo as a}from"react";var o="58e4312e76d7346cb83f553cc1ab0113f4f6f0e5d3f141510cfc09439f1276a1",e=`._blinkingCursor_3ri72_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var i=document.createElement("style");i.id=o,i.textContent=e,document.head.appendChild(i)}})();var n={blinkingCursor:"_blinkingCursor_3ri72_1",container:"_container_3ri72_9",blinking:"_blinking_3ri72_1",blink:"_blink_3ri72_1"};import{jsx as s}from"react/jsx-runtime";var l=({cursorBlinking:i=!0,cursorStyle:t="|",cursorColor:r="inherit"})=>s("span",{style:{color:r},className:`${n.blinkingCursor} ${i?n.blinking:""}`,children:t}),p=a(l);export{p as Cursor};
