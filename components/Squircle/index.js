// src/components/Squircle/index.tsx
import { ControlType, addPropertyControls } from "framer";
import { useMemo } from "react";
import { createSquirclePath } from "./createSquirclePath.js";
import { jsx, jsxs } from "react/jsx-runtime";
var getId = () => Math.random() + "";
var Squircle = ({
  id = getId(),
  curvature = 0.3,
  color = "#333"
}) => {
  const [viewBox, d] = useMemo(() => {
    const height = 100;
    const width = 100;
    const viewBox2 = [0, 0, width, height];
    const squirclePath = createSquirclePath(width, height, curvature);
    return [viewBox2, squirclePath];
  }, [id, curvature]);
  const maskId = `${id}-mask`;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("svg", { viewBox: viewBox.join(" "), xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d,
        id: maskId,
        transform: "rotate(45)",
        style: { transformOrigin: "center" },
        fill: color
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          background: "black",
          clipPath: `url(#${maskId})`
        }
      }
    )
  ] });
};
var propControls = {
  size: {
    type: ControlType.Number,
    defaultValue: 200
  },
  color: {
    type: ControlType.Color,
    defaultValue: "#555"
  },
  curvature: {
    type: ControlType.Number,
    min: 0,
    max: 0.7,
    step: 0.01,
    defaultValue: 0.3
  }
};
addPropertyControls(Squircle, propControls);
export {
  Squircle,
  propControls
};
