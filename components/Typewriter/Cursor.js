import{memo as a}from"react";var o="c61e5407275d75fe00647a04039e943f27cd329d61ed2e52253b6ea23a7a1f58",r=`._blinkingCursor_3ri72_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var i=document.createElement("style");i.id=o,i.textContent=r,document.head.appendChild(i)}})();var n={blinkingCursor:"_blinkingCursor_3ri72_1",container:"_container_3ri72_9",blinking:"_blinking_3ri72_1",blink:"_blink_3ri72_1"};import{jsx as s}from"react/jsx-runtime";var l=({cursorBlinking:i=!0,cursorStyle:t="|",cursorColor:e="inherit"})=>s("span",{style:{color:e},className:`${n.blinkingCursor} ${i?n.blinking:""}`,children:t}),m=a(l);export{m as Cursor};
