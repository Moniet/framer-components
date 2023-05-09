var e="608d16a1f23ac80dfc44f93fd34c4857fe4ae9c7eb7f105c783a7a7770e6e18f",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as a}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[d,n]=r();return a("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
