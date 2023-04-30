var e="1d5ece3a6daf8541224f02684cd8ed132fd77d26a4f4ffd01f253fa0f36d3f5d",n=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[a,d]=i();return r("div",{className:o.btn,onClick:()=>d("item"),children:t})};export{m as Button};
