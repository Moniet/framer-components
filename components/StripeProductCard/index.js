// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-67173-xt7CNqNr7twx/code-components/src/components/StripeProductCard/styles.modules.css.js
var digest = "d4cdafb66b984763527928d46c38e568252558af1b9be17eb099395b68d21331";
var css = `._container_1fkre_1 {
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
`;
(function() {
  if (globalThis.window) {
    if (!document.getElementById(digest)) {
      var ele = document.createElement("style");
      ele.id = digest;
      ele.textContent = css;
      document.head.appendChild(ele);
    }
  }
})();
var styles_modules_css_default = { "container": "_container_1fkre_1", "card": "_card_1fkre_10", "selectedView": "_selectedView_1fkre_19", "image": "_image_1fkre_31" };

// src/components/StripeProductCard/index.tsx
import { useStripeState } from "../../hooks/useStripeState.js";
import { ControlType, addPropertyControls } from "framer";
import { jsx, jsxs } from "react/jsx-runtime";
var StripeProductCard = ({
  productId,
  productTitle
}) => {
  const [items, setItem, removeItem] = useStripeState();
  const isSelected = items.find((prod) => prod.id === productId);
  const toggleProductInCart = () => {
    if (isSelected) {
      removeItem({
        id: productId
      });
    } else {
      setItem({
        id: productId,
        title: productTitle
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles_modules_css_default.container,
      onClick: (e) => {
        e.preventDefault();
        toggleProductInCart();
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles_modules_css_default.card, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: styles_modules_css_default.image,
              src: "https://placehold.co/600x400.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles_modules_css_default.title, children: /* @__PURE__ */ jsx("b", { children: productTitle }) })
        ] }),
        isSelected && /* @__PURE__ */ jsx("div", { className: styles_modules_css_default.selectedView })
      ]
    }
  );
};
addPropertyControls(StripeProductCard, {
  productId: {
    type: ControlType.String
  },
  productTitle: {
    type: ControlType.String
  }
});
export {
  StripeProductCard
};
