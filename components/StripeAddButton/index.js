var e="facd3ededda8e5233d7e11fabe393232c1bccda331b21d3abde79856e7120eb0",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[a,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
