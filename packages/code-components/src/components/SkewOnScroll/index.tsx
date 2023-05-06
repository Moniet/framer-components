import * as React from "react"
import {
  getMultipleChildren,
  getNumProps
} from "../../utils/framerControlProps"
import { useScroll, useTransform, useVelocity, motion } from "framer-motion"
import { ControlType } from "framer"
import styles from "./styles.module.css"

export const SkewOnScroll = ({
  children,
  duration = 0.4,
  stretchiness = 1.2,
  skew = 3,
  gap = 100,
  direction = "column"
}) => {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const scaleY = useTransform(velocity, [0, 1000], [1, stretchiness])
  const s = useTransform(velocity, [0, 1000], [0, skew])
  const finalSkew = useTransform(s, (num) => `${num}deg`)

  return (
    <motion.div
      className={styles.container}
      style={
        {
          "--scaleY": scaleY,
          "--skew": finalSkew,
          "--gap": `${gap}px`,
          "--direction": direction,
          transform: `skewY(var(--skew)) scaleY(var(--scaleY))`,
          transition: `transform ${duration}s ease-out`
        } as any
      }
    >
      {children}
    </motion.div>
  )
}

export const propsControls = {
  skew: getNumProps(3, true, 1, { min: 0, max: 10 }),
  stretchiness: getNumProps(1.2, true, 0.1, { min: 1, max: 2 }),
  duration: getNumProps(0.4, true, 0.1, { min: 0, max: 2 }),
  children: getMultipleChildren(),
  direction: {
    type: ControlType.Enum,
    options: ["column", "row"],
    optionTitles: ["Column", "Row"],
    defaultValue: "column"
  },
  gap: {
    type: ControlType.Number,
    defaultValue: 100,
    step: 100,
    min: 0,
    max: 1000
  }
}
