var i="e93741510e039385195c691c64701873115d14b397572864521353f732fe8c89",f=`@keyframes _fc-oscillate_fijmv_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=f,document.head.appendChild(e)}})();var o={dot:"_dot_fijmv_19",fcOscillate:"_fc-oscillate_fijmv_1",defaultContainer:"_defaultContainer_fijmv_27",fcSpin:"_fc-spin_fijmv_1",container:"_container_fijmv_33",children:"_children_fijmv_39"};import{ControlType as n}from"framer";import{DefaultGoo as c}from"./DefaultGoo.js";import{Fragment as d,jsx as t,jsxs as a}from"react/jsx-runtime";var v=({children:e,br:l=0,id:s="123"})=>{let r=`fc-goo-${s}`;return a(d,{children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",children:t("defs",{children:a("filter",{id:r,children:[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),t("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),t("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),t("div",{className:o.children,style:{filter:`url(#${r})`},children:e||t(c,{})})]})},h={children:{type:n.Array,controls:{type:n.ComponentInstance}},br:{}};export{v as Goo,h as propsControls};
