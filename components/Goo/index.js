var r="34fa2a98503c633454cb5c36f40e4cd86aa5815ca23b2b6cf05fb4c90ae07a30",l=`@keyframes _fc-oscillate_z8lwo_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(r)){var e=document.createElement("style");e.id=r,e.textContent=l,document.head.appendChild(e)}})();var n={dot:"_dot_z8lwo_19",fcOscillate:"_fc-oscillate_z8lwo_1",defaultContainer:"_defaultContainer_z8lwo_27",fcSpin:"_fc-spin_z8lwo_1",container:"_container_z8lwo_33",children:"_children_z8lwo_39"};import{ControlType as s}from"framer";import{DefaultGoo as c}from"./DefaultGoo.js";import{Fragment as d,jsx as t,jsxs as i}from"react/jsx-runtime";var u=({children:e,br:f=0,id:a="123"})=>{let o=`fc-goo-${a}`;return i(d,{children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:0,height:0,children:t("defs",{children:i("filter",{id:o,children:[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),t("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),t("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),t("div",{className:n.children,style:{filter:`url(#${o})`},children:e||t(c,{})})]})},w={children:{type:s.ComponentInstance}};export{u as Goo,w as propsControls};