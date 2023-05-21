import * as React from 'react'
import { ControlType } from 'framer'
import styles from './styles.modules.css'
import { useFollowCursor } from '../../hooks/useFollowCursor'
import { motion, useMotionValue } from 'framer-motion'

const defaultSrc = 'https://labs.moniet.dev/framer-components/public/default-cursor.png'

export const CustomCursorOnHover = ({
  cursor: cursorProps,
  children,
  size = 45,
  delay = 0.3,
  scaleIn = true,
  fadeIn = true,
  backgroundColor = '#fff',
}) => {
  const container = React.useRef<HTMLDivElement>(null)
  const cursor = React.useRef<HTMLDivElement>()
  const [isHovering, setIsHovering] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseEnter = (e: MouseEvent) => setIsHovering(true)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  React.useEffect(() => {
    if (container.current) {
      const { top, left } = container.current?.getBoundingClientRect()
      mouseX.set(left)
      mouseY.set(top)
    }
  }, [])

  return (
    <div
      ref={container as any}
      className={styles.container}
      onMouseEnter={handleMouseEnter as any}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={
        {
          '--bg-color': backgroundColor,
          '--size': `${size}px`,
        } as any
      }
    >
      {children}

      <motion.div
        ref={cursor as any}
        className={styles.cursor}
        aria-hidden={true}
        style={
          {
            '--delay': delay + 's',
            x: mouseX,
            y: mouseY,
            opacity: isHovering ? 1 : fadeIn ? 0 : 1,
            scale: isHovering ? 1 : scaleIn ? 0 : 1,
          } as any
        }
      >
        <img alt="cursor" src={cursorProps?.src || defaultSrc} />
      </motion.div>
    </div>
  )
}

export const propControls = {
  cursor: {
    type: ControlType.ResponsiveImage,
  },
  children: {
    type: ControlType.ComponentInstance,
  },
  size: {
    type: ControlType.Number,
    defaultValue: 45,
  },
  scaleIn: {
    type: ControlType.Boolean,
    defaultValue: true,
  },
  fadeIn: {
    type: ControlType.Boolean,
    defaultValue: true,
  },
  delay: {
    type: ControlType.Number,
    min: 0,
    max: 2,
    step: 0.05,
    defaultValue: 0.3,
  },
  backgroundColor: {
    type: ControlType.Color,
    defaultValue: '#fff',
  },
}
