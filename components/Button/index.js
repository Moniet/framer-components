// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-82697-hJhRU393TslO/code-components/src/components/Button/Button.modules.css.js
var digest = "a61c51422e09338e3845dffe5bcf88aa3eb653955f4f277dcc1537011d0ef15b";
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
