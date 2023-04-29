import*as r from"react";import{ControlType as o}from"framer";var v="f5b60eccaa414ed6ea5142dce3384333fb88dbda6d8edd2facd0d3c33b57e41a",P=`._container_xvrce_1 {
  cursor: none;
  position: relative;
  width: fit-content;
  height: fit-content;
}

._cursor_xvrce_8 {
  width: var(--size);
  height: var(--size);
  pointer-events: none;
}

._cursor_xvrce_8 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

._cursorWrapper_xvrce_20 {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  opacity: var(--opacity);
  transform: translateX(var(--x)) translateY(var(--y)) scale(var(--scale));
  transition: transform var(--delay) ease-out;
}
`;(function(){if(globalThis.window&&!document.getElementById(v)){var s=document.createElement("style");s.id=v,s.textContent=P,document.head.appendChild(s)}})();var a={container:"_container_xvrce_1",cursor:"_cursor_xvrce_8",cursorWrapper:"_cursorWrapper_xvrce_20"};import{jsx as l,jsxs as M}from"react/jsx-runtime";var m="https://s3-alpha-sig.figma.com/img/e03c/2a53/d457b0d9cb93b7735873023f9f6f7691?Expires=1683504000&Signature=exgquu-lwlVoFNW~LVvKKdP0RMnDInLZ9VBToBR7VlrizcffwDRabWfPt7OX7KjasQc05RtbuPK7UMM0zzCpQnnXrv99rX0yd6t8jddCeWRcjPrDuWObgcj3duLhJ1J5mybS3r4V3LxzZLA5BZbxL98Sau2xw6xsaaKQIcUnl8F~BLkAPEvDKVKqor8dKGmcM1pnZ61E2L2oijo43sZSqeFvJzdH39dox8lt-AFVtSAJCsXYKsQSbD8cBVYFji9flCjOagzFaXxdBrIM91LURIcd3JORrYyMguqEFmUcY-L4GfJPbspyhLu1~FkgqLOrliBHedWpPjhJOv~MykIknw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",C=({cursor:s,children:x,size:d=45,delay:h=.3,scaleIn:_=!0,fadeIn:g=!0})=>{let p=r.useRef(),R=r.useRef(),e=r.useRef(null),y=r.useRef({left:0,top:0,height:0,width:0}),f=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,u=t.clientX-c;e.current?.style.setProperty("--x",u+"px"),e.current?.style.setProperty("--y",i+"px")};return r.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:u,left:b}=p.current?.getBoundingClientRect()||{},L={left:b,top:u,width:c,height:i};y.current=L,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),M("div",{ref:p,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",f(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{f(t)},children:[x,l("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${d}px`,"--scale":_?0:1,"--opacity":g?0:1,"--delay":`${h}s`},children:l("div",{ref:R,className:a.cursor,"aria-hidden":!0,style:{"--size":`${d}px`},children:l("img",{alt:"cursor",src:s.src||m})})})]})},z={cursor:{type:o.ResponsiveImage,defaultValue:m},children:{type:o.ComponentInstance},size:{type:o.Number,defaultValue:45},scaleIn:{type:o.Boolean,defaultValue:!0},fadeIn:{type:o.Boolean,defaultValue:!0},delay:{type:o.Number,min:0,max:2,step:.05,defaultValue:.3}};export{C as CustomCursorOnHover,z as propControls};
