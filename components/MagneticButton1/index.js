import{useRef as P}from"react";import{useFollowCursor as L}from"../../hooks/useFollowCursor.js";import{motion as f,useTransform as l}from"framer-motion";var p="871ee3668c889e2585efc2fc0b3d1e5e7e61defa91e1a3baf918bdb4c0c91df3",B=`._btn_1iyf3_1 {
  border-radius: var(--border-radius, 5px);
  padding: var(--btn-padding, 30px);
  border: solid var(--border-width, 2px) var(--border-color, #000);
  background-color: var(--bg-color, #fff);
  color: var(--color, #000);
  letter-spacing: var(--letter-spacing, 1px);
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

._wrapper_1iyf3_19 {
  padding: var(--cursor-padding);
  width: fit-content;
  height: fit-content;
  position: relative;
}

._btn_1iyf3_1 [data-fc="text-wrap"] {
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._btn_1iyf3_1 span {
  opacity: 0;
  height: 0;
  transform: translate(0, -100%);
  user-select: none;
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=B,document.head.appendChild(e)}})();var n={btn:"_btn_1iyf3_1",wrapper:"_wrapper_1iyf3_19"};import{getTypeographyStyles as N,typography as R}from"../../utils/framerControlProps.js";import{getColorProps as i,getNumProps as t,getStrProps as k}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as z}from"react/jsx-runtime";var q=({text:e="Magnetic Button",textColor:c="#000",bgColor:u="#fff",borderColor:m="#000",borderWidth:g=2,borderRadius:b=5,buttonPadding:v=50,cursorPadding:y=50,sensitivity:h=150,movement:x=50,typography:w})=>{let a=P(null),{mouseX:s,mouseY:d,handleMouseMove:_,handleMouseLeave:M,handleMouseEnter:C}=L(a,{movement:x,range:h}),E=l(s,r=>r*-.5),T=l(d,r=>r*-.5);return o("div",{style:{"--cursor-padding":y+"px","--btn-padding":v+"px","--border-radius":b+"px","--border-width":g+"px","--border-color":m,"--bg-color":u,"--text-color":c,...N(w)},className:n.wrapper,ref:a,onMouseEnter:C,onMouseMove:_,onMouseLeave:M,children:o(f.div,{style:{x:s,y:d},children:z("div",{className:n.btn,children:[o("div",{"data-fc":"text-wrap",children:o(f.div,{style:{x:E,y:T},children:e})}),o("span",{children:e})]})})})},A={text:k("Magnetic Button"),textColor:i(),bgColor:{...i("#fff"),title:"Background Color"},borderColor:i("#000"),borderWidth:t(2,!0,1,{min:0}),borderRadius:t(5,!0,1,{min:0}),buttonPadding:t(50,!0,5,{min:0}),cursorPadding:{...t(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:t(150,!1,10,{min:50,max:1e3}),movement:{...t(50,!1,10,{min:10,max:1e3})},typography:R};export{q as MagneticButton,A as propsControls};
