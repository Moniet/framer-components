var n="9455c719c13715f81e084840862e4222801fc5055b59471643d9b6a51bd1cc46",r=`@keyframes _fc-oscillate_z8lwo_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=r,document.head.appendChild(t)}})();var o={dot:"_dot_z8lwo_19",fcOscillate:"_fc-oscillate_z8lwo_1",defaultContainer:"_defaultContainer_z8lwo_27",fcSpin:"_fc-spin_z8lwo_1",container:"_container_z8lwo_33",children:"_children_z8lwo_39"};import{jsx as e,jsxs as l}from"react/jsx-runtime";var i=({from:t,to:a})=>e("div",{style:{"--from":t,"--to":a},className:o.dot}),c=()=>l("div",{className:o.defaultContainer,children:[e(i,{from:"0px",to:"-25px"}),e(i,{from:"0px",to:"25px"})]});export{c as DefaultGoo};
