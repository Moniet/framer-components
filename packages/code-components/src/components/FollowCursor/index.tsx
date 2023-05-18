import { motion, useMotionValue, useSpring, useTransform } from 'framer'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { getNumProps, getSingleChild } from '../../utils/framerControlProps'
import FollowCursorExample from './FollowCursorExample'
import { useFollowCursor } from '../../hooks/useFollowCursor'

type Props = {
  movement: number
  duration: number
  children: React.ReactNode
}

export const FollowCursor = ({ children, duration = 0.3, movement = 30 }: Partial<Props>) => {
  const ref = useRef<HTMLDivElement>(null)
  const { mouseX, mouseY, handleMouseEnter, handleMouseMove, handleMouseLeave } = useFollowCursor(
    ref,
    {
      movement,
    }
  )

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter as any}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={styles.container}
        style={
          {
            x: mouseX,
            y: mouseY,
            '--duration': `${duration}s`,
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
  children: getSingleChild(),
}
