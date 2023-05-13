import * as React from "react"
import { createPortal } from "react-dom"
import { LayoutGroup, motion } from "framer-motion"
import { ControlType, useMotionValue } from "framer"
import styles from "./styles.modules.css"
import {
  getColorProps,
  getNumProps,
  getStrProps
} from "../../utils/framerControlProps"

const useMousePosition = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = React.useState("")

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      console.log((e.target as any)?.nodeName)

      const t = (e.target as HTMLDivElement).nodeName

      if (["A", "BUTTON", "IMG"].includes(t)) {
        setIsHovering(t)
      } else if (isHovering) {
        setIsHovering("")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovering])

  return [mouseX, mouseY, isHovering]
}

type Props = {
  delay: number
  hideDefaultCursor: boolean
  size: number
  hoverScale: number
  bgColor: string
  borderColor: string
  opacity: number
  opacityOnHover: number
  borderWidth: number
  text?: string
}

export const CircleCursor = ({
  delay = 0.3,
  size = 20,
  opacity = 1,
  opacityOnHover = 0.5,
  borderColor = "transparent",
  borderWidth = 0,
  hoverScale = 3,
  bgColor = "deepskyblue",
  hideDefaultCursor = false
}: Partial<Props>) => {
  const [mouseX, mouseY, isHovering] = useMousePosition()
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
  }, [isServer])

  if (!cont) return null

  return createPortal(
    <>
      <motion.div
        className={styles.cursorWrapper}
        style={
          {
            x: mouseX,
            y: mouseY,
            scale: isHovering ? hoverScale : 1,
            "--delay": `${delay}s`,
            opacity: isHovering ? opacityOnHover : opacity
          } as any
        }
      >
        <motion.div
          className={styles.cursor}
          style={
            {
              x: 0,
              y: 0,
              "--color": bgColor,
              "--size": size + "px",
              "--border-color": borderColor,
              "--border-width": borderWidth + "px"
            } as any
          }
        />
      </motion.div>
    </>,
    cont
  )
}

export const propControls = {
  size: getNumProps(50, false, 5, { min: 10, max: 100 }),
  hoverScale: getNumProps(1, false, 0.1, { min: 1, max: 5 }),
  bgColor: { ...getColorProps("deepskyblue"), title: "Background Color" },
  opacity: getNumProps(1, false, 0.1, { min: 0, max: 1 }),
  opacityOnHover: getNumProps(1, false, 0.1, { min: 0, max: 1 }),
  borderWidth: getNumProps(0, false, 1, { min: 0, max: 10 }),
  borderColor: getColorProps("transparent"), //
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
