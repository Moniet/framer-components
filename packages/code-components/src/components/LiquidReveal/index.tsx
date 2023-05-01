import { motion, useMotionValue, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { getSingleChild } from "src/utils/framerControlProps"
import { getNumProps } from "../../utils/framerControlProps"

export const LiquidReveal = ({ children, id = "123", duration = 3 }) => {
  const ref = useRef(null)
  const turb = useMotionValue(0.1)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const filterId = `fc-liquid-turb-${id}`

  return (
    <div ref={ref}>
      <svg width="0" height="0">
        <defs>
          <filter id={filterId}>
            <motion.feTurbulence
              type="turbulence"
              result="turbulence"
              baseFrequency={turb}
              numOctaves="0.05"
              id="turb"
              animate={{
                baseFrequency: inView ? [0.2, 0] : [0.2]
              }}
              transition={{
                duration: duration,
                type: "spring"
              }}
            />

            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="7"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: `url(#${filterId})` }}>{children}</div>
    </div>
  )
}

export const propsControls = {
  children: getSingleChild(),
  duration: getNumProps(3, true, 0.1, { min: 0.1, max: 5 })
}
