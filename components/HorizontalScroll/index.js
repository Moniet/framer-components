import{ControlType as i}from"framer";import{getSingleChild as r}from"../../utils/framerControlProps.js";var t="8b3c3a4d7e7545d78f5a88099cb55cfee016954a6ad5c7b4c61dd662458ef39e",n=`._container_w1opf_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(t)){var o=document.createElement("style");o.id=t,o.textContent=n,document.head.appendChild(o)}})();var e={container:"_container_w1opf_1",containerSingle:"_containerSingle_w1opf_12"};import{jsx as a}from"react/jsx-runtime";var f=({children:o})=>a("div",{className:e.container,children:o}),m={children:{type:i.Array,control:r()}};export{f as HorizontalScroll,m as propsControls};
