import*as i from"react";var a="d88b99e4bc019e5f0f85174ed43d350cf9719714f283ae03fea9876d71f09796",u=`._grid_ugxsu_1 {
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--gap, 0.5rem);
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min, 100px), var(--max, 300px))
  );
}

._gridWrapper_ugxsu_12 > div {
  width: 100%;
  height: 100%;
  display: grid;
  gap: var(--gap, 0.5rem);
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min, 100px), var(--max, 300px))
  );
}
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=u,document.head.appendChild(e)}})();var t={grid:"_grid_ugxsu_1",gridWrapper:"_gridWrapper_ugxsu_12"};import{ControlType as r}from"framer";import{DefaultGrid as n}from"./GridExample.js";import{jsx as p}from"react/jsx-runtime";var y=({children:e=p(n,{}),minWidth:d=100,maxWidth:m=200,gap:o=10})=>{let s=i.useMemo(()=>Array.isArray(e)?e?.length===1?t.gridWrapper:t.grid:t.grid,[e]);return p("div",{className:s,style:{"--min":d+"px","--max":m+"px","--gap":o+"px"},children:e})},c={minWidth:{type:r.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:r.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:r.Number,defaultValue:10,displayStepper:!0,step:5}};export{y as AutoGrid,c as propsControls};
