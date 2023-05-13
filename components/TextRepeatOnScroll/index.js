var p="506984f7992fc75d25b3ce829fa33ff841210dbe49951b4b17ae2268f29a79b8",y=`._textContainer_mz6us_1 {
  display: grid;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  position: relative;
  grid-auto-rows: 15px;
}

._textContainer_mz6us_1 > div {
  grid-area: 1/1/ 2/ 2;
}

._textStroke_mz6us_14 {
  -webkit-text-fill-color: var(--background-color);
  -webkit-text-stroke: 1px var(--color);
  text-stroke: var(--stroke-width, 2px) var(--color);
  text-fill: var(--background-color);
}

._text_mz6us_1 {
  position: absolute;
  color: var(--color);
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=y,document.head.appendChild(t)}})();var r={textContainer:"_textContainer_mz6us_1",textStroke:"_textStroke_mz6us_14",text:"_text_mz6us_1"};import{getTypeographyStyles as _,typography as b,getStrProps as v}from"../../utils/framerControlProps.js";import{useRef as k}from"react";import{useScroll as C,motion as S,useTransform as h}from"framer-motion";import{getColorProps as z,getNumProps as d}from"../../utils/framerControlProps.js";import{ControlType as P}from"framer";import{jsx as n,jsxs as w}from"react/jsx-runtime";var u=({scrollAmount:t=-100,text:e="example",scrollProgress:s})=>{let a=h(s,[0,1],[0,t]);return n(S.div,{className:r.textStroke,style:{y:a,x:0},children:e})},W=({text:t="Scrolly Bau5",typography:e,strokeWidth:s,backgroundColor:a="#fff",offset:l=15,animationFrom:i="bottom-center"})=>{let c=k(null),x=(()=>{if(i==="bottom-center")return["start end","center center"];if(i==="center-top")return["start center","end start"];if(i==="bottom-top")return["start end","end start"]})(),{scrollYProgress:m}=C({target:c,offset:x}),f=Array(3).fill("");return w("div",{ref:c,className:r.textContainer,style:{..._({...e,fontSize:e?.fontSize||100}),"--stroke-width":s+"px","--background-color":a},children:[f.map((g,o)=>n(u,{scrollProgress:m,scrollAmount:(o+1)*(-1*l),text:t},o)).reverse()," ",f.map((g,o)=>n(u,{scrollProgress:m,scrollAmount:(o+1)*l,text:t},o)).reverse()," ",n("div",{className:r.text,children:t})]})},F={typography:b,text:v("Oshe"),backgroundColor:z("#fff"),strokeWidth:d(2,!0,1,{min:1,max:10}),offset:d(10,!1,10,{min:10,max:100}),animationFrom:{title:"Animation From",type:P.Enum,options:["center-top","bottom-center","bottom-top"],optionTitles:["Center-top of screen","Bottom-center of screen","Bottom-top of screen"]}};export{W as TextRepeatOnScroll,F as propsControls};
