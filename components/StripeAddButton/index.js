var e="c777eaa4b7c10a8bcfcf84dad7c3ac67ea92a46ff2bf8d4725d67ad269a3fc6a",n=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[d,a]=i();return r("div",{className:o.btn,onClick:()=>a("item"),children:t})};export{m as Button};
