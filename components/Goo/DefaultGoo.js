var n="e93741510e039385195c691c64701873115d14b397572864521353f732fe8c89",a=`@keyframes _fc-oscillate_fijmv_1 {
  0% {
    transform: translateY(var(--from));
  }
  100% {
    transform: translateY(var(--to));
  }
}

@keyframes _fc-spin_fijmv_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dot_fijmv_19 {
  animation: _fc-oscillate_fijmv_1 1.5s ease-in-out alternate infinite;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
}

._defaultContainer_fijmv_27 {
  padding: 1rem;
  transform-origin: center;
  animation: _fc-spin_fijmv_1 3s ease-in-out infinite;
}

._container_fijmv_33 {
  width: 100%;
  height: 100%;
  border-radius: var(--br, 0px);
}

._children_fijmv_39 {
  width: 100%;
  height: 100%;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=a,document.head.appendChild(t)}})();var e={dot:"_dot_fijmv_19",fcOscillate:"_fc-oscillate_fijmv_1",defaultContainer:"_defaultContainer_fijmv_27",fcSpin:"_fc-spin_fijmv_1",container:"_container_fijmv_33",children:"_children_fijmv_39"};import{jsx as i,jsxs as f}from"react/jsx-runtime";var o=({from:t,to:r})=>i("div",{style:{"--from":t,"--to":r},className:e.dot}),m=()=>f("div",{className:e.defaultContainer,children:[i(o,{from:"0px",to:"-25px"}),i(o,{from:"0px",to:"25px"})]});export{m as DefaultGoo};
