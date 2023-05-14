import { motion, useInView } from "framer"
import styles from "./styles.module.css"
import { getColorProps, getNumProps } from "../../utils/framerControlProps"
import { useRef } from "react"

export const Donut = ({
  strokeWidth = 8,
  strokeColor = "#000",
  size = 100,
  progress = 75,
  duration = 2
}) => {
  const prog = progress / 100
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size}${size}`} ref={ref}>
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
  size: getNumProps(200, true, 10, { min: 50 }),
  progress: getNumProps(75, false, 5, { min: 0, max: 100 }),
  duration: getNumProps(2, false, 0.1, { min: 0.1, max: 5 })
}
