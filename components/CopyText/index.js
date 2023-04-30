import{getSingleChild as d,getStrProps as a}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="622043b16b48c5ae00fdba463efeb3cb7e47e008ccb476dc2a4fbe3bd75c234c",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var c={copyText:"_copyText_mcnc2_1"};import{jsx as n}from"react/jsx-runtime";var b=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return n("div",{className:c.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||n(l,{})})},y={children:d(),text:a("Example Text To Copy!")};export{b as CopyText,y as propsControls};
