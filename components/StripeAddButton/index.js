var e="ddde3f0288670013c34f1a6eac0cf30c145c14d967b3d9cd644a251bdef33967",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[c,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
