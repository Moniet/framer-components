var e="27fa47348959cbc7f3cc90011760e02122e74ee67b64b51eb24562ee8e12e3e2",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as s}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[c,n]=r();return s("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
