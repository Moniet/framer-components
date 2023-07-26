import * as React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { getNumProps, getSingleChild } from '../../utils/framerControlProps'

export const FlipOnScroll = ({
  children,
  initialScale = 1.1,
  offsetTop = -300,
  offsetBottom = 0,
  rotate = 30,
}) => {
  const ref = React.useRef(null)
  const offset1 = `${offsetTop}px 0px` as any
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offset1, `${offsetBottom}px 0px`],
  })
  const rotateY = useTransform(scrollYProgress, [0, 1], [rotate, 0])
  const scaleValue = useTransform(scrollYProgress, [0, 1], [initialScale, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        rotateY,
        perspective: '5000px',
        transition: 'transform 1s ease-out',
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 100%',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          scale: scaleValue,
          transition: 'transform 1s ease-out',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export const propsControls = {
  scale: getNumProps(1.1, false, 0.1, { min: 1, max: 2 }),
  rotate: getNumProps(30, false, 10, { min: 0, max: 180 }),
  offsetTop: getNumProps(-300, true, 10),
  offsetBottom: getNumProps(300, true, 10),
  children: getSingleChild(),
}
