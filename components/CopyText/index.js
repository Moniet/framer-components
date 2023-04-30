import{getSingleChild as a,getStrProps as d}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="31e604b859aaa7b6091f6f29934727d4a5b82a4aee1220ae041a6df46b735645",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as p}from"react/jsx-runtime";var y=({text:t="Example text",children:r})=>{let c=()=>navigator.clipboard.writeText(t);return p("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),c()},children:r||p(l,{})})},g={children:a(),text:d("Example Text To Copy!")};export{y as CopyText,g as propsControls};
