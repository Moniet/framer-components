var e="4220b496a673fc4b8a3c1de735dece5ec792a80778d44c98e80025b8bbc36667",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as c}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[d,n]=r();return c("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
