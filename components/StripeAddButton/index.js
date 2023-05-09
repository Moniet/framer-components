var e="e01c891e46b7fcfa580d4d07ef2272cba3e83b2defc0c35da231f5db7fc5743f",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[c,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
