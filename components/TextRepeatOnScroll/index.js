var m="0981ea76a26e1145f05ae8421fddab610a6962fd86b3f190bb467948e28a5e79",_=`._textContainer_fj27t_1 {
  display: grid;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  letter-spacing: var(--letter-spacing);
  position: relative;
  grid-auto-rows: 15px;
  height: fit-content;
  width: fit-content;
}

._textContainer_fj27t_1 > div {
  grid-area: 1/1/ 2/ 2;
}

._textStroke_fj27t_17 {
  -webkit-text-fill-color: var(--background-color);
  -webkit-text-stroke: 1px var(--color);
  text-stroke: var(--stroke-width, 2px) var(--color);
  text-fill: var(--background-color);
}

._text_fj27t_1 {
  position: absolute;
  color: var(--color);
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(m)){var t=document.createElement("style");t.id=m,t.textContent=_,document.head.appendChild(t)}})();var r={textContainer:"_textContainer_fj27t_1",textStroke:"_textStroke_fj27t_17",text:"_text_fj27t_1"};import{getTypeographyStyles as b,typography as y,getStrProps as v}from"../../utils/framerControlProps.js";import{useRef as k}from"react";import{useScroll as h,motion as C,useTransform as S}from"framer-motion";import{getColorProps as w,getNumProps as d}from"../../utils/framerControlProps.js";import{ControlType as P}from"framer";import{jsx as n,jsxs as T}from"react/jsx-runtime";var x=({scrollAmount:t=-100,text:o="example",scrollProgress:s})=>{let a=S(s,[0,1],[0,t]);return n(C.div,{className:r.textStroke,style:{y:a,x:0},children:o})},R=({text:t="Scrolly Bau5",typography:o,strokeWidth:s,backgroundColor:a="#fff",offset:l=15,animationFrom:i="bottom-center"})=>{let c=k(null),u=(()=>{if(i==="bottom-center")return["start end","center center"];if(i==="center-top")return["start center","end start"];if(i==="bottom-top")return["start end","end start"]})(),{scrollYProgress:f}=h({target:c,offset:u}),p=Array(3).fill("");return T("div",{ref:c,className:r.textContainer,style:{...b({...o,fontSize:o?.fontSize||100,color:o?.color||"#000"}),"--stroke-width":s+"px","--background-color":a},children:[p.map((g,e)=>n(x,{scrollProgress:f,scrollAmount:(e+1)*(-1*l),text:t},e)).reverse()," ",p.map((g,e)=>n(x,{scrollProgress:f,scrollAmount:(e+1)*l,text:t},e)).reverse()," ",n("div",{className:r.text,children:t})]})},W={typography:y,text:v("Oshe"),backgroundColor:w("#fff"),strokeWidth:d(2,!0,1,{min:1,max:10}),offset:d(5,!1,5,{min:1,max:100}),animationFrom:{title:"Animation From",type:P.Enum,options:["center-top","bottom-center","bottom-top"],optionTitles:["Center-top of screen","Bottom-center of screen","Bottom-top of screen"]}};export{R as TextRepeatOnScroll,W as propsControls};
