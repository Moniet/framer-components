import{memo as a}from"react";var i="e6fc76bb682ec2df22fd5e44af14c3877a8fdac7988ea1365ca8cf498cda284f",r=`._blinkingCursor_12xzj_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var n=document.createElement("style");n.id=i,n.textContent=r,document.head.appendChild(n)}})();var o={blinkingCursor:"_blinkingCursor_12xzj_1",container:"_container_12xzj_9",blinking:"_blinking_12xzj_1",blink:"_blink_12xzj_1"};import{jsx as c}from"react/jsx-runtime";var s=({cursorBlinking:n=!0,cursorStyle:t="|",cursorColor:e="inherit"})=>c("span",{style:{color:e},className:`${o.blinkingCursor} ${n?o.blinking:""}`,children:t}),m=a(s);export{m as Cursor};
