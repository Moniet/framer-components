// src/components/StripeCart/index.tsx
import { useStripeState } from "../../hooks/useStripeState.js";

// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-84962-2e3kiCRMJJyK/code-components/src/components/StripeCart/styles.module.css.js
var digest = "c573b0bb29f15fbd3766ed839fb42c917b91b8c5cfd4cbfe3b43d587d93898eb";
var css = `._container_12znn_1 {
  width: var(--fc-sc-width, 30px);
  height: var(--fc-sc-width, 30px);
  position: relative;
}

._badge_12znn_7 {
  --fc-sc-badge-bg: rgb(40, 65, 252);
  --fc-sc-badge-color: rgb(255, 255, 255);
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  font-family: inherit;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--fc-sc-badge-bg);
  color: var(--fc-sc-badge-color);
  transform: translate(50%, -50%);
  line-height: 0;
  aspect-ratio: 1/1;
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
var styles_module_css_default = { "container": "_container_12znn_1", "badge": "_badge_12znn_7" };

// src/components/StripeCart/index.tsx
import { ControlType, addPropertyControls } from "framer";
import { jsx, jsxs } from "react/jsx-runtime";
var CartIcon = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "32"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "32"
    }
  )
] });
var StripeCart = ({ Icon }) => {
  const [state] = useStripeState();
  return /* @__PURE__ */ jsxs("div", { className: styles_module_css_default.container, children: [
    /* @__PURE__ */ jsx(Icon, {}),
    /* @__PURE__ */ jsx("div", { className: styles_module_css_default.badge, children: state?.length })
  ] });
};
addPropertyControls(StripeCart, {
  Icon: {
    title: "Icon",
    type: ControlType.File,
    allowedFileTypes: [".svg", ".png", ".jpg"]
  }
});
StripeCart.defaultProps = {
  Icon: CartIcon
};
export {
  StripeCart
};
