function r(e,t){switch(t.type){case"TYPE":return{...e,speed:t.speed,text:t.payload?.substring(0,e.text.length+1)};case"DELAY":return{...e,speed:t.payload};case"DELETE":return{...e,speed:t.speed,text:t.payload?.substring(0,e.text.length-1)};case"COUNT":return{...e,count:e.count+1};default:return e}}export{r as reducer};