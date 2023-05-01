var e="c474cec39a467a985d2b515e1689f46ecd18d3c14d3cb4ea624e2bd2100c606a",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[c,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
