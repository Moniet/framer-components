import { motion, useMotionValue, useSpring, useTransform } from "framer"
import React, { useRef } from "react"
import styles from "./styles.module.css"
import { getNumProps, getSingleChild } from "../../utils/framerControlProps"
import FollowCursorExample from "./FollowCursorExample"

type Props = {
  movement: number
  duration: number
  children: React.ReactNode
}

let timeout: NodeJS.Timeout
export const FollowCursor = ({
  children,
  duration = 0.3,
  movement = 30
}: Partial<Props>) => {
  const xPos = useMotionValue(0)
  const yPos = useMotionValue(0)
  const xt = useTransform(xPos, [-200, 200], [-movement, movement])
  const yt = useTransform(yPos, [-200, 200], [-movement, movement])
  const ref = useRef<HTMLDivElement>(null)
  const rect = React.useRef({} as any)

  React.useEffect(() => {
    const getSize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const { width, height, top, left } =
          ref.current?.getBoundingClientRect() || {}
        const newDims = {
          left,
          top,
          width,
          height
        }

        rect.current = newDims as any
      }, 200)
    }

    getSize()

    window.addEventListener("resize", getSize)

    return () => {
      try {
        clearTimeout(timeout)
        window.removeEventListener("resize", getSize)
      } catch {}
    }
  }, [ref])

  const x = useSpring(xt)
  const y = useSpring(yt)

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const { left = 0, top = 0 } = rect.current || {}

    e.currentTarget.scrollWidth

    const halfWidth = e.currentTarget.clientWidth
    const halfHeight = e.currentTarget.clientHeight
    const midX = left + halfWidth
    const midY = top + halfHeight
    const xDrift = e.screenX - midX
    const yDrift = e.screenY - midY

    xPos.set(xDrift)
    yPos.set(yDrift)
  }

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => {
        e.preventDefault()
        e.stopPropagation()
        xPos.set(0)
        yPos.set(0)
      }}
    >
      <motion.div
        ref={ref}
        className={styles.container}
        style={
          {
            x,
            y,
            "--duration": `${duration}s`
          } as any
        }
      >
        {children || <FollowCursorExample />}
      </motion.div>
    </div>
  )
}

export const propsControls = {
  movement: getNumProps(30, false, 5, { min: 10, max: 100 }),
  duration: getNumProps(0.3, false, 0.1, { min: 0.1, max: 2 }),
  children: getSingleChild()
}
