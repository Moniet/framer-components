var e="f6956d69f4440f01897a5ef1b4e7951f57bebbcb886b6573b878e885b41f32b7",i=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=i,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as r}from"../../hooks/useStripeState.js";import{jsx as s}from"react/jsx-runtime";var b=({label:t="Button"})=>{let[d,n]=r();return s("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{b as Button};
