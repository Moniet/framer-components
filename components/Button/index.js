// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-13975-npkj7IAM2PoP/code-components/src/components/Button/Button.modules.css.js
var digest = "9cd06e7979d3af2c03d9d02ed8020c92c7c35b4ceab55a0110d3ad1d4f9c695b";
var css = `._btn_1ek6r_1 {
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  width: fit-content;
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
var Button_modules_css_default = { "btn": "_btn_1ek6r_1" };

// src/components/Button/index.tsx
import { useStripeState } from "../../hooks/useStripeState.js";
import { jsx } from "react/jsx-runtime";
var Button = ({ label = "Button" }) => {
  const [state, setState] = useStripeState();
  return /* @__PURE__ */ jsx("div", { className: Button_modules_css_default.btn, onClick: () => setState("item"), children: label });
};
export {
  Button
};
