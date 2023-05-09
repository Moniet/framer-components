import*as o from"react";import{ControlType as r}from"framer";var m="a808232af8c1208f6c09a19592f5d3af174c8de8fcafd1afe5c56f441a097b42",T=`._container_1gw4l_1 {
  cursor: none;
  position: relative;
  width: fit-content;
  height: fit-content;
  min-width: 100px;
  min-height: 100px;
  background-color: var(--bg-color, #fff);
}

._cursor_1gw4l_11 {
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  margin-top: calc(-1 * (var(--size) / 2));
  margin-left: calc(-1 * (var(--size) / 2));
}

._cursor_1gw4l_11 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

._cursorWrapper_1gw4l_25 {
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
`;(function(){if(globalThis.window&&!document.getElementById(m)){var s=document.createElement("style");s.id=m,s.textContent=T,document.head.appendChild(s)}})();var a={container:"_container_1gw4l_1",cursor:"_cursor_1gw4l_11",cursorWrapper:"_cursorWrapper_1gw4l_25"};import{jsx as u,jsxs as z}from"react/jsx-runtime";var C="https://labs.moniet.dev/framer-components/public/default-cursor.png",L=({cursor:s,children:v,size:p=45,delay:g=.3,scaleIn:h=!0,fadeIn:_=!0,backgroundColor:w="#fff"})=>{let f=o.useRef(),x=o.useRef(),e=o.useRef(null),y=o.useRef({left:0,top:0,height:0,width:0}),d=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,l=t.clientX-c;e.current?.style.setProperty("--x",l+"px"),e.current?.style.setProperty("--y",i+"px")};return o.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:l,left:R}=f.current?.getBoundingClientRect()||{},b={left:R,top:l,width:c,height:i};y.current=b,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),z("div",{ref:f,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",d(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{d(t)},style:{"--bg-color":w},children:[v,u("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${p}px`,"--scale":h?0:1,"--opacity":_?0:1,"--delay":`${g}s`},children:u("div",{ref:x,className:a.cursor,"aria-hidden":!0,style:{"--size":`${p}px`},children:u("img",{alt:"cursor",src:s?.src||C})})})]})},N={cursor:{type:r.ResponsiveImage},children:{type:r.ComponentInstance},size:{type:r.Number,defaultValue:45},scaleIn:{type:r.Boolean,defaultValue:!0},fadeIn:{type:r.Boolean,defaultValue:!0},delay:{type:r.Number,min:0,max:2,step:.05,defaultValue:.3},backgroundColor:{type:r.Color,defaultValue:"#fff"}};export{L as CustomCursorOnHover,N as propControls};
