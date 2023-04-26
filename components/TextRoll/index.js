// src/components/TextRoll/index.tsx
import { ControlType } from "framer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  font
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
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    AnimatePresence,
    {
      initial: initialAnimation,
      mode: syncAnimations ? "popLayout" : "wait",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { fontFamily: font || "inherit", fontSize: fontSize + "px" },
          initial: { y: offset, opacity: 1, dur: duration },
          animate: { y: 0, opacity: 1, dur: duration },
          exit: { opacity: fadeInOut ? 0 : 1, y: -offset, dur: duration },
          children: currentWord
        },
        index
      )
    }
  ) });
};
var propControls = {
  duration: {
    type: ControlType.Number,
    defaultValue: 1e3
  },
  fontSize: {
    type: ControlType.Number,
    defaultValue: 20,
    min: 1,
    max: 100
  },
  font: {
    type: ControlType.String,
    default: "Helevetica, sans-serif"
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
  text: {
    type: ControlType.String,
    defaultValue: "Example Text, Created By, Comma Separating, These Words"
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
};
export {
  TextRoll,
  propControls
};
