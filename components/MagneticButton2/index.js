import{useRef as E}from"react";import{useFollowCursor as B}from"../../hooks/useFollowCursor.js";import{motion as c,useTransform as l}from"framer-motion";var p="259bee3d1fae516404aaa79d1e8c6987dec1b9d455048e4404c5dc05526231ac",z=`._btn_rz0jd_1 {
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

._wrapper_rz0jd_15 {
  padding: var(--cursor-padding);
  width: fit-content;
  height: fit-content;
  position: relative;
}

._btn_rz0jd_1 [data-fc="text-wrap"] {
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._btn_rz0jd_1:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

._btn_rz0jd_1 span {
  opacity: 0;
  height: 0;
  transform: translate(0, -100%);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=z,document.head.appendChild(t)}})();var n={btn:"_btn_rz0jd_1",wrapper:"_wrapper_rz0jd_15"};import{getColorProps as i,getNumProps as e,getStrProps as P}from"../../utils/framerControlProps.js";import{jsx as o,jsxs as T}from"react/jsx-runtime";var H=({text:t="Magnetic Button",textColor:u="#000",bgColor:f="#fff",borderColor:m="#000",borderWidth:b=2,borderRadius:g=5,buttonPadding:v=50,cursorPadding:h=50,sensitivity:x=150,movement:_=50})=>{let a=E(null),{mouseX:d,mouseY:s,handleMouseMove:w,handleMouseLeave:y,handleMouseEnter:M}=B(a,{movement:_,range:x}),C=l(d,r=>r*-.5),j=l(s,r=>r*-.5);return o("div",{style:{"--cursor-padding":h+"px","--btn-padding":v+"px","--border-radius":g+"px","--border-width":b+"px","--border-color":m,"--bg-color":f,"--text-color":u},className:n.wrapper,ref:a,onMouseEnter:M,onMouseMove:w,onMouseLeave:y,children:o(c.div,{style:{x:d,y:s},children:T("div",{className:n.btn,children:[o("div",{"data-fc":"text-wrap",children:o(c.div,{style:{x:C,y:j},children:t})}),o("span",{children:t})]})})})},I={text:P("Magnetic Button"),textColor:i(),bgColor:{...i("#fff"),title:"Background Color"},borderColor:i("#000"),borderWidth:e(2,!0,1,{min:0}),borderRadius:e(5,!0,1,{min:0}),buttonPadding:e(50,!0,5,{min:0}),cursorPadding:{...e(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:e(150,!1,10,{min:50,max:1e3}),movement:{...e(50,!1,10,{min:10,max:1e3})}};export{H as MagneticButton,I as propsControls};
