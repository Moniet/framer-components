import*as i from"react";var a="00be63c0944f51672676924edfdf31a359c78e2f5777bddf81c2f324d66338f0",s=`._grid_ugxsu_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(a)){var e=document.createElement("style");e.id=a,e.textContent=s,document.head.appendChild(e)}})();var r={grid:"_grid_ugxsu_1",gridWrapper:"_gridWrapper_ugxsu_12"};import{ControlType as t}from"framer";import{DefaultGrid as u}from"./GridExample.js";import{jsx as p}from"react/jsx-runtime";var c=({children:e=p(u,{}),minWidth:d=100,maxWidth:m=200,gap:n=10})=>{let o=i.useMemo(()=>Array.isArray(e)?e?.length===1?r.gridWrapper:r.grid:r.grid,[e]);return p("div",{className:o,style:{"--min":d+"px","--max":m+"px","--gap":n+"px"},children:e})},y={minWidth:{type:t.Number,defaultValue:100,displayStepper:!0,step:100},maxWidth:{type:t.Number,defaultValue:300,displayStepper:!0,step:100},gap:{type:t.Number,defaultValue:10,displayStepper:!0,step:5},children:{type:t.Array,control:{type:t.ComponentInstance}}};export{c as AutoGrid,y as propsControls};
