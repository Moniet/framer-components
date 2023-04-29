var e="79f22f3a5412f4bce561ec425a5fe4586b7f12a3542f365aefde359821f65b08",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as a}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[s,n]=r();return a("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
