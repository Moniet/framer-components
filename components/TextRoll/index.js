// src/components/TextRoll/index.tsx
import { ControlType } from "framer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-66263-b0hb32ioTdj0/code-components/src/components/TextRoll/styles.module.css.js
var digest = "cf7d709e72a04fba84346ff63c84ca1618d33f2b99b71093dab3ac8b9f107aff";
var css = `._container_e9816_1 {
  position: relative;
  width: 100%;
  height: 100%;
}

._text_e9816_7 {
  width: 100%;
  height: fit-content;
  white-space: nowrap;
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
var styles_module_css_default = { "container": "_container_e9816_1", "text": "_text_e9816_7" };

// src/components/TextRoll/index.tsx
import { jsx } from "react/jsx-runtime";
var TextRoll = ({
  text = "Example Text, Goes Here",
  typography = {
    fontWeight: 400,
    fontSize: 20,
    font: "Helvetica, sans-serif",
    color: "#555"
  },
  animation = {
    fadeInOut: true,
    delay: 2e3,
    duration: 1e3,
    offset: 50,
    initialAnimation: false,
    syncAnimations: true
  }
}) => {
  const { fontWeight, fontSize, font, color } = typography;
  const {
    fadeInOut,
    delay,
    duration,
    offset,
    initialAnimation,
    syncAnimations
  } = animation;
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
  return /* @__PURE__ */ jsx("div", { className: styles_module_css_default.container, children: /* @__PURE__ */ jsx(
    AnimatePresence,
    {
      initial: initialAnimation,
      mode: syncAnimations ? "popLayout" : "wait",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: styles_module_css_default.text,
          style: {
            fontFamily: font || "inherit",
            fontSize: fontSize + "px",
            fontWeight,
            color
          },
          animate: { y: [offset, 0], opacity: 1, dur: duration },
          exit: { opacity: fadeInOut ? 0 : 1, y: -offset, dur: duration },
          children: currentWord
        },
        index
      )
    }
  ) });
};
var propControls = {
  text: {
    type: ControlType.String,
    defaultValue: "Example Text, Created By, Comma Separating, These Words"
  },
  animation: {
    type: ControlType.Object,
    Title: "Animation",
    controls: {
      duration: {
        type: ControlType.Number,
        defaultValue: 1e3,
        max: 1e4,
        min: 100,
        displayStepper: true
      },
      delay: {
        type: ControlType.Number,
        max: 1e4,
        min: 100,
        defaultValue: 2e3
      },
      offset: {
        type: ControlType.Number,
        defaultValue: 50
      },
      fadeInOut: {
        title: "Fade In/Out",
        type: ControlType.Boolean,
        defaultValue: false
      },
      initialAnimation: {
        title: "Initial Anim",
        type: ControlType.Boolean,
        defaultValue: false
      },
      syncAnimations: {
        title: "Sync",
        type: ControlType.Boolean,
        defaultValue: true
      }
    }
  },
  typography: {
    type: ControlType.Object,
    controls: {
      fontSize: {
        type: ControlType.Number,
        defaultValue: 20,
        min: 1,
        max: 100
      },
      fontWeight: {
        type: ControlType.Number,
        defaultValue: 400
      },
      font: {
        type: ControlType.String,
        default: "Helvetica, sans-serif"
      },
      color: {
        type: ControlType.Color,
        default: "#555"
      }
    }
  }
};
export {
  TextRoll,
  propControls
};
