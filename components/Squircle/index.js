// src/components/Squircle/index.tsx
import { ControlType, addPropertyControls } from "framer";
import { useMemo } from "react";
import { createSquirclePath } from "./createSquirclePath.js";
import { jsx, jsxs } from "react/jsx-runtime";
var getId = () => Math.random() + "";
var Squircle = ({
  width = 200,
  height = 200,
  id = getId(),
  curvature = 0.3
}) => {
  const [viewBox, d] = useMemo(() => {
    const viewBox2 = [0, 0, width, height];
    const squirclePath = createSquirclePath(width, height, curvature);
    return [viewBox2, squirclePath];
  }, [width, height, id, curvature]);
  const maskId = `${id}-mask`;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("svg", { viewBox: viewBox.join(" "), children: /* @__PURE__ */ jsx(
      "path",
      {
        d,
        id: maskId,
        transform: "rotate(45)",
        style: { transformOrigin: "center" }
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          background: "deepskyblue",
          clipPath: `url(#${maskId})`
        }
      }
    )
  ] });
};
var propControls = {
  curvature: {
    type: ControlType.Number,
    min: 0,
    max: 1,
    step: 0.1
  },
  width: {
    type: ControlType.Number,
    min: 0
  },
  height: {
    type: ControlType.Number,
    min: 0
  }
};
addPropertyControls(Squircle, propControls);
export {
  Squircle,
  propControls
};
