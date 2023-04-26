// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-42594-i0LvEb9ZyukD/code-components/src/components/GradientBgAnimation/styles.modules.css.js
var digest = "9d6954468e15e8bf5173b551be67069f0349e0362dd14e7ac6cc1a2f14045857";
var css = `._container_hg2oa_1 {
  width: 100%;
  height: 100%;
  border-radius: var(--br);
  box-shadow: var(--box-shadow);
  background: linear-gradient(var(--lg));
  background-size: var(--background-size);
  background-repeat: no-repeat;
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
var styles_modules_css_default = { "container": "_container_hg2oa_1" };

// src/components/GradientBgAnimation/index.tsx
import { ControlType } from "framer";
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var defaultGradient = "hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)";
var GradientBgAnimation = ({
  colorsText = defaultGradient,
  borderRadius = 20,
  size = 300,
  angle = 0,
  blur = 0,
  animation: { duration = 2, animateAngle = false }
}) => {
  const colors = colorsText.split(",");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            transition: {
              duration,
              repeat: Infinity
            },
            animate: {
              backgroundPositionY: ["0%", `100%`, "0%"],
              backgroundPositionX: ["0%", `100%`, "0%"],
              ...animateAngle ? { "--angle": [angle, angle + 180, angle] } : {}
            },
            style: {
              "--lg": `${angle}deg, ${colors}`,
              "--br": `${borderRadius}px`,
              "--background-size": size ? `${size}% ${size}%` : "300% 300%",
              "--angle": angle || 0
            },
            className: styles_modules_css_default.container
          }
        ),
        !!blur && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backdropFilter: `blur(${blur}px)`,
              borderRadius: `${borderRadius}px`
            }
          }
        )
      ]
    }
  );
};
var propControls = {
  colorText: {
    title: "Colors",
    type: ControlType.Color,
    defaultValue: defaultGradient
  },
  size: {
    type: ControlType.Number,
    min: 100,
    max: 1e3,
    default: 300
  },
  blur: {
    type: ControlType.Number,
    defaultValue: 0,
    displaySteppr: true
  },
  angle: {
    type: ControlType.Number,
    defaultValue: 30,
    min: 0,
    max: 360,
    step: 5
  },
  animation: {
    title: "Animation",
    type: ControlType.Object,
    animateAngle: {
      type: ControlType.Boolean,
      defaultValue: false
    },
    duration: {
      title: "Duration",
      type: ControlType.Number,
      defaultValue: 10,
      displayStepper: true
    }
  }
};
export {
  GradientBgAnimation,
  propControls
};
