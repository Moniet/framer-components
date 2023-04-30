import*as i from"react";var p="d58f4a3ca4c77ac261206b9cf561c5e16384a30b95ca2aa365212262ded61242",s=`._grid_zgbfp_1 {
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
}

._gridWrapper_zgbfp_14 > div {
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
}
`;(function(){if(globalThis.window&&!document.getElementById(p)){var t=document.createElement("style");t.id=p,t.textContent=s,document.head.appendChild(t)}})();var r={grid:"_grid_zgbfp_1",gridWrapper:"_gridWrapper_zgbfp_14"};import{ControlType as e}from"framer";import{DefaultGrid as g}from"./GridExample.js";import{jsx as a}from"react/jsx-runtime";var f=({children:t=a(g,{}),minWidth:d=100,maxWidth:m=200,gap:n=10})=>{let o=i.useMemo(()=>Array.isArray(t)?t?.length===1?r.gridWrapper:r.grid:r.grid,[t]);return a("div",{className:o,style:{"--min":d+"px","--max":m+"px","--gap":n+"px"},children:t})},y={minWidth:{type:e.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:e.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:e.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:e.Array,control:{type:e.ComponentInstance}}};export{f as AutoGrid,y as propsControls};
