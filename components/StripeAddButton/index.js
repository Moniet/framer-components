var e="720561fd8ce7a0d80d9b17fb68ff8a449685679d588a97a6eb12b3c92b801d8b",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[a,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
