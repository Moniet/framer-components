var c="e2720fe8f337aef24bc0ea533e362ac1e92df56e34623448a16c67048e536017",x=`._textContainer_rp0hp_1 {
  display: grid;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 40px);
  font-weight: var(--font-weight, bold);
  color: var(--color, #000);
  position: relative;
  grid-auto-rows: 15px;
}

._textContainer_rp0hp_1 > div {
  grid-area: 1/1/ 2/ 2;
}

._textStroke_rp0hp_15 {
  -webkit-text-fill-color: var(--background-clor);
  -webkit-text-stroke: 1px var(--color);
  text-stroke: var(--stroke-width, 2px) var(--color);
  text-fill: var(--background-color);
}

._text_rp0hp_1 {
  position: absolute;
}
`;(function(){if(globalThis.window&&!document.getElementById(c)){var t=document.createElement("style");t.id=c,t.textContent=x,document.head.appendChild(t)}})();var r={textContainer:"_textContainer_rp0hp_1",textStroke:"_textStroke_rp0hp_15",text:"_text_rp0hp_1"};import{getTypeographyStyles as m,typography as g,getStrProps as _}from"../../utils/framerControlProps.js";import{useRef as u}from"react";import{useScroll as y,motion as v,useTransform as h}from"framer-motion";import{getColorProps as k,getNumProps as b}from"../../utils/framerControlProps.js";import{jsx as s,jsxs as S}from"react/jsx-runtime";var f=({scrollAmount:t=-100,text:e="example",scrollProgress:n})=>{let a=h(n,[0,1],[0,t]);return s(v.div,{className:r.textStroke,style:{y:a,x:0},children:e})},A=({text:t="Scrolly Bau5",typography:e,strokeWidth:n,backgroundColor:a="#fff"})=>{let l=u(null),{scrollYProgress:i}=y({target:l,offset:["start end","end start"]}),p=Array(3).fill("");return S("div",{ref:l,className:r.textContainer,style:{...m({...e,fontSize:e?.fontSize||100}),"--stroke-width":n+"px","--background-color":a},children:[p.map((d,o)=>s(f,{scrollProgress:i,scrollAmount:(o+1)*-15,text:t},o)).reverse()," ",p.map((d,o)=>s(f,{scrollProgress:i,scrollAmount:(o+1)*15,text:t},o)).reverse()," ",s("div",{className:r.text,children:t})]})},B={typography:g,text:_("Oshe"),backgroundColor:k("#fff"),strokeWidth:b(2,!0,1,{min:1,max:10})};export{A as TextRepeatOnScroll,B as propsControls};
