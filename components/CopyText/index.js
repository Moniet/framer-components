import{getSingleChild as d,getStrProps as a}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="85872db76492615ff359601e600c7eb71736a0a780f02c02e4e5e372964b699d",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as c}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return c("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||c(l,{})})},g={children:d(),text:a("Example Text To Copy!")};export{y as CopyText,g as propsControls};
