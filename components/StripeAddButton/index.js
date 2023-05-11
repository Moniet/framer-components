var e="3c782c6d3ea9fcdf6e0017d725f1c4eb4fc2c5208a4d0c56d7366fb0809cbf40",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as c}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[d,n]=r();return c("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
