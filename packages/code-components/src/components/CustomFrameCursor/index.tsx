import * as React from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { ControlType, useMotionValue } from "framer"
import styles from "./styles.modules.css"

const ExampleCursor = () => <div className={styles.example} />

const useMousePosition = ({ scaleTo }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const scale = useMotionValue(1)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const t = (e.target as HTMLDivElement).nodeName

      if (["A", "BUTTON"].includes(t)) {
        scale.set(scaleTo || 2)
      } else if (scale.get() > 1) {
        scale.set(1)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return [mouseX, mouseY, scale]
}

type Props = {
  children: JSX.Element
  delay: number
  scale: number
  hideDefaultCursor: boolean
}

export const CustomFrameCursor = ({
  children,
  delay = 0.3,
  scale = 2,
  hideDefaultCursor = false
}: Partial<Props>) => {
  const [mouseX, mouseY, scaleTo] = useMousePosition({ scaleTo: scale })
  const [cont, setCont] = React.useState<HTMLDivElement>()
  const isServer = !!globalThis.window

  React.useEffect(() => {
    const container = document.createElement("div")
    container.setAttribute("data-type", "fc-cursor")
    document.body.appendChild(container)
    setCont(container)

    if (hideDefaultCursor) {
      document.body.style.cursor = "none"
    }

    return () => {
      document.body.removeChild(container)
    }
  }, [isServer, children])

  if (!cont) return null

  return createPortal(
    <motion.div
      className={styles.cursor}
      style={
        {
          x: mouseX,
          y: mouseY,
          scale: scaleTo,
          "--delay": `${delay}s`
        } as any
      }
    >
      <div className={styles.wrapper}>{children || <ExampleCursor />}</div>
    </motion.div>,
    cont
  )
}

export const propControls = {
  children: {
    type: ControlType.ComponentInstance
  },
  scale: {
    title: "Scale on Hover",
    type: ControlType.Number,
    defaultValue: 2,
    step: 0.1,
    min: 1,
    max: 5,
    description: "Scales the cursor on button / link hover"
  },
  delay: {
    type: ControlType.Number,
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.3
  },
  hideDefaultCursor: {
    type: ControlType.Boolean,
    defaultValue: false
  }
}
