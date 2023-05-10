import{useStripeState as c}from"../../hooks/useStripeState.js";var n="c0a1540669f08152226c441623fb441b0224ff42a9ff1013c5addd4322b56bbf",s=`._container_12znn_1 {
  width: var(--fc-sc-width, 30px);
  height: var(--fc-sc-width, 30px);
  position: relative;
}

._badge_12znn_7 {
  --fc-sc-badge-bg: rgb(40, 65, 252);
  --fc-sc-badge-color: rgb(255, 255, 255);
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  font-family: inherit;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--fc-sc-badge-bg);
  color: var(--fc-sc-badge-color);
  transform: translate(50%, -50%);
  line-height: 0;
  aspect-ratio: 1/1;
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=s,document.head.appendChild(t)}})();var o={container:"_container_12znn_1",badge:"_badge_12znn_7"};import{ControlType as d,addPropertyControls as l}from"framer";import{jsx as e,jsxs as a}from"react/jsx-runtime";var p=()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[e("path",{d:"M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),e("path",{d:"M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]}),r=({Icon:t})=>{let[i]=c();return a("div",{className:o.container,children:[e(t,{}),e("div",{className:o.badge,children:i?.length})]})};l(r,{Icon:{title:"Icon",type:d.File,allowedFileTypes:[".svg",".png",".jpg"]}});r.defaultProps={Icon:p};export{r as StripeCart};
