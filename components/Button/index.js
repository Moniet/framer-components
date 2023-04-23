// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-1515-USZ6FFyMbH0e/code-components/src/components/Button/Button.modules.css.js
var digest = "0e00bb3b212d3c51ff9d50e5dc5d86f0da538e2ca2a86029f58d7ca7c9c2071f";
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
import { useStripeStore } from "../../hooks/useStripeStore.js";
import { jsx } from "react/jsx-runtime";
var Button = ({ label = "Button" }) => {
  const setState = useStripeStore((state) => state.setItem);
  return /* @__PURE__ */ jsx("div", { className: Button_modules_css_default.btn, onClick: () => setState("item"), children: label });
};
export {
  Button
};
