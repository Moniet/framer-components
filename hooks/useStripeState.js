import{useCallback as a,useEffect as o,useRef as l,useState as h}from"react";var r=class{store;listeners;constructor(){this.store=[],this.listeners=[]}setItem=async t=>{this.store=[...this.store,t],this.publishChanges()};publishChanges=async()=>{for(let t of this.listeners)t(this.store)};deleteItem=async t=>{let e=this.store.findIndex(s=>s?.id===t?.id);e>-1&&(this.store=[...this.store.slice(0,e),...this.store.slice(e+1)]),this.publishChanges()};listen=t=>{this.listeners.push(t)};removeListener=t=>{let e=this.listeners.findIndex(s=>s===t);e>-1&&(this.listeners=this.listeners.slice(0,e).concat(this.listeners.slice(e+1)))}},c=()=>{if(globalThis.window)return window.stripeObserver||(window.stripeObserver=new r),window.stripeObserver};function p(){let[i,t]=h([]),e=l(c()),s=a(n=>{t(n)},[]);return o(()=>(e.current.listen(s),t(e.current.store||[]),()=>{e.current?.removeListener(s)}),[]),[i,n=>{e?.current.setItem(n)},n=>{e?.current.deleteItem(n)},e.current]}export{p as useStripeState};
