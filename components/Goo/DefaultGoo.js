var n="135a62688cde63db8f51ab0a0990fc38a8a5f5d464f3142cd610234afea5f1be",r=`@keyframes _fc-oscillate_z8lwo_1 {
  0% {
    transform: translateY(var(--from));
  }
  100% {
    transform: translateY(var(--to));
  }
}

@keyframes _fc-spin_z8lwo_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dot_z8lwo_19 {
  animation: _fc-oscillate_z8lwo_1 1.5s ease-in-out alternate infinite;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
}

._defaultContainer_z8lwo_27 {
  padding: 1rem;
  transform-origin: center;
  animation: _fc-spin_z8lwo_1 3s ease-in-out infinite;
}

._container_z8lwo_33 {
  width: 100%;
  height: 100%;
  border-radius: var(--br, 0px);
}

._children_z8lwo_39 {
  width: fit-content;
  height: fit-content;
  min-width: 100px;
  min-height: 100px;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=r,document.head.appendChild(t)}})();var o={dot:"_dot_z8lwo_19",fcOscillate:"_fc-oscillate_z8lwo_1",defaultContainer:"_defaultContainer_z8lwo_27",fcSpin:"_fc-spin_z8lwo_1",container:"_container_z8lwo_33",children:"_children_z8lwo_39"};import{jsx as e,jsxs as d}from"react/jsx-runtime";var a=({from:t,to:i})=>e("div",{style:{"--from":t,"--to":i},className:o.dot}),f=()=>d("div",{className:o.defaultContainer,children:[e(a,{from:"0px",to:"-25px"}),e(a,{from:"0px",to:"25px"})]});export{f as DefaultGoo};
