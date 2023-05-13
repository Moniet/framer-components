import{useRef as C}from"react";import{useFollowCursor as E}from"../../hooks/useFollowCursor.js";import{motion as d,useTransform as p}from"framer-motion";var i="b322a282f1cee99c167362041eb67a779caac499443cd3f217ac57ac2906423f",z=`._btn_za2mt_1 {
  border-radius: var(--border-radius, 5px);
  padding: var(--btn-padding, 30px);
  border: solid var(--border-width, 2px) var(--border-color, #000);
  background-color: var(--bg-color, #fff);
  color: var(--text-color, #000);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

._wrapper_za2mt_15 {
  padding: var(--cursor-padding);
  width: fit-content;
  height: fit-content;
  position: relative;
}

._btn_za2mt_1 [data-fc="text-wrap"] {
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._btn_za2mt_1 span {
  opacity: 0;
  height: 0;
  transform: translate(0, -100%);
}
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=z,document.head.appendChild(e)}})();var r={btn:"_btn_za2mt_1",wrapper:"_wrapper_za2mt_15"};import{jsx as t,jsxs as T}from"react/jsx-runtime";var D=({text:e="Magnetic Button",textColor:c="#000",bgColor:l="#fff",borderColor:f="#000",borderWidth:m=2,borderRadius:u=5,buttonPadding:v=50,cursorPadding:b=50,sensitivity:g=150,movement:_=50})=>{let n=C(null),{mouseX:a,mouseY:s,handleMouseMove:x,handleMouseLeave:h,handleMouseEnter:w}=E(n,{movement:_,range:g}),y=p(a,o=>o*-.5),M=p(s,o=>o*-.5);return t("div",{style:{"--cursor-padding":b+"px","--btn-padding":v+"px","--border-radius":u+"px","--border-width":m+"px","--border-color":f,"--bg-color":l,"--text-color":c},className:r.wrapper,ref:n,onMouseOver:w,onMouseMove:x,onMouseLeave:h,children:t(d.div,{style:{x:a,y:s},children:T("div",{className:r.btn,children:[t("div",{"data-fc":"text-wrap",children:t(d.div,{style:{x:y,y:M},children:e})}),t("span",{children:e})]})})})},F={};export{D as MagneticButton,F as propsControls};
