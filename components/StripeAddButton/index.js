var e="9f26d04283e38cfd1534ca61ab9b2f62cc05512a0cbc1295343265ad1aa3123b",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as a}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[c,n]=r();return a("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
