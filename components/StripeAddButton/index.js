var e="aff2300fcdec0b298319cad52005ffe4ff1d0a0e067597485ddf06b638797d58",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var m=({label:t="Button"})=>{let[a,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{m as Button};
