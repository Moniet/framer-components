import{getSingleChild as d,getStrProps as l}from"../../utils/framerControlProps.js";import{CopyTextExample as s}from"./CopyTextExample.js";var o="943f81ebd50ff198d2363bc23be140f80601b8a7795734dbd161181052cf2d5c",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as c}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return c("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||c(s,{})})},g={children:d(),text:l("Example Text To Copy!")};export{y as CopyText,g as propsControls};
