var e="13a453dca64c7d9d14e8914e4aec181335c0ede9236b43ced4c6455452fbf138",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[c,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
