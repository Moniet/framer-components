var e="361e600b8553d0d2b44672ca2eabdc74376dc9bb0fec87e86ebf42008aabf3b9",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as d}from"react/jsx-runtime";var b=({label:t="Button"})=>{let[a,n]=r();return d("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{b as Button};
