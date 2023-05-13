import{useRef as P}from"react";import{useFollowCursor as T}from"../../hooks/useFollowCursor.js";import{motion as l,useTransform as c}from"framer-motion";var p="5b2a977d93aaaf163d629d139a9d6cb1e290161dcc949428ba5171e9b0561059",B=`._btn_fn73v_1 {
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

._wrapper_fn73v_15 {
  padding: var(--cursor-padding);
  width: fit-content;
  height: fit-content;
  position: relative;
}

._btn_fn73v_1 [data-fc="text-wrap"] {
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._btn_fn73v_1 span {
  opacity: 0;
  height: 0;
  transform: translate(0, -100%);
  user-select: none;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=B,document.head.appendChild(e)}})();var n={btn:"_btn_fn73v_1",wrapper:"_wrapper_fn73v_15"};import{getColorProps as a,getNumProps as o,getStrProps as L}from"../../utils/framerControlProps.js";import{jsx as t,jsxs as N}from"react/jsx-runtime";var S=({text:e="Magnetic Button",textColor:u="#000",bgColor:f="#fff",borderColor:m="#000",borderWidth:v=2,borderRadius:b=5,buttonPadding:g=50,cursorPadding:x=50,sensitivity:h=150,movement:_=50})=>{let i=P(null),{mouseX:s,mouseY:d,handleMouseMove:w,handleMouseLeave:y,handleMouseEnter:M}=T(i,{movement:_,range:h}),C=c(s,r=>r*-.5),E=c(d,r=>r*-.5);return t("div",{style:{"--cursor-padding":x+"px","--btn-padding":g+"px","--border-radius":b+"px","--border-width":v+"px","--border-color":m,"--bg-color":f,"--text-color":u},className:n.wrapper,ref:i,onMouseEnter:M,onMouseMove:w,onMouseLeave:y,children:t(l.div,{style:{x:s,y:d},children:N("div",{className:n.btn,children:[t("div",{"data-fc":"text-wrap",children:t(l.div,{style:{x:C,y:E},children:e})}),t("span",{children:e})]})})})},W={text:L("Magnetic Button"),textColor:a(),bgColor:{...a("#fff"),title:"Background Color"},borderColor:a("#000"),borderWidth:o(2,!0,1,{min:0}),borderRadius:o(5,!0,1,{min:0}),buttonPadding:o(50,!0,5,{min:0}),cursorPadding:{...o(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:o(150,!1,10,{min:50,max:1e3}),movement:{...o(50,!1,10,{min:10,max:1e3})}};export{S as MagneticButton,W as propsControls};
