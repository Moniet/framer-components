import*as r from"react";var n="1076b8bb8c4192414a16ef594f9c354c23359f436c509458017ac111ab163a72",u=`._grid_gtm9n_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.textContent=u,document.head.appendChild(t)}})();var i={grid:"_grid_gtm9n_1",gridWrapper:"_gridWrapper_gtm9n_15"};import{ControlType as e}from"framer";import{GridExample as c}from"./GridExample.js";import{jsx as a}from"react/jsx-runtime";var x=({children:t,minWidth:p=100,maxWidth:m=200,gap:o=10,justify:s="center"})=>{let d=r.useMemo(()=>r.Children.count(t)===1?i.gridWrapper:i.grid,[t]);return a("div",{className:d,style:{"--min":p+"px","--max":m+"px","--gap":o+"px","--justify":s},children:t||a(c,{})})},v={minWidth:{type:e.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:e.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:e.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:e.Array,control:{type:e.ComponentInstance}},justify:{type:e.Enum,defaultValue:"center",options:["center","start","end","space-evenly","space-between","stretch"],optionTitles:["Center","Left","Right","Evenly","Between","Stretch"]}};export{x as AutoGrid,v as propsControls};
