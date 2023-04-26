// src/components/TextRoll/index.tsx
import { ControlType } from "framer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-64438-h1jTGjqkW90u/code-components/src/components/TextRoll/styles.module.css.js
var digest = "4b3ab9e611648fa4189fa04066c7e071d4f364daec93de9b49837cfd727554c1";
var css = `._container_1jtez_1 {
  position: relative;
  width: fit-content;
  height: fit-content;
}

._text_1jtez_7 {
  width: fit-content;
  height: fit-content;
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
var styles_module_css_default = { "container": "_container_1jtez_1", "text": "_text_1jtez_7" };

// src/components/TextRoll/index.tsx
import { jsx } from "react/jsx-runtime";
var TextRoll = ({
  text = "Example Text, Goes Here",
  fadeInOut = true,
  delay = 2e3,
  duration = 1e3,
  offset = 50,
  initialAnimation = false,
  syncAnimations = true,
  fontSize = 20,
  font,
  color = "#555"
}) => {
  const [index, setIndex] = useState(0);
  const words = text.split(",");
  const currentWord = words[index];
  useEffect(() => {
    const int = setInterval(() => {
      const nextIndex = index + 1;
      if (nextIndex < words.length) {
        return setIndex(nextIndex);
      } else {
        setIndex(0);
      }
    }, delay);
    return () => {
      clearInterval(int);
    };
  }, [words]);
  return /* @__PURE__ */ jsx("div", { className: styles_module_css_default.container, children: /* @__PURE__ */ jsx("div", { className: styles_module_css_default.text, children: /* @__PURE__ */ jsx(
    AnimatePresence,
    {
      initial: initialAnimation,
      mode: syncAnimations ? "popLayout" : "wait",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          style: {
            fontFamily: font || "inherit",
            fontSize: fontSize + "px",
            color
          },
          initial: { y: offset, opacity: 1, dur: duration },
          animate: { y: 0, opacity: 1, dur: duration },
          exit: { opacity: fadeInOut ? 0 : 1, y: -offset, dur: duration },
          children: currentWord
        },
        index
      )
    }
  ) }) });
};
var propControls = {
  animation: {
    duration: {
      type: ControlType.Number,
      defaultValue: 1e3
    },
    delay: {
      type: ControlType.Number,
      min: 100,
      defaultValue: 2e3
    },
    offset: {
      type: ControlType.Number,
      defaultValue: 50
    },
    fadeInOut: {
      type: ControlType.Boolean,
      defaultValue: false
    },
    initialAnimation: {
      type: ControlType.Boolean,
      defaultValue: false
    },
    syncAnimations: {
      type: ControlType.Boolean,
      defaultValue: true
    }
  },
  fontSize: {
    type: ControlType.Number,
    defaultValue: 20,
    min: 1,
    max: 100
  },
  font: {
    type: ControlType.String,
    default: "Helvetica, sans-serif"
  },
  color: {
    type: ControlType.Color,
    default: "#555"
  },
  text: {
    type: ControlType.String,
    defaultValue: "Example Text, Created By, Comma Separating, These Words"
  }
};
export {
  TextRoll,
  propControls
};
