var e="8a5c74a4f99622e3be0fb6415c5ff17abaf34e6153ba3989e38ae93d79a7ecc7",a=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=a,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[s,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
