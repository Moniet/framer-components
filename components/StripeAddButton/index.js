var e="681d86eba1bd6bddbeb4eddf0ce3a1d6bd957e030ec9c846cbe6b97c5684f062",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var b=({label:t="Button"})=>{let[c,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{b as Button};
