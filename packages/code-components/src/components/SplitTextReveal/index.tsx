import React, { useRef } from "react"
import styles from "./styles.module.css"
import { motion, useInView } from "framer-motion"
import {
  getBoolProps,
  getNumProps,
  getStrProps,
  getTypeographyStyles,
  typography
} from "../../utils/framerControlProps"

export const SplitTextReveal = ({
  text = "Example Text",
  space = 5,
  typography,
  fadeIn = true,
  offsetY = 0,
  offsetX = 10,
  duration = 0.5
}) => {
  const splitWords = text.split(" ").map((word) => word.split(""))

  const ref = useRef(null)
  const inView = useInView(ref)

  const variants = {
    reveal: {
      x: 0,
      y: 0,
      opacity: 1
    },
    initial: {
      x: offsetX,
      y: offsetY,
      opacity: fadeIn ? 0 : 1
    }
  }

  return (
    <div
      className={styles.container}
      style={{ ...getTypeographyStyles(typography) } as any}
      ref={ref}
    >
      {splitWords.map((word, i) => {
        return (
          <React.Fragment key={i}>
            {word.map((l, y) => (
              <motion.span
                variants={variants}
                animate={inView ? "reveal" : "initial"}
                initial="initial"
                transition={{
                  delay: i + y / 10,
                  duration
                }}
              >
                {l}
              </motion.span>
            ))}
            {i < splitWords.length && (
              <span
                data-component={"fc-space"}
                style={{ "--space": space + "px" } as any}
              ></span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export const propsControls = {
  typography,
  space: getNumProps(10, true, 1, { min: 0, max: 100 }),
  text: getStrProps("Example Text"),
  duration: getNumProps(0.5, false, 0.1, { min: 0.1, max: 2 }),
  offsetX: getNumProps(5, false, 1, { min: -50, max: 50 }),
  offsetY: getNumProps(0, false, 1, { min: -50, max: 50 }),
  fadeIn: getBoolProps(false)
}
