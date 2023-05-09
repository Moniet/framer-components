import{ControlType as e}from"framer";var p=(t,r,o,n)=>({type:e.Number,defaultValue:t,displayStepper:r,...n??{},...o?{step:o}:{}}),l=t=>({type:e.String,defaultValue:t}),s=()=>({type:e.ComponentInstance}),u=()=>({type:e.Array,control:{type:e.ComponentInstance}}),i={x:{type:e.Number,displayStepper:!0,defaultValue:0},y:{type:e.Number,displayStepper:!0,defaultValue:0},blur:{type:e.Number,displayStepper:!0,defaultValue:20},color:{type:e.Color,defaultValue:"rgba(0,0,0,0.08)"},size:{type:e.Number,displayStepper:!0,defaultValue:0}},m={type:e.Enum,options:["ease","ease-in-out","ease-out","ease-in","linear"],optionTitles:["Ease","Ease-In-Out","Ease-Out","Ease-In","Linear"],defaultValue:"ease"},y={type:e.Object,controls:{letterSpacing:p(0,!1,1,{min:0,max:100}),fontSize:{type:e.Number,defaultValue:20,min:1,max:100},fontWeight:{type:e.Number,defaultValue:400},font:{type:e.String,default:"Helvetica, sans-serif"},color:{type:e.Color,default:"#555"}}},f=t=>({"--font-family":t?.font||"inherit","--font-size":(t?.fontSize||50)+"px","--font-weight":t?.fontWeight||600,"--color":t?.color||"#222"}),c=t=>({type:e.Boolean,defaultValue:t});export{i as boxShadowProps,m as easingProps,c as getBoolProps,u as getMultipleChildren,p as getNumProps,s as getSingleChild,l as getStrProps,f as getTypeographyStyles,y as typography};
