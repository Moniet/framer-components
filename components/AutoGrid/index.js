import*as r from"react";var n="4ece26b14e8280e72fe475e4955898218d0c163bdcd09ff28fe2e2c2409b9497",u=`._grid_gtm9n_1 {
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  display: grid;
  gap: var(--gap, 0.5rem);
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min, 100px), var(--max, 300px))
  );
  justify-content: var(--justify, center);
}

._gridWrapper_gtm9n_15 > div {
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  display: grid;
  gap: var(--gap, 0.5rem);
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min, 100px), var(--max, 300px))
  );
  justify-content: var(--justify, center);
}
`;(function(){if(globalThis.window&&!document.getElementById(n)){var e=document.createElement("style");e.id=n,e.textContent=u,document.head.appendChild(e)}})();var i={grid:"_grid_gtm9n_1",gridWrapper:"_gridWrapper_gtm9n_15"};import{ControlType as t}from"framer";import{GridExample as c}from"./GridExample.js";import{jsx as p}from"react/jsx-runtime";var x=({children:e,minWidth:a=100,maxWidth:m=200,gap:o=10,justify:d="center"})=>{let s=r.useMemo(()=>r.Children.count(e)===1?i.gridWrapper:i.grid,[e]);return p("div",{className:s,style:{"--min":a+"px","--max":m+"px","--gap":o+"px","--justify":d},children:e||p(c,{})})},v={minWidth:{type:t.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:t.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:t.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:t.Array,control:{type:t.ComponentInstance}},justify:{type:t.Enum,defaultValue:"center",options:["center","start","end","space-evenly","space-between","stretch"],optionTitles:["Center","Left","Right","Evenly","Between","Stretch"]}};export{x as AutoGrid,v as propsControls};
