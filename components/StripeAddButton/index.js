var e="c14e6390c62375381ab82a90c11a728b585caaa3c41db9feaaab9a43e70cb283",n=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[c,a]=i();return r("div",{className:o.btn,onClick:()=>a("item"),children:t})};export{f as Button};
