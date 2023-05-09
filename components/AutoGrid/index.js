import*as r from"react";var n="30c100d82abb6c9a57f92a1d31f2855c8b6d3e977d06b38141cfd708dc93cb8a",c=`._grid_gtm9n_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=c,document.head.appendChild(t)}})();var i={grid:"_grid_gtm9n_1",gridWrapper:"_gridWrapper_gtm9n_15"};import{ControlType as e}from"framer";import{GridExample as u}from"./GridExample.js";import{jsx as a}from"react/jsx-runtime";var x=({children:t,minWidth:p=100,maxWidth:d=200,gap:m=10,justify:o="center"})=>{let s=r.useMemo(()=>r.Children.count(t)===1?i.gridWrapper:i.grid,[t]);return a("div",{className:s,style:{"--min":p+"px","--max":d+"px","--gap":m+"px","--justify":o},children:t||a(u,{})})},v={minWidth:{type:e.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:e.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:e.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:e.Array,control:{type:e.ComponentInstance}},justify:{type:e.Enum,defaultValue:"center",options:["center","start","end","space-evenly","space-between","stretch"],optionTitles:["Center","Left","Right","Evenly","Between","Stretch"]}};export{x as AutoGrid,v as propsControls};
