import*as p from"react";var i="087de3659df5dc09dc1c90a964325fbea120cf40df4f065b18e6912d2248ac3e",u=`._grid_gtm9n_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var t=document.createElement("style");t.id=i,t.textContent=u,document.head.appendChild(t)}})();var r={grid:"_grid_gtm9n_1",gridWrapper:"_gridWrapper_gtm9n_15"};import{ControlType as e}from"framer";import{DefaultGrid as l}from"./GridExample.js";import{jsx as a}from"react/jsx-runtime";var h=({children:t=a(l,{}),minWidth:n=100,maxWidth:d=200,gap:m=10,justify:s="center"})=>{let o=p.useMemo(()=>Array.isArray(t)?t?.length===1?r.gridWrapper:r.grid:r.grid,[t]);return a("div",{className:o,style:{"--min":n+"px","--max":d+"px","--gap":m+"px","--justify":s},children:t})},x={minWidth:{type:e.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:e.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:e.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:e.Array,control:{type:e.ComponentInstance}},justify:{type:e.Enum,defaultValue:"center",options:["center","start","end","space-evenly","space-between","stretch"],optionTitles:["Center","Left","Right","Evenly","Between","Stretch"]}};export{h as AutoGrid,x as propsControls};
