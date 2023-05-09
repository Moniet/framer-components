import { motion, useInView } from "framer-motion"
import styles from "./styles.module.css"
import { useRef } from "react"
import { typography } from "../../utils/framerControlProps"

type Props = {
  text: string
  typography: {
    font: string
    fontSize: number
    fontWeight: number
    color: string
  }
}

const variants = {
  initial: {
    rotateZ: 90
  },
  slideIn: {
    rotateZ: 0
  }
}

export const TextSlideInOnView = ({
  text = "Example Text Here",
  typography
}: Partial<Props>) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true
  })

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        variants={variants}
        className={styles.text}
        initial="initial"
        animate={inView ? "slideIn" : "initial"}
        transition={{
          type: "spring",
          damping: 20,
          bounce: 0
        }}
        style={
          {
            "--font-family": typography?.font || "inherit",
            "--font-size": (typography?.fontSize || 50) + "px",
            "--font-weight": typography?.fontWeight || 600,
            "--color": typography?.color || "#222"
          } as any
        }
      >
        {text}
      </motion.div>
    </div>
  )
}

export const propsControls = {
  typography
}
