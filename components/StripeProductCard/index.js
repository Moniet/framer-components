var o="1ed9e8db02bd67c8969aee138684ae742314d2b3a7f9e335278864b335d9472a",p=`._container_1fkre_1 {
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
`;(function(){if(globalThis.window&&!document.getElementById(o)){var e=document.createElement("style");e.id=o,e.textContent=p,document.head.appendChild(e)}})();var t={container:"_container_1fkre_1",card:"_card_1fkre_10",selectedView:"_selectedView_1fkre_19",image:"_image_1fkre_31"};import{useStripeState as g}from"../../hooks/useStripeState.js";import{ControlType as s,addPropertyControls as _}from"framer";import{jsx as i,jsxs as c}from"react/jsx-runtime";var h=({productId:e,productTitle:d})=>{let[n,l,m]=g(),a=n.find(r=>r.id===e),f=()=>{a?m({id:e}):l({id:e,title:d})};return c("div",{className:t.container,onClick:r=>{r.preventDefault(),f()},children:[c("div",{className:t.card,children:[i("img",{className:t.image,src:"https://placehold.co/600x400.png",alt:""}),i("div",{className:t.title,children:i("b",{children:d})})]}),a&&i("div",{className:t.selectedView})]})};_(h,{productId:{type:s.String},productTitle:{type:s.String}});export{h as StripeProductCard};
