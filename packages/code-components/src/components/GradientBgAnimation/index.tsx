import * as React from "react"
import styles from "./styles.modules.css"
import { ControlType } from "framer"
import { motion } from "framer-motion"
import { BoxShadowProps, boxShadowProps } from "src/utils/framerControlProps"

type Props = {
  borderRadius?: number
  size?: number
  angle?: number
  colorsText?: string
  blur?: number
  animation: {
    duration?: number
    animateAngle?: boolean
  }
  shadow: BoxShadowProps
}

const defaultGradient = "hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)"

export const GradientBgAnimation = ({
  colorsText = defaultGradient,
  borderRadius = 20,
  size = 300,
  angle = 0,
  blur = 0,
  animation: { duration = 2, animateAngle = false },
  shadow
}: Props) => {
  const colors = colorsText.split(",")
  const boxShadow = shadow
    ? [shadow.x, shadow.y, shadow.blur, shadow.size, shadow.color].join(",")
    : "none"
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden"
      }}
    >
      <motion.div
        transition={{
          duration,
          repeat: Infinity
        }}
        animate={
          {
            backgroundPositionY: ["0%", `100%`, "0%"],
            backgroundPositionX: ["0%", `100%`, "0%"],
            ...(animateAngle ? { "--angle": [angle, angle + 180, angle] } : {})
          } as any
        }
        style={
          {
            "--lg": `${angle}deg, ${colors}`,
            "--br": `${borderRadius}px`,
            "--background-size": size ? `${size}% ${size}%` : "300% 300%",
            "--angle": angle || 0,
            "--box-shadow": boxShadow
          } as any
        }
        className={styles.container}
      />

      {!!blur && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backdropFilter: `blur(${blur}px)`,
            borderRadius: `${borderRadius}px`
          }}
        ></div>
      )}
    </div>
  )
}

export const propControls = {
  colorText: {
    title: "Colors",
    type: ControlType.String,
    defaultValue: defaultGradient
  },
  size: {
    type: ControlType.Number,
    min: 100,
    max: 1000,
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
  borderRadius: {
    type: ControlType.Number,
    min: 0,
    max: 1000
  },
  animation: {
    title: "Animation",
    type: ControlType.Object,
    controls: {
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
    },
    applyBlur: {
      type: ControlType.Boolean,
      defaultValue: true
    },
    withShadow: {
      title: "With Shadow",
      type: ControlType.Boolean,
      defaultValue: false
    },
    shadow: {
      title: "Shadow",
      type: ControlType.Object,
      controls: {
        ...boxShadowProps
      }
    }
  }
}
