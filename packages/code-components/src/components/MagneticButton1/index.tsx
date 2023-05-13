import React, { useEffect, useRef } from "react"
import { ControlType } from "framer"
import { useFollowCursor } from "../../hooks/useFollowCursor"
import { motion, useTransform } from "framer-motion"
import styles from "./styles.module.css"

export const MagneticButton = ({
  text = "Magnetic Button",
  textColor = "#000",
  bgColor = "#fff",
  borderColor = "#000",
  borderWidth = 2,
  borderRadius = 5,
  buttonPadding = 50,
  cursorPadding = 50,
  sensitivity = 150, //
  movement = 50
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const {
    mouseX,
    mouseY,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter
  } = useFollowCursor(ref, {
    movement,
    range: sensitivity
  })

  const negX = useTransform(mouseX, (v: number) => v * -0.5)
  const negY = useTransform(mouseY, (v: number) => v * -0.5)

  return (
    <div
      style={
        {
          "--cursor-padding": cursorPadding + "px",
          "--btn-padding": buttonPadding + "px",
          "--border-radius": borderRadius + "px",
          "--border-width": borderWidth + "px",
          "--border-color": borderColor,
          "--bg-color": bgColor,
          "--text-color": textColor
        } as any
      }
      className={styles.wrapper}
      ref={ref}
      onMouseOver={handleMouseEnter as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ x: mouseX, y: mouseY }}>
        <div className={styles.btn}>
          <div data-fc="text-wrap">
            <motion.div style={{ x: negX, y: negY }}>{text}</motion.div>
          </div>
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  )
}

export const propsControls = {}
