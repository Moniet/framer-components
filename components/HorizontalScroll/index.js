import{ControlType as r}from"framer";import{getSingleChild as l}from"../../utils/framerControlProps.js";var n="8bc34c42c86f7db5e56370630748bc4581226355ecf933fb3ab6e03df7bcd259",i=`._container_w1opf_1 {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
}

._containerSingle_w1opf_12 > div {
  display: flex;
  flex-wrap: nowrap;
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  overflow-x: scroll !important;
  overflow-y: hidden;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var o=document.createElement("style");o.id=n,o.textContent=i,document.head.appendChild(o)}})();var t={container:"_container_w1opf_1",containerSingle:"_containerSingle_w1opf_12"};import{Children as a}from"react";import{jsx as c}from"react/jsx-runtime";var s=({children:o})=>{let e=a.count(o);return c("div",{className:e===1?t.containerSingle:t.container,children:o})},w={children:{type:r.Array,control:l()}};export{s as HorizontalScroll,w as propsControls};
