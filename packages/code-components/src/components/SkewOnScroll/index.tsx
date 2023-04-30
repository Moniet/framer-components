import * as React from "react"
import {
  getMultipleChildren,
  getNumProps
} from "../../utils/framerControlProps"
import {
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  motion
} from "framer-motion"

export const SkewOnScroll = ({
  children,
  duration = 0.4,
  stretch = 1.2,
  skew = 3
}) => {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const scaleY = useTransform(velocity, [0, 1000], [1, stretch])
  const s = useTransform(velocity, [0, 1000], [0, skew])
  const finalSkew = useTransform(s, (num) => `${num}deg`)

  return (
    <motion.div
      style={
        {
          "--scaleY": scaleY,
          "--skew": finalSkew,
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
  children: getMultipleChildren()
}
