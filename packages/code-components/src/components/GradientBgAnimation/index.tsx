import * as React from 'react'
import styles from './styles.modules.css'
import { ControlType } from 'framer'
import { motion } from 'framer-motion'
import { BoxShadowProps, boxShadowProps } from 'src/utils/framerControlProps'

type Props = {
  borderRadius?: number
  size?: number
  angle?: number
  colorsText?: string
  blur?: number
  animation: {
    duration?: number
    animateAngle?: boolean
  }
  shadow: BoxShadowProps
  withShadow?: boolean
}

const defaultGradient = 'hsl(243 90% 47%), hsl(286 95% 54%),hsl(333 100% 62%)'

export const GradientBgAnimation = ({
  colorsText = defaultGradient,
  borderRadius = 20,
  size = 300,
  angle = 0,
  blur = 0,
  animation = { duration: 2, animateAngle: false },
  shadow = { x: -0, y: 0, blur: 10, size: 0, color: 'rgba(0,0,0,0.2)' } as any,
  withShadow = false,
}: Partial<Props>) => {
  const { duration, animateAngle } = animation
  const colors = colorsText.split(',')
  const boxShadow = withShadow
    ? {
        '--bs-x': shadow.x + 'px',
        '--bs-y': shadow.y + 'px',
        '--bs-blur': shadow.blur + 'px',
        '--bs-spread': shadow.size + 'px',
        '--bs-color': shadow.color,
      }
    : {}
  return (
    <div
      style={
        {
          '--br': `${borderRadius}px`,
          ...boxShadow,
        } as any
      }
      className={styles.wrapper}
    >
      <motion.div
        transition={{
          duration,
          repeat: Infinity,
        }}
        style={
          {
            '--lg': `${angle}deg, ${colors}`,
            '--angle': angle || 0,
            '--background-size': size ? `${size}% ${size}%` : '300% 300%',
          } as any
        }
        animate={
          {
            backgroundPositionY: ['0%', `100%`, '0%'],
            backgroundPositionX: ['0%', `100%`, '0%'],
            ...(animateAngle ? { '--angle': [angle, angle + 180, angle] } : {}),
          } as any
        }
        className={styles.container}
      />

      {!!blur && (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backdropFilter: `blur(${blur}px)`,
            borderRadius: `${borderRadius}px`,
          }}
        ></div>
      )}
    </div>
  )
}

export const propControls = {
  colorText: {
    title: 'Colors',
    type: ControlType.String,
    defaultValue: defaultGradient,
  },
  size: {
    type: ControlType.Number,
    min: 100,
    max: 1000,
    defaultValue: 300,
  },
  blur: {
    type: ControlType.Number,
    defaultValue: 0,
    displaySteppr: true,
  },
  angle: {
    type: ControlType.Number,
    defaultValue: 30,
    min: 0,
    max: 360,
    step: 5,
  },
  borderRadius: {
    type: ControlType.Number,
    min: 0,
    max: 1000,
  },
  withShadow: {
    title: 'With Shadow',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  shadow: {
    hidden: (props) => !props.withShadow,
    title: 'Shadow',
    type: ControlType.Object,
    controls: {
      ...boxShadowProps,
    },
  },
  animation: {
    title: 'Animation',
    type: ControlType.Object,
    controls: {
      animateAngle: {
        type: ControlType.Boolean,
        defaultValue: false,
      },
      duration: {
        title: 'Duration',
        type: ControlType.Number,
        defaultValue: 10,
        displayStepper: true,
      },
    },
  },
}
