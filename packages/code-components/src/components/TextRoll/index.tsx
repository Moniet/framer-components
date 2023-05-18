import { ControlType } from 'framer'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

type Props = {
  text: string
  animation: {
    delay: number
    duration: number
    offset: number
    initialAnimation: boolean
    syncAnimations: boolean
    fadeInOut: boolean
  }
  typography: {
    font: string
    fontSize: number
    fontWeight: number
    color: string
  }
}

export const TextRoll = ({
  text = 'Example Text, Goes Here',
  typography = {
    fontWeight: 400,
    fontSize: 20,
    font: 'Helvetica, sans-serif',
    color: '#555',
  },
  animation = {
    fadeInOut: true,
    delay: 2000,
    duration: 1000,
    offset: 50,
    initialAnimation: false,
    syncAnimations: true,
  },
}: Partial<Props>) => {
  const { fontWeight, fontSize, font, color } = typography
  const { fadeInOut, delay, duration, offset, initialAnimation, syncAnimations } = animation

  const [index, setIndex] = useState(0)
  const words = text.split(',')
  const currentWord = words[index]

  useEffect(() => {
    const int = setInterval(() => {
      const nextIndex = index + 1
      if (nextIndex < words.length) {
        return setIndex(nextIndex)
      } else {
        setIndex(0)
      }
    }, delay)

    return () => {
      clearInterval(int)
    }
  }, [words])

  return (
    <div className={styles.container}>
      <AnimatePresence initial={initialAnimation} mode={syncAnimations ? 'popLayout' : 'wait'}>
        <motion.div
          key={index}
          className={styles.text}
          style={{
            fontFamily: font || 'inherit',
            fontSize: fontSize + 'px',
            fontWeight,
            color,
          }}
          animate={{ y: [offset, 0], opacity: 1, dur: duration }}
          exit={{ opacity: fadeInOut ? 0 : 1, y: -offset, dur: duration }}
        >
          {currentWord}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export const propControls = {
  text: {
    type: ControlType.String,
    defaultValue: 'Example Text, Created By, Comma Separating, These Words',
  },
  animation: {
    type: ControlType.Object,
    Title: 'Animation',
    controls: {
      duration: {
        type: ControlType.Number,
        defaultValue: 1000,
        max: 10000,
        min: 100,
        displayStepper: true,
      },
      delay: {
        type: ControlType.Number,
        max: 10000,
        min: 100,
        defaultValue: 2000,
      },
      offset: {
        type: ControlType.Number,
        defaultValue: 50,
      },
      fadeInOut: {
        title: 'Fade In/Out',
        type: ControlType.Boolean,
        defaultValue: false,
      },
      initialAnimation: {
        title: 'Initial Anim',
        type: ControlType.Boolean,
        defaultValue: false,
      },
      syncAnimations: {
        title: 'Sync',
        type: ControlType.Boolean,
        defaultValue: true,
      },
    },
  },
  typography: {
    type: ControlType.Object,
    controls: {
      fontSize: {
        type: ControlType.Number,
        defaultValue: 20,
        min: 1,
        max: 100,
      },
      fontWeight: {
        type: ControlType.Number,
        defaultValue: 400,
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
