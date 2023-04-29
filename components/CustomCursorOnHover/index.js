import*as r from"react";import{ControlType as o}from"framer";var m="89ef17636be26652954bdb4a8258c451031bf8b3ec87654bd409f1f397fd9c36",w=`._container_169ld_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(m)){var s=document.createElement("style");s.id=m,s.textContent=w,document.head.appendChild(s)}})();var a={container:"_container_169ld_1",cursor:"_cursor_169ld_8",cursorWrapper:"_cursorWrapper_169ld_20"};import{jsx as u,jsxs as E}from"react/jsx-runtime";var T="https://labs.moniet.dev/framer-components/public/default-cursor.png",z=({cursor:s,children:v,size:p=45,delay:h=.3,scaleIn:_=!0,fadeIn:b=!0})=>{let d=r.useRef(),g=r.useRef(),e=r.useRef(null),y=r.useRef({left:0,top:0,height:0,width:0}),f=t=>{let{top:n,left:c}=y.current,i=t.clientY-n,l=t.clientX-c;e.current?.style.setProperty("--x",l+"px"),e.current?.style.setProperty("--y",i+"px")};return r.useEffect(()=>{let t,n=()=>{clearTimeout(t),t=setTimeout(()=>{let{width:c,height:i,top:l,left:x}=d.current?.getBoundingClientRect()||{},R={left:x,top:l,width:c,height:i};y.current=R,e.current?.style.setProperty("--x","50%"),e.current?.style.setProperty("--y","50%")},150)};return n(),window.addEventListener("resize",n),()=>{try{clearTimeout(t)}catch{}}},[]),E("div",{ref:d,className:a.container,onMouseOver:t=>{if(e.current){let n=e.current.style.transition;e.current.style.transition="none",f(t),e.current.style.transition=n,e.current?.style.setProperty("--opacity","1"),e.current?.style.setProperty("--scale","1")}},onMouseLeave:()=>{e.current?.style.setProperty("--opacity","0"),e.current?.style.setProperty("--scale","0")},onMouseMove:t=>{f(t)},children:[v,u("div",{ref:e,className:a.cursorWrapper,style:{"--size":`${p}px`,"--scale":_?0:1,"--opacity":b?0:1,"--delay":`${h}s`},children:u("div",{ref:g,className:a.cursor,"aria-hidden":!0,style:{"--size":`${p}px`},children:u("img",{alt:"cursor",src:s?.src||T})})})]})},L={cursor:{type:o.ResponsiveImage},children:{type:o.ComponentInstance},size:{type:o.Number,defaultValue:45},scaleIn:{type:o.Boolean,defaultValue:!0},fadeIn:{type:o.Boolean,defaultValue:!0},delay:{type:o.Number,min:0,max:2,step:.05,defaultValue:.3}};export{z as CustomCursorOnHover,L as propControls};
