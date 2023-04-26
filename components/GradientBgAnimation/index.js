// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-34655-vXLxBhvBU3qq/code-components/src/components/GradientBgAnimation/styles.modules.css.js
var digest = "c1bdcfb52648f9761e16bc56378487206d7e152152414775f070b697c2ee5fd9";
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
  duration = 2,
  blur = 0,
  animateAngle = false
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
              ...animateAngle ? { "--angle": [0, angle, 0] } : {}
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
  startColor: {
    title: "Start",
    type: ControlType.Color
  }
};
export {
  GradientBgAnimation,
  propControls
};
