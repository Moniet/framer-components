import*as i from"react";import{useScroll as f,useTransform as e,motion as r}from"framer-motion";import{jsx as s}from"react/jsx-runtime";var x=({children:n,initialScale:m,offset:d,rotateXAxis:p,rotateYAxis:u})=>{let o=i.useRef(null),{scrollYProgress:t}=f({target:o,offset:["end end","start start"]}),a=e(t,[0,1],[-30,0]),l=e(t,[0,1],[-30,0]),c=e(t,[0,1],[1.1,1]);return s(r.div,{ref:o,style:{rotateX:a,rotateY:l,perspective:"1000px",transition:"transform 1s ease-out",transformStyle:"preserve-3d",transformOrigin:"50% 100%",width:"300px",height:"300px",overflow:"hidden"},children:s(r.div,{style:{width:"100%",height:"100%",scale:c,transition:"transform 1s ease-out"},children:n})})};export{x as FlipOnScroll};
