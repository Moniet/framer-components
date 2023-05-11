import{getSingleChild as d,getStrProps as a}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="3b162b7b6ab24868b8b1482703d714cc0128bce201db4fd1e45bb7ae87872da3",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as c}from"react/jsx-runtime";var f=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return c("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||c(l,{})})},y={children:d(),text:a("Example Text To Copy!")};export{f as CopyText,y as propsControls};
