import * as React from "react"
import {
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  motion
} from "framer-motion"

export const SkewOnScroll = ({ children, duration = 0.4 }) => {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const scaleY = useTransform(velocity, [0, 1000], [1, 1.2])
  const skew = useTransform(velocity, [0, 1000], [0, 3])
  const finalSkew = useTransform(skew, (num) => `${num}deg`)

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
