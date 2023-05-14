import{useRef as P}from"react";import{ControlType as o}from"framer";import{useFollowCursor as S}from"../../hooks/useFollowCursor.js";import{motion as f,useTransform as c}from"framer-motion";var l="5913f8c10fdab3b525433980d4ba5606d33f6b51a351d199fd1e9a0ee1515bcd",N=`._btn_1iyf3_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(l)){var t=document.createElement("style");t.id=l,t.textContent=N,document.head.appendChild(t)}})();var i={btn:"_btn_1iyf3_1",wrapper:"_wrapper_1iyf3_19"};import{getTypeographyStyles as z}from"../../utils/framerControlProps.js";import{getColorProps as a,getNumProps as e,getStrProps as L}from"../../utils/framerControlProps.js";import{jsx as r,jsxs as R}from"react/jsx-runtime";var q=({text:t="Magnetic Button",textColor:u="#000",bgColor:m="#fff",borderColor:g="#000",borderWidth:b=2,borderRadius:v=5,buttonPadding:y=50,cursorPadding:h=50,sensitivity:x=150,movement:w=50,typography:_})=>{let s=P(null),{mouseX:d,mouseY:p,handleMouseMove:M,handleMouseLeave:C,handleMouseEnter:E}=S(s,{movement:w,range:x}),T=c(d,n=>n*-.5),B=c(p,n=>n*-.5);return r("div",{style:{"--cursor-padding":h+"px","--btn-padding":y+"px","--border-radius":v+"px","--border-width":b+"px","--border-color":g,"--bg-color":m,"--text-color":u,...z(_,20,400)},className:i.wrapper,ref:s,onMouseEnter:E,onMouseMove:M,onMouseLeave:C,children:r(f.div,{style:{x:d,y:p},children:R("div",{className:i.btn,children:[r("div",{"data-fc":"text-wrap",children:r(f.div,{style:{x:T,y:B},children:t})}),r("span",{children:t})]})})})},A={text:L("Magnetic Button"),textColor:a(),bgColor:{...a("#fff"),title:"Background Color"},borderColor:a("#000"),borderWidth:e(2,!0,1,{min:0}),borderRadius:e(5,!0,1,{min:0}),buttonPadding:e(50,!0,5,{min:0}),cursorPadding:{...e(50,!0,5,{min:0}),description:'The "invisible" padding around the button for the cursor to interact with'},sensitivity:e(150,!1,10,{min:50,max:1e3}),movement:{...e(50,!1,10,{min:10,max:1e3})},typography:{type:o.Object,controls:{letterSpacing:e(0,!1,1,{min:0,max:100}),fontSize:{type:o.Number,defaultValue:20,min:1,max:100},fontWeight:{type:o.Number,defaultValue:400,step:100,min:100,max:1e3},font:{type:o.String,default:"Helvetica, sans-serif"},color:{type:o.Color,default:"#555"}}}};export{q as MagneticButton,A as propsControls};
