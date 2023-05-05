import*as o from"react";import{ControlType as r}from"framer";var m="c0fb4cd41eadd15d93a3ed342e8e932376a7f5d3dfce0e766c0e7289083baba2",T=`._container_1gw4l_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(m)){var s=document.createElement("style");s.id=m,s.textContent=T,document.head.appendChild(s)}})();var a={container:"_container_1gw4l_1",cursor:"_cursor_1gw4l_11",cursorWrapper:"_cursorWrapper_1gw4l_25"};import{jsx as u,jsxs as z}from"react/jsx-runtime";var C="https://labs.moniet.dev/framer-components/public/default-cursor.png",L=({cursor:s,children:v,size:p=45,delay:g=.3,scaleIn:h=!0,fadeIn:_=!0,backgroundColor:w="#fff"})=>{let d=o.useRef(),x=o.useRef(),e=o.useRef(null),y=o.useRef({left:0,top:0,height:0,width:0}),f=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,l=t.clientX-c;e.current?.style.setProperty("--x",l+"px"),e.current?.style.setProperty("--y",i+"px")};return o.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:l,left:b}=d.current?.getBoundingClientRect()||{},R={left:b,top:l,width:c,height:i};y.current=R,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),z("div",{ref:d,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",f(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{f(t)},style:{"--bg-color":w},children:[v,u("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${p}px`,"--scale":h?0:1,"--opacity":_?0:1,"--delay":`${g}s`},children:u("div",{ref:x,className:a.cursor,"aria-hidden":!0,style:{"--size":`${p}px`},children:u("img",{alt:"cursor",src:s?.src||C})})})]})},N={cursor:{type:r.ResponsiveImage},children:{type:r.ComponentInstance},size:{type:r.Number,defaultValue:45},scaleIn:{type:r.Boolean,defaultValue:!0},fadeIn:{type:r.Boolean,defaultValue:!0},delay:{type:r.Number,min:0,max:2,step:.05,defaultValue:.3},backgroundColor:{type:r.Color,defaultValue:"#fff"}};export{L as CustomCursorOnHover,N as propControls};
