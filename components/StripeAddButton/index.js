var e="0eaa37dfecf58342e8730be044610b15201e191912e4b39cd35e7d091994d5e5",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[s,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
