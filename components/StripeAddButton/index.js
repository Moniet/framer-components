var e="1856a5b8a8ab2751356c8eea13d6bba018b1837c09d5a1709216142fac10e096",a=`._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
}
`;(function(){if(globalThis.window&&!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.textContent=a,document.head.appendChild(t)}})();var o={btn:"_btn_1ek6r_1"};import{useStripeState as i}from"../../hooks/useStripeState.js";import{jsx as r}from"react/jsx-runtime";var f=({label:t="Button"})=>{let[d,n]=i();return r("div",{className:o.btn,onClick:()=>n("item"),children:t})};export{f as Button};
