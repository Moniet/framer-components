var e="dc83669c4e66240d07c6df4eda56d2ca822b4ae003a6529ca7a35d07d568232a",d=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=d,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as a}from"../../hooks/useStripeState.js";import{jsx as i}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[r,n]=a();return i("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
