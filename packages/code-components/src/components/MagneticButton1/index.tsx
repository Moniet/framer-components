import React, { useEffect, useRef } from 'react'
import { ControlType } from 'framer'
import { useFollowCursor } from '../../hooks/useFollowCursor'
import { motion, useTransform } from 'framer-motion'
import styles from './styles.module.css'
import { getTypeographyStyles, typography } from '../../utils/framerControlProps'
import { getColorProps, getNumProps, getStrProps } from '../../utils/framerControlProps'

export const MagneticButton = ({
  text = 'Magnetic Button',
  bgColor = '#fff',
  borderColor = '#000',
  borderWidth = 2,
  borderRadius = 5,
  buttonPadding = 50,
  cursorPadding = 50,
  sensitivity = 150,
  movement = 50,
  typography,
}: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const { mouseX, mouseY, handleMouseMove, handleMouseLeave, handleMouseEnter } = useFollowCursor(
    ref,
    {
      movement,
      range: sensitivity,
    }
  )

  const negX = useTransform(mouseX, (v: number) => v * -0.5)
  const negY = useTransform(mouseY, (v: number) => v * -0.5)

  return (
    <div
      style={
        {
          '--cursor-padding': cursorPadding + 'px',
          '--btn-padding': buttonPadding + 'px',
          '--border-radius': borderRadius + 'px',
          '--border-width': borderWidth + 'px',
          '--border-color': borderColor,
          '--bg-color': bgColor,
          ...getTypeographyStyles(typography, 20, 400),
        } as any
      }
      className={styles.wrapper}
      ref={ref}
      onMouseEnter={handleMouseEnter as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ x: mouseX, y: mouseY }}>
        <div className={styles.btn}>
          <div data-fc="text-wrap">
            <motion.div style={{ x: negX, y: negY }}>{text}</motion.div>
          </div>
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  )
}

export const propsControls = {
  text: getStrProps('Magnetic Button'),
  bgColor: { ...getColorProps('#fff'), title: 'Background Color' },
  borderColor: getColorProps('#000'),
  borderWidth: getNumProps(2, true, 1, { min: 0 }),
  borderRadius: getNumProps(5, true, 1, { min: 0 }),
  buttonPadding: getNumProps(50, true, 5, { min: 0 }),
  cursorPadding: {
    ...getNumProps(50, true, 5, { min: 0 }),
    description: 'The "invisible" padding around the button for the cursor to interact with',
  },
  sensitivity: getNumProps(150, false, 10, { min: 50, max: 1000 }),
  movement: { ...getNumProps(50, false, 10, { min: 10, max: 1000 }) },
  typography: {
    type: ControlType.Object,
    controls: {
      letterSpacing: getNumProps(0, false, 1, { min: 0, max: 100 }),
      fontSize: {
        type: ControlType.Number,
        defaultValue: 20,
        min: 1,
        max: 100,
      },
      fontWeight: {
        type: ControlType.Number,
        defaultValue: 400,
        step: 100,
        min: 100,
        max: 1000,
      },
      font: {
        type: ControlType.String,
        default: 'Helvetica, sans-serif',
      },
      color: {
        type: ControlType.Color,
        default: '#555',
      },
    },
  },
}
