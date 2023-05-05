var e="7d5eb2d48fbe5ee602ecc08b40dcaf2cfc4372523ee88be3a5eb67a5c1e75790",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as c}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[d,n]=r();return c("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
