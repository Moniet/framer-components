import{useRef as B}from"react";import{useFollowCursor as P}from"../../hooks/useFollowCursor.js";import{motion as c,useTransform as l}from"framer-motion";var p="e23ee5dc4329454084afb8c7296228dcdd7d10e65cae3da4c24a7a787ee87953",E=`._btn_za2mt_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=E,document.head.appendChild(t)}})();var n={btn:"_btn_za2mt_1",wrapper:"_wrapper_za2mt_15"};import{getColorProps as a,getNumProps as e,getStrProps as T}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as L}from"react/jsx-runtime";var I=({text:t="Magnetic Button",textColor:m="#000",bgColor:u="#fff",borderColor:f="#000",borderWidth:b=2,borderRadius:v=5,buttonPadding:g=50,cursorPadding:x=50,sensitivity:h=150,movement:_=50})=>{let i=B(null),{mouseX:d,mouseY:s,handleMouseMove:w,handleMouseLeave:y,handleMouseEnter:M}=P(i,{movement:_,range:h}),C=l(d,r=>r*-.5),z=l(s,r=>r*-.5);return o("div",{style:{"--cursor-padding":x+"px","--btn-padding":g+"px","--border-radius":v+"px","--border-width":b+"px","--border-color":f,"--bg-color":u,"--text-color":m},className:n.wrapper,ref:i,onMouseEnter:M,onMouseMove:w,onMouseLeave:y,children:o(c.div,{style:{x:d,y:s},children:L("div",{className:n.btn,children:[o("div",{"data-fc":"text-wrap",children:o(c.div,{style:{x:C,y:z},children:t})}),o("span",{children:t})]})})})},S={text:T("Magnetic Button"),textColor:a(),bgColor:{...a("#fff"),title:"Background Color"},borderColor:a("#000"),borderWidth:e(2,!0,1,{min:0}),borderRadius:e(5,!0,1,{min:0}),buttonPadding:e(50,!0,5,{min:0}),cursorPadding:{...e(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:e(150,!1,10,{min:50,max:1e3}),movement:{...e(50,!1,10,{min:10,max:1e3})}};export{I as MagneticButton,S as propsControls};
