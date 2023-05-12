import{ControlType as i}from"framer";import{getSingleChild as r}from"../../utils/framerControlProps.js";var o="004f12b246d883e79ac73171fbbe89cfc8b20bb9d6fc43a96e859a1ea9374d17",n=`._container_w6t1x_1 {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
}

._containerSingle_w6t1x_11 > div {
  display: flex;
  flex-wrap: nowrap;
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  overflow-x: scroll !important;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var t=document.createElement("style");t.id=o,t.textContent=n,document.head.appendChild(t)}})();var e={container:"_container_w6t1x_1",containerSingle:"_containerSingle_w6t1x_11"};import{jsx as a}from"react/jsx-runtime";var m=({children:t})=>a("div",{className:e.container,children:t}),s={children:{type:i.Array,control:r()}};export{m as HorizontalScroll,s as propsControls};
