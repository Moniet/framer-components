import*as o from"react";import{ControlType as r}from"framer";var m="5337199b16c3fcf2889448f4a02bb454b31995d801ebdb066718151609f3d321",T=`._container_c94rp_1 {
  cursor: none;
  position: relative;
  width: fit-content;
  height: fit-content;
  min-width: 100px;
  min-height: 100px;
  background-color: var(--bg-color, #fff);
}

._cursor_c94rp_11 {
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  margin-top: calc(-1 * (var(--size) / 2));
  margin-left: calc(-1 * (var(--size) / 2));
}

@media (max-width: 991px) {
  ._container_c94rp_1 {
    display: none;
  }
}

._cursor_c94rp_11 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

._cursorWrapper_c94rp_31 {
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
`;(function(){if(globalThis.window&&!document.getElementById(m)){var s=document.createElement("style");s.id=m,s.textContent=T,document.head.appendChild(s)}})();var a={container:"_container_c94rp_1",cursor:"_cursor_c94rp_11",cursorWrapper:"_cursorWrapper_c94rp_31"};import{jsx as u,jsxs as z}from"react/jsx-runtime";var C="https://labs.moniet.dev/framer-components/public/default-cursor.png",L=({cursor:s,children:v,size:p=45,delay:h=.3,scaleIn:_=!0,fadeIn:g=!0,backgroundColor:b="#fff"})=>{let d=o.useRef(),x=o.useRef(),e=o.useRef(null),y=o.useRef({left:0,top:0,height:0,width:0}),f=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,l=t.clientX-c;e.current?.style.setProperty("--x",l+"px"),e.current?.style.setProperty("--y",i+"px")};return o.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:l,left:R}=d.current?.getBoundingClientRect()||{},w={left:R,top:l,width:c,height:i};y.current=w,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),z("div",{ref:d,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",f(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{f(t)},style:{"--bg-color":b},children:[v,u("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${p}px`,"--scale":_?0:1,"--opacity":g?0:1,"--delay":`${h}s`},children:u("div",{ref:x,className:a.cursor,"aria-hidden":!0,style:{"--size":`${p}px`},children:u("img",{alt:"cursor",src:s?.src||C})})})]})},N={cursor:{type:r.ResponsiveImage},children:{type:r.ComponentInstance},size:{type:r.Number,defaultValue:45},scaleIn:{type:r.Boolean,defaultValue:!0},fadeIn:{type:r.Boolean,defaultValue:!0},delay:{type:r.Number,min:0,max:2,step:.05,defaultValue:.3},backgroundColor:{type:r.Color,defaultValue:"#fff"}};export{L as CustomCursorOnHover,N as propControls};
