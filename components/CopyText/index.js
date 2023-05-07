import{getSingleChild as a,getStrProps as d}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="bbb9fe89449d3360633e0ab3504566ffc9f9f0a6b013ae4d9c9cee4439a430ba",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as c}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return c("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||c(l,{})})},g={children:a(),text:d("Example Text To Copy!")};export{y as CopyText,g as propsControls};
