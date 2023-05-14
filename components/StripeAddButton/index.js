var e="1c4af146ebfb2ccb379255398c085b2f418fcde1b884bf961535f84ce346435e",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as c}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[s,n]=r();return c("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
