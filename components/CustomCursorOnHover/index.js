import*as r from"react";import{ControlType as o}from"framer";var m="f9456320a4457335e36b50ed40669b1880b8eb41da7b517b276e60d236522fee",L=`._container_169ld_1 {
  cursor: none;
  position: relative;
  width: fit-content;
  height: fit-content;
}

._cursor_169ld_8 {
  width: var(--size);
  height: var(--size);
  pointer-events: none;
}

._cursor_169ld_8 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

._cursorWrapper_169ld_20 {
  z-index: 1000000;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  opacity: var(--opacity);
  transform: translateX(var(--x)) translateY(var(--y)) scale(var(--scale));
  transition: transform var(--delay) ease-out;
}
`;(function(){if(globalThis.window&&!document.getElementById(m)){var s=document.createElement("style");s.id=m,s.textContent=L,document.head.appendChild(s)}})();var a={container:"_container_169ld_1",cursor:"_cursor_169ld_8",cursorWrapper:"_cursorWrapper_169ld_20"};import{jsx as u,jsxs as M}from"react/jsx-runtime";var P="https://s3-alpha-sig.figma.com/img/e03c/2a53/d457b0d9cb93b7735873023f9f6f7691?Expires=1683504000&Signature=exgquu-lwlVoFNW~LVvKKdP0RMnDInLZ9VBToBR7VlrizcffwDRabWfPt7OX7KjasQc05RtbuPK7UMM0zzCpQnnXrv99rX0yd6t8jddCeWRcjPrDuWObgcj3duLhJ1J5mybS3r4V3LxzZLA5BZbxL98Sau2xw6xsaaKQIcUnl8F~BLkAPEvDKVKqor8dKGmcM1pnZ61E2L2oijo43sZSqeFvJzdH39dox8lt-AFVtSAJCsXYKsQSbD8cBVYFji9flCjOagzFaXxdBrIM91LURIcd3JORrYyMguqEFmUcY-L4GfJPbspyhLu1~FkgqLOrliBHedWpPjhJOv~MykIknw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",C=({cursor:s,children:v,size:d=45,delay:h=.3,scaleIn:_=!0,fadeIn:b=!0})=>{let p=r.useRef(),g=r.useRef(),e=r.useRef(null),y=r.useRef({left:0,top:0,height:0,width:0}),f=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,l=t.clientX-c;e.current?.style.setProperty("--x",l+"px"),e.current?.style.setProperty("--y",i+"px")};return r.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:l,left:x}=p.current?.getBoundingClientRect()||{},R={left:x,top:l,width:c,height:i};y.current=R,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),M("div",{ref:p,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",f(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{f(t)},children:[v,u("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${d}px`,"--scale":_?0:1,"--opacity":b?0:1,"--delay":`${h}s`},children:u("div",{ref:g,className:a.cursor,"aria-hidden":!0,style:{"--size":`${d}px`},children:u("img",{alt:"cursor",src:s?.src||P})})})]})},V={cursor:{type:o.ResponsiveImage},children:{type:o.ComponentInstance},size:{type:o.Number,defaultValue:45},scaleIn:{type:o.Boolean,defaultValue:!0},fadeIn:{type:o.Boolean,defaultValue:!0},delay:{type:o.Number,min:0,max:2,step:.05,defaultValue:.3}};export{C as CustomCursorOnHover,V as propControls};
