var p="0981ea76a26e1145f05ae8421fddab610a6962fd86b3f190bb467948e28a5e79",g=`._textContainer_fuwv9_1 {
  display: grid;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  position: relative;
  grid-auto-rows: 15px;
  height: fit-content;
  width: fit-content;
}

._textContainer_fuwv9_1 > div {
  grid-area: 1/1/ 2/ 2;
}

._textStroke_fuwv9_16 {
  -webkit-text-fill-color: var(--background-color);
  -webkit-text-stroke: 1px var(--color);
  text-stroke: var(--stroke-width, 2px) var(--color);
  text-fill: var(--background-color);
}

._text_fuwv9_1 {
  position: absolute;
  color: var(--color);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=g,document.head.appendChild(t)}})();var r={textContainer:"_textContainer_fuwv9_1",textStroke:"_textStroke_fuwv9_16",text:"_text_fuwv9_1"};import{getTypeographyStyles as _,typography as b,getStrProps as y}from"../../utils/framerControlProps.js";import{useRef as k}from"react";import{useScroll as w,motion as h,useTransform as C}from"framer-motion";import{getColorProps as S,getNumProps as d}from"../../utils/framerControlProps.js";import{ControlType as P}from"framer";import{jsx as n,jsxs as T}from"react/jsx-runtime";var u=({scrollAmount:t=-100,text:o="example",scrollProgress:s})=>{let a=C(s,[0,1],[0,t]);return n(h.div,{className:r.textStroke,style:{y:a,x:0},children:o})},W=({text:t="Scrolly Bau5",typography:o,strokeWidth:s,backgroundColor:a="#fff",offset:l=15,animationFrom:i="bottom-center"})=>{let f=k(null),x=(()=>{if(i==="bottom-center")return["start end","center center"];if(i==="center-top")return["start center","end start"];if(i==="bottom-top")return["start end","end start"]})(),{scrollYProgress:c}=w({target:f,offset:x}),m=Array(3).fill("");return T("div",{ref:f,className:r.textContainer,style:{..._({...o,fontSize:o?.fontSize||100,color:o?.color||"#000"}),"--stroke-width":s+"px","--background-color":a},children:[m.map((v,e)=>n(u,{scrollProgress:c,scrollAmount:(e+1)*(-1*l),text:t},e)).reverse()," ",m.map((v,e)=>n(u,{scrollProgress:c,scrollAmount:(e+1)*l,text:t},e)).reverse()," ",n("div",{className:r.text,children:t})]})},F={typography:b,text:y("Oshe"),backgroundColor:S("#fff"),strokeWidth:d(2,!0,1,{min:1,max:10}),offset:d(5,!1,5,{min:1,max:100}),animationFrom:{title:"Animation From",type:P.Enum,options:["center-top","bottom-center","bottom-top"],optionTitles:["Center-top of screen","Bottom-center of screen","Bottom-top of screen"]}};export{W as TextRepeatOnScroll,F as propsControls};