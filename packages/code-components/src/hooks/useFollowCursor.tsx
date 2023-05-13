import { Ref, useRef, MutableRefObject, RefObject, useState } from "react"
import {
  BoundingBox,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion"
import { useCachedRect } from "./useCachedRect"

type Options = {
  movement?: number
  range?: number
}

export const useFollowCursor = (
  ref: RefObject<HTMLElement>,
  options?: Options
) => {
  const { movement = 35, range = 200 } = options || {}
  const rect = useRef<DOMRect>({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  } as any)

  const xPos = useMotionValue(0)
  const yPos = useMotionValue(0)
  const xt = useTransform(xPos, [-range, range], [-movement, movement])
  const yt = useTransform(yPos, [-range, range], [-movement, movement])

  const x = useSpring(xt)
  const y = useSpring(yt)

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const { left = 0, top = 0, height, width } = rect.current || {}
    const midX = left + window.scrollX + width / 2
    const midY = top + window.scrollY + height / 2
    const xDrift = e.clientX - midX
    const yDrift = e.clientY - midY

    xPos.set(xDrift)
    yPos.set(yDrift)
  }

  const handleMouseLeave = () => {
    xPos.set(0)
    yPos.set(0)
  }

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation()

    rect.current = ref.current?.getBoundingClientRect() as any
  }

  return {
    mouseX: x,
    mouseY: y,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter
  }
}
