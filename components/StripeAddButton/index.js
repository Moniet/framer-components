var e="2c275a8143a216bbeb13c2ee26aca2422973feb3f5e17d35e76d25ca9b13a640",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as a}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[d,n]=r();return a("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
