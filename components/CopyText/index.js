import{getSingleChild as d,getStrProps as a}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="38df13ccdc11e7a16be38b79cba76a310cc8bc220c6ad9d1940cda130fb7e712",i=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=i,document.head.appendChild(t)}})();var c={copyText:"_copyText_mcnc2_1"};import{jsx as n}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return n("div",{className:c.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||n(l,{})})},g={children:d(),text:a("Example Text To Copy!")};export{y as CopyText,g as propsControls};
