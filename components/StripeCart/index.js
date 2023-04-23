// src/components/StripeCart/index.tsx
import { useStripeStore } from "../../hooks/useStripeStore.js";
import { jsx, jsxs } from "react/jsx-runtime";
var CartIcon = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }
  )
] });
var StripeCart = ({ icon = CartIcon }) => {
  const [state] = useStripeStore((state2) => [state2.items]);
  return /* @__PURE__ */ jsxs("div", { children: [
    "number of items : ",
    state.length
  ] });
};
export {
  StripeCart
};
