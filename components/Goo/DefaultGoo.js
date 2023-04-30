var a="2e8bd0abe056940feee7a56fa9cf72030904cd8a0e96dc8fc82b697a9c10074d",r=`@keyframes _fc-oscillate_fijmv_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(a)){var t=document.createElement("style");t.id=a,t.textContent=r,document.head.appendChild(t)}})();var e={dot:"_dot_fijmv_19",fcOscillate:"_fc-oscillate_fijmv_1",defaultContainer:"_defaultContainer_fijmv_27",fcSpin:"_fc-spin_fijmv_1",container:"_container_fijmv_33",children:"_children_fijmv_39"};import{jsx as i,jsxs as f}from"react/jsx-runtime";var n=({from:t,to:o})=>i("div",{style:{"--from":t,"--to":o},className:e.dot}),s=()=>f("div",{className:e.defaultContainer,children:[i(n,{from:"0px",to:"-25px"}),i(n,{from:"0px",to:"25px"})]});export{s as DefaultGoo};
