var e="54a9e4a47aa1dc71ea0ad8f33d97c70441b7ee681876d7acda7fbe7dbb913a12",a=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=a,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as d}from"../../hooks/useStripeState.js";import{jsx as i}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[r,n]=d();return i("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
