// src/components/GlobalCustomCursor/index.tsx
import { ControlType } from "framer";
import * as React from "react";
var GlobalCustomCursor = ({ image }) => {
  React.useEffect(() => {
    document.body.style.cursor = `url(${image.src})`;
  }, []);
  return null;
};
var propControls = {
  cursor: {
    type: ControlType.ResponsiveImage
  }
};
export {
  GlobalCustomCursor,
  propControls
};
