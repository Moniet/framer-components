var e="96b0d06647db2405d75cdce896f94a7a61f9d82a66791ecc02a7dd76a4052399",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[a,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
