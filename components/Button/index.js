var e="26a36bde64da91d48424284c23907580b56723a5c74d169f8c267f9ff4ee9ac4",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[a,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
