var m="51e53a344b916b4e45bff52de9b8b268e83edaf5fdd80ae5d56e47310cb3f4d2",u=`._textContainer_14gvf_1 {
  display: grid;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  letter-spacing: var(--letter-spacing);
  position: relative;
  grid-auto-rows: 15px;
  height: 100%;
  width: fit-content;
}

._textContainer_14gvf_1 > div {
  grid-area: 1/1/ 2/ 2;
}

._textStroke_14gvf_17 {
  -webkit-text-fill-color: var(--background-color);
  -webkit-text-stroke: 1px var(--color);
  text-stroke: var(--stroke-width, 2px) var(--color);
  text-fill: var(--background-color);
}

._text_14gvf_1 {
  position: absolute;
  color: var(--color);
  white-space: nowrap;
}
`;(function(){if(globalThis.window&&!document.getElementById(m)){var t=document.createElement("style");t.id=m,t.textContent=u,document.head.appendChild(t)}})();var r={textContainer:"_textContainer_14gvf_1",textStroke:"_textStroke_14gvf_17",text:"_text_14gvf_1"};import{getTypeographyStyles as b,typography as _,getStrProps as y}from"../../utils/framerControlProps.js";import{useRef as k}from"react";import{useScroll as h,motion as C,useTransform as S}from"framer-motion";import{getColorProps as w,getNumProps as d}from"../../utils/framerControlProps.js";import{ControlType as P}from"framer";import{jsx as n,jsxs as T}from"react/jsx-runtime";var x=({scrollAmount:t=-100,text:e="example",scrollProgress:s})=>{let a=S(s,[0,1],[0,t]);return n(C.div,{className:r.textStroke,style:{y:a,x:0},children:e})},W=({text:t="Scrolly Bau5",typography:e,strokeWidth:s,backgroundColor:a="#fff",offset:l=15,animationFrom:i="bottom-center"})=>{let c=k(null),g=(()=>{if(i==="bottom-center")return["start end","center center"];if(i==="center-top")return["start center","end start"];if(i==="bottom-top")return["start end","end start"]})(),{scrollYProgress:f}=h({target:c,offset:g}),p=Array(3).fill("");return T("div",{ref:c,className:r.textContainer,style:{...b({...e,fontSize:e?.fontSize||100,color:e?.color||"#000"}),"--stroke-width":s+"px","--background-color":a},children:[p.map((v,o)=>n(x,{scrollProgress:f,scrollAmount:(o+1)*(-1*l),text:t},o)).reverse()," ",p.map((v,o)=>n(x,{scrollProgress:f,scrollAmount:(o+1)*l,text:t},o)).reverse()," ",n("div",{className:r.text,children:t})]})},F={typography:_,text:y("Oshe"),backgroundColor:w("#fff"),strokeWidth:d(2,!0,1,{min:1,max:10}),offset:d(5,!1,5,{min:1,max:100}),animationFrom:{title:"Animation From",type:P.Enum,options:["center-top","bottom-center","bottom-top"],optionTitles:["Center-top of screen","Bottom-center of screen","Bottom-top of screen"]}};export{W as TextRepeatOnScroll,F as propsControls};
