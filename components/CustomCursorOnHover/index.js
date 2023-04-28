// src/components/CustomCursorOnHover/index.tsx
import * as React from "react";
import { ControlType } from "framer";

// esbuild-css-modules-plugin-namespace:/var/folders/07/kf6jf5m12g53trp7qpjtjg1m0000gn/T/tmp-65629-AlqnV81UP7zx/code-components/src/components/CustomCursorOnHover/styles.modules.css.js
var digest = "323642c948ae0430641677dc8fd25e21b140226097c4beff37ec9e6464fad304";
var css = `._container_xvrce_1 {
  cursor: none;
  position: relative;
  width: fit-content;
  height: fit-content;
}

._cursor_xvrce_8 {
  width: var(--size);
  height: var(--size);
  pointer-events: none;
}

._cursor_xvrce_8 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

._cursorWrapper_xvrce_20 {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  opacity: var(--opacity);
  transform: translateX(var(--x)) translateY(var(--y)) scale(var(--scale));
  transition: transform var(--delay) ease-out;
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
var styles_modules_css_default = { "container": "_container_xvrce_1", "cursor": "_cursor_xvrce_8", "cursorWrapper": "_cursorWrapper_xvrce_20" };

// src/components/CustomCursorOnHover/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var defaultSrc = "https://s3-alpha-sig.figma.com/img/e03c/2a53/d457b0d9cb93b7735873023f9f6f7691?Expires=1683504000&Signature=exgquu-lwlVoFNW~LVvKKdP0RMnDInLZ9VBToBR7VlrizcffwDRabWfPt7OX7KjasQc05RtbuPK7UMM0zzCpQnnXrv99rX0yd6t8jddCeWRcjPrDuWObgcj3duLhJ1J5mybS3r4V3LxzZLA5BZbxL98Sau2xw6xsaaKQIcUnl8F~BLkAPEvDKVKqor8dKGmcM1pnZ61E2L2oijo43sZSqeFvJzdH39dox8lt-AFVtSAJCsXYKsQSbD8cBVYFji9flCjOagzFaXxdBrIM91LURIcd3JORrYyMguqEFmUcY-L4GfJPbspyhLu1~FkgqLOrliBHedWpPjhJOv~MykIknw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
var CustomCursorOnHover = ({
  image = {
    src: defaultSrc
  },
  children,
  size = 45,
  delay = 0.3,
  scaleIn = true,
  fadeIn = true
}) => {
  const container = React.useRef();
  const cursor = React.useRef();
  const cursorWrapper = React.useRef(null);
  const dimensions = React.useRef({ left: 0, top: 0, height: 0, width: 0 });
  const calculatePosition = (e) => {
    const { top, left } = dimensions.current;
    const y = e.clientY - top;
    const x = e.clientX - left;
    cursorWrapper.current?.style.setProperty("--x", x + "px");
    cursorWrapper.current?.style.setProperty("--y", y + "px");
  };
  React.useEffect(() => {
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const { width, height, top, left } = container.current?.getBoundingClientRect() || {};
        const newDims = {
          left,
          top,
          width,
          height
        };
        dimensions.current = newDims;
        cursorWrapper.current?.style.setProperty("--x", "50%");
        cursorWrapper.current?.style.setProperty("--y", "50%");
      }, 150);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      try {
        clearTimeout(timeout);
      } catch {
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: container,
      className: styles_modules_css_default.container,
      onMouseOver: (e) => {
        if (cursorWrapper.current) {
          const prevTransition = cursorWrapper.current.style.transition;
          cursorWrapper.current.style.transition = "none";
          calculatePosition(e);
          cursorWrapper.current.style.transition = prevTransition;
          cursorWrapper.current?.style.setProperty("--opacity", "1");
          cursorWrapper.current?.style.setProperty("--scale", "1");
        }
      },
      onMouseLeave: () => {
        cursorWrapper.current?.style.setProperty("--opacity", "0");
        cursorWrapper.current?.style.setProperty("--scale", "0");
      },
      onMouseMove: (e) => {
        calculatePosition(e);
      },
      children: [
        children,
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: cursorWrapper,
            className: styles_modules_css_default.cursorWrapper,
            style: {
              "--size": `${size}px`,
              "--scale": scaleIn ? 0 : 1,
              "--opacity": fadeIn ? 0 : 1,
              "--delay": `${delay}s`
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                ref: cursor,
                className: styles_modules_css_default.cursor,
                "aria-hidden": true,
                style: { "--size": `${size}px` },
                children: /* @__PURE__ */ jsx("img", { alt: "cursor", src: image.src })
              }
            )
          }
        )
      ]
    }
  );
};
var propControls = {
  cursor: {
    type: ControlType.ResponsiveImage
  },
  children: {
    type: ControlType.ComponentInstance
  },
  size: {
    type: ControlType.Number,
    defaultValue: 45
  },
  scaleIn: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  fadeIn: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  delay: {
    type: ControlType.Number,
    min: 0,
    max: 2,
    step: 0.05,
    defaultValue: 0.3
  }
};
export {
  CustomCursorOnHover,
  propControls
};
