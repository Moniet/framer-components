import{getSingleChild as d,getStrProps as l}from"../../utils/framerControlProps.js";import{CopyTextExample as s}from"./CopyTextExample.js";var o="81e5c37959157d924b99877857b4f72268d16fe8f5c855dc8e4494c5ba98c120",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var c={copyText:"_copyText_mcnc2_1"};import{jsx as n}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return n("div",{className:c.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||n(s,{})})},g={children:d(),text:l("Example Text To Copy!")};export{y as CopyText,g as propsControls};
