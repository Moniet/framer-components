import { motion, useInView } from "framer"
import styles from "./styles.module.css"
import { getColorProps, getNumProps } from "../../utils/framerControlProps"
import { useRef } from "react"

export const Donut = ({
  strokeWidth = 5,
  strokeColor = "#000",
  progress = 75,
  duration = 2,
  bgColor = "#e8e8e8"
}) => {
  const prog = progress / 100
  const ref = useRef(null)
  const inView = useInView(ref)
  const size = 100

  return (
    <svg width="100%" height="100%" viewBox={`0 0 100 100`} ref={ref}>
      <circle
        cx={size * 0.5}
        cy={size * 0.5}
        r={size * 0.5 - strokeWidth}
        fill="transparent"
        stroke={bgColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <motion.circle
        className={styles.circ}
        cx={size * 0.5}
        cy={size * 0.5}
        r={size * 0.5 - strokeWidth}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? prog : 0 }}
        transition={{ duration, type: "spring", bounce: 0.1 }}
        fill="transparent"
        stroke={strokeColor}
        strokeLinecap="round"
        style={
          {
            "--stroke-width": strokeWidth + "px",
            transform: "rotate(-90deg)",
            transformOrigin: "center"
          } as any
        }
      />
    </svg>
  )
}

export const propsControls = {
  strokeWidth: getNumProps(5, true, 1),
  strokeColor: getColorProps("#000"),
  progress: getNumProps(75, false, 5, { min: 0, max: 100 }),
  duration: getNumProps(2, false, 0.1, { min: 0.1, max: 5 }),
  bgColor: {
    ...getColorProps("#e8e8e"),
    title: "Background Stroke Color"
  }
}
