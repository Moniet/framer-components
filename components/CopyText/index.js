import{getSingleChild as a,getStrProps as d}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="539713f462fd2af4805f55cadc0019a56034c368292afcc8d3d018153646ff0a",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var c={copyText:"_copyText_mcnc2_1"};import{jsx as n}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return n("div",{className:c.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||n(l,{})})},g={children:a(),text:d("Example Text To Copy!")};export{y as CopyText,g as propsControls};
