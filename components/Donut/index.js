import{motion as d}from"framer";var r="c9ba712d23af78eb66333347576b6e83023eeb03bf70532a63c5e8e369562141",m=`._circ_1g4f9_1 {
  stroke-width: var(--stroke-width, 5px);
}
`;(function(){if(globalThis.window&&!document.getElementById(r)){var t=document.createElement("style");t.id=r,t.textContent=m,document.head.appendChild(t)}})();var n={circ:"_circ_1g4f9_1"};import{getColorProps as g,getNumProps as e}from"../../utils/framerControlProps.js";import{jsx as i}from"react/jsx-runtime";var x=({strokeWidth:t=8,strokeColor:s="#000",size:o=100,progress:a=75,duration:c=2})=>{let p=a/100;return i("svg",{width:100,height:100,viewBox:"0 0 100 100",children:i(d.circle,{className:n.circ,cx:o*.5,cy:o*.5,r:o*.5-t,initial:{pathLength:0},animate:{pathLength:p},transition:{duration:c,type:"spring",bounce:.1},fill:"transparent",stroke:s,strokeLinecap:"round",style:{"--stroke-width":t+"px",transform:"rotate(-90deg)",transformOrigin:"center"}})})},b={strokeWidth:e(5,!0,1),strokeColor:g("#000"),size:e(200,!0,10,{min:50}),progress:e(75,!1,5,{min:0,max:100}),duration:e(2,!1,.1,{min:.1,max:5})};export{x as Donut,b as propsControls};
