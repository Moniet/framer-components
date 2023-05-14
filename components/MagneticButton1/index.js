import{useRef as N}from"react";import{ControlType as o}from"framer";import{useFollowCursor as P}from"../../hooks/useFollowCursor.js";import{motion as f,useTransform as l}from"framer-motion";var p="daa25b6b7280701a24349476c4c286dbaf94212f31ccd62d2116ff0d63201883",B=`._btn_1iyf3_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(p)){var e=document.createElement("style");e.id=p,e.textContent=B,document.head.appendChild(e)}})();var i={btn:"_btn_1iyf3_1",wrapper:"_wrapper_1iyf3_19"};import{getTypeographyStyles as S}from"../../utils/framerControlProps.js";import{getColorProps as c,getNumProps as t,getStrProps as z}from"../../utils/framerControlProps.js";import{jsx as r,jsxs as L}from"react/jsx-runtime";var O=({text:e="Magnetic Button",bgColor:u="#fff",borderColor:m="#000",borderWidth:g=2,borderRadius:b=5,buttonPadding:v=50,cursorPadding:y=50,sensitivity:h=150,movement:x=50,typography:w})=>{let a=N(null),{mouseX:s,mouseY:d,handleMouseMove:_,handleMouseLeave:M,handleMouseEnter:C}=P(a,{movement:x,range:h}),E=l(s,n=>n*-.5),T=l(d,n=>n*-.5);return r("div",{style:{"--cursor-padding":y+"px","--btn-padding":v+"px","--border-radius":b+"px","--border-width":g+"px","--border-color":m,"--bg-color":u,...S(w,20,400)},className:i.wrapper,ref:a,onMouseEnter:C,onMouseMove:_,onMouseLeave:M,children:r(f.div,{style:{x:s,y:d},children:L("div",{className:i.btn,children:[r("div",{"data-fc":"text-wrap",children:r(f.div,{style:{x:E,y:T},children:e})}),r("span",{children:e})]})})})},q={text:z("Magnetic Button"),bgColor:{...c("#fff"),title:"Background Color"},borderColor:c("#000"),borderWidth:t(2,!0,1,{min:0}),borderRadius:t(5,!0,1,{min:0}),buttonPadding:t(50,!0,5,{min:0}),cursorPadding:{...t(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:t(150,!1,10,{min:50,max:1e3}),movement:{...t(50,!1,10,{min:10,max:1e3})},typography:{type:o.Object,controls:{letterSpacing:t(0,!1,1,{min:0,max:100}),fontSize:{type:o.Number,defaultValue:20,min:1,max:100},fontWeight:{type:o.Number,defaultValue:400,step:100,min:100,max:1e3},font:{type:o.String,default:"Helvetica, sans-serif"},color:{type:o.Color,default:"#555"}}}};export{O as MagneticButton,q as propsControls};
