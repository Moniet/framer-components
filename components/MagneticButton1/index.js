import{useRef as v}from"react";import{useFollowCursor as f}from"../../hooks/useFollowCursor.js";import{motion as s}from"framer-motion";var a="698b8d8ee675a48d661ea53253326d2ce269d705879f9c18892a7c3505c0b5a8",c=`._btn_z8hl6_1 {
  border-radius: var(--border-radius, 5px);
  padding: var(--padding, 30px);
  border: solid var(--border-width, 2px) var(--border-color, #000);
  background-color: var(--background-color, #fff);
  color: var(--color, #000);
  display: flex;
  align-items: center;
  justify-content: center;
}

._wrapper_z8hl6_12 {
  padding: var(--pl) var(--pt) var(--pr) var(--pb);
  width: fit-content;
  height: fit-content;
  position: relative;
}

._btn_z8hl6_1 [data-fc="text-wrap"] {
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

._btn_z8hl6_1 span {
  opacity: 0;
  transform: translate(0, -100%);
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=c,document.head.appendChild(e)}})();var o={btn:"_btn_z8hl6_1",wrapper:"_wrapper_z8hl6_12"};import{jsx as t,jsxs as u}from"react/jsx-runtime";var m=(e=[50,50,50,50])=>({"--pl":e[0]+"px","--pt":e[1]+"px","--pr":e[2]+"px","--pb":e[3]+"px"}),M=({text:e="Magnetic"})=>{let r=v(null),{mouseX:n,mouseY:d,handleMouseMove:i,handleMouseLeave:p,handleMouseEnter:l}=f(r,{movement:50});return t("div",{style:{...m()},className:o.wrapper,ref:r,onMouseOver:l,onMouseMove:i,onMouseLeave:p,children:t(s.div,{style:{x:n,y:d},children:u("div",{className:o.btn,children:[t("div",{"data-fc":"text-wrap",children:t(s.div,{style:{x:-n,y:0},children:e})}),t("span",{children:e})]})})})};export{M as MagneticButton};
