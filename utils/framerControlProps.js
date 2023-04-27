// src/utils/framerControlProps.ts
import { ControlType } from "framer";
var boxShadowProps = {
  x: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  },
  y: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  },
  blur: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 20
  },
  color: {
    type: ControlType.Color,
    defaultValue: "rgba(0,0,0,0.08)"
  },
  size: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  }
};
export {
  boxShadowProps
};
