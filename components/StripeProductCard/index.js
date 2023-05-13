var o="5a5c6561de5f3bbd8961309aa419547d8309e73f9cc8b92a7812e3e7d264e5ac",p=`._container_1fkre_1 {
  font-size: 16px;
  position: relative;
  font-family: inherit;
  width: 100%;
  height: 100%;
  display: flex;
}

._card_1fkre_10 {
  padding: 1em;
  background-color: var(--fc-sc-card-bg-color, #fff);
  border-radius: 1em;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

._selectedView_1fkre_19 {
  width: 20px;
  height: 20px;
  top: 0em;
  right: 0em;
  background: #0055ff;
  color: white;
  border-radius: 50%;
  position: absolute;
  transform: translate(25%, -25%);
}

._image_1fkre_31 {
  width: 100%;
  height: 50%;
  object-fit: cover;
}
`;(function(){if(globalThis.window&&!document.getElementById(o)){var e=document.createElement("style");e.id=o,e.textContent=p,document.head.appendChild(e)}})();var t={container:"_container_1fkre_1",card:"_card_1fkre_10",selectedView:"_selectedView_1fkre_19",image:"_image_1fkre_31"};import{useStripeState as g}from"../../hooks/useStripeState.js";import{ControlType as c,addPropertyControls as _}from"framer";import{jsx as i,jsxs as s}from"react/jsx-runtime";var h=({productId:e,productTitle:a})=>{let[n,l,m]=g(),d=n.find(r=>r.id===e),f=()=>{d?m({id:e}):l({id:e,title:a})};return s("div",{className:t.container,onClick:r=>{r.preventDefault(),f()},children:[s("div",{className:t.card,children:[i("img",{className:t.image,src:"https://placehold.co/600x400.png",alt:""}),i("div",{className:t.title,children:i("b",{children:a})})]}),d&&i("div",{className:t.selectedView})]})};_(h,{productId:{type:c.String},productTitle:{type:c.String}});export{h as StripeProductCard};
