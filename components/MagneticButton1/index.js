import{useRef as P}from"react";import{useFollowCursor as B}from"../../hooks/useFollowCursor.js";import{motion as c,useTransform as l}from"framer-motion";var p="a53623a54ba713817c73c7d83cc0807d7960db22b6361ace6aad7a583ea7a378",E=`._btn_za2mt_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=E,document.head.appendChild(t)}})();var n={btn:"_btn_za2mt_1",wrapper:"_wrapper_za2mt_15"};import{getColorProps as a,getNumProps as o,getStrProps as T}from"../../utils/framerControlProps.js";import{jsx as e,jsxs as L}from"react/jsx-runtime";var I=({text:t="Magnetic Button",textColor:m="#000",bgColor:u="#fff",borderColor:f="#000",borderWidth:b=2,borderRadius:v=5,buttonPadding:g=50,cursorPadding:x=50,sensitivity:_=150,movement:h=50})=>{let i=P(null),{mouseX:s,mouseY:d,handleMouseMove:w,handleMouseLeave:y,handleMouseEnter:M}=B(i,{movement:h,range:_}),C=l(s,r=>r*-.5),z=l(d,r=>r*-.5);return e("div",{style:{"--cursor-padding":x+"px","--btn-padding":g+"px","--border-radius":v+"px","--border-width":b+"px","--border-color":f,"--bg-color":u,"--text-color":m},className:n.wrapper,ref:i,onMouseOver:M,onMouseMove:w,onMouseLeave:y,children:e(c.div,{style:{x:s,y:d},children:L("div",{className:n.btn,children:[e("div",{"data-fc":"text-wrap",children:e(c.div,{style:{x:C,y:z},children:t})}),e("span",{children:t})]})})})},O={text:T("Magnetic Button"),textColor:a(),bgColor:a("#fff"),borderColor:a("#000"),borderWidth:o(2,!0,1,{min:0}),borderRadius:o(5,!0,1,{min:0}),buttonPadding:o(50,!0,1,{min:0}),cursorPadding:o(50,!0,1,{min:0}),sensitivity:o(150,!1,10,{min:50,max:1e3}),movement:o(50,!1,10,{min:10,max:1e3})};export{I as MagneticButton,O as propsControls};
