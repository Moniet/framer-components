function a(h,r,o){let $=h,n=r,e=$/2,c=n/2,t=Math.min(e,c)*(1-o);return`
      M 0 ${c}
      C 0 ${t}, ${t} 0, ${e} 0
      S ${$} ${t}, ${$} ${c}, ${$-t} ${n}
        ${e} ${n}, 0 ${n-t}, 0 ${c}
  `}export{a as createSquirclePath};
