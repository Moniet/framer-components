import*as r from"react";var i="9af9dbdcd09e2d5199de8fd26a092ec982e4a2173004a6e2e3e4c0ef869a2a4f",u=`._grid_gtm9n_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(i)){var e=document.createElement("style");e.id=i,e.textContent=u,document.head.appendChild(e)}})();var a={grid:"_grid_gtm9n_1",gridWrapper:"_gridWrapper_gtm9n_15"};import{ControlType as t}from"framer";import{GridExample as c}from"./GridExample.js";import{jsx as n}from"react/jsx-runtime";var x=({children:e,minWidth:p=100,maxWidth:d=200,gap:m=10,justify:o="center"})=>{let s=r.useMemo(()=>r.Children.count(e)===1?a.gridWrapper:a.grid,[e]);return n("div",{className:s,style:{"--min":p+"px","--max":d+"px","--gap":m+"px","--justify":o},children:e||n(c,{})})},v={minWidth:{type:t.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:t.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:t.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:t.Array,control:{type:t.ComponentInstance}},justify:{type:t.Enum,defaultValue:"center",options:["center","start","end","space-evenly","space-between","stretch"],optionTitles:["Center","Left","Right","Evenly","Between","Stretch"]}};export{x as AutoGrid,v as propsControls};
