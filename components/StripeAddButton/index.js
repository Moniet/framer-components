var e="7f050b85ec641c59f10133158dd0e247ef13a36145db2ac5efa509854c528c0c",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as c}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[d,n]=r();return c("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
