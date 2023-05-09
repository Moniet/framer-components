import{getSingleChild as i,getStrProps as a}from"../../utils/framerControlProps.js";import{CopyTextExample as l}from"./CopyTextExample.js";var o="5327d81e2ad91440ddd10ac6459418ee454f21f0023da3522af49d8ada819cd1",d=`._copyText_mcnc2_1 {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=d,document.head.appendChild(t)}})();var n={copyText:"_copyText_mcnc2_1"};import{jsx as c}from"react/jsx-runtime";var y=({text:t="Example text",children:p})=>{let r=()=>navigator.clipboard.writeText(t);return c("div",{className:n.copyText,role:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:p||c(l,{})})},g={children:i(),text:a("Example Text To Copy!")};export{y as CopyText,g as propsControls};
