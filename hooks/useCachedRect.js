import r from"react";var n,h=i=>{let e=r.useRef({});return r.useEffect(()=>{let t=()=>{clearTimeout(n),n=setTimeout(()=>{let{width:o,height:c,top:s,left:u}=i.current?.getBoundingClientRect()||{},a={left:u,top:s,width:o,height:c};e.current=a},200)};return t(),window.addEventListener("resize",t),()=>{try{clearTimeout(n),window.removeEventListener("resize",t)}catch{}}},[i]),e.current?e:{current:{left:0,top:0,height:0,width:0}}};export{h as useCachedRect};
