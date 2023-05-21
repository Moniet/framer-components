import React, { useRef } from 'react'
import styles from './styles.module.css'
import { motion, useInView } from 'framer-motion'
import { useSplitText } from '../../hooks/useSplitText'
import {
  getBoolProps,
  getNumProps,
  getStrProps,
  getTypeographyStyles,
  typography,
} from '../../utils/framerControlProps'

export const SplitTextReveal = ({
  typography,
  text = 'Example Text',
  space = 20,
  fadeIn = true,
  offsetY = 0,
  offsetX = 5,
  duration = 1,
}) => {
  const splitWords = text.split(' ').map((word) => word.split(''))
  const ref = useRef(null)
  const inView = useInView(ref)
  const staggerBy = duration / splitWords.flat().length

  const variants = {
    reveal: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    initial: {
      x: offsetX,
      y: offsetY,
      opacity: fadeIn ? 0 : 1,
    },
  }

  const splitText = useSplitText(text)

  return (
    <div
      className={styles.container}
      style={
        {
          ...getTypeographyStyles(typography),
          '--letter-spacing': typography?.letterSpacing ? typography.letterSpacing + 'px' : '10px',
        } as any
      }
      ref={ref}
    >
      {splitText?.map(({ isSpace, letter, position }, i: number) => (
        <React.Fragment key={i}>
          {isSpace ? (
            <span data-component={'fc-space'} style={{ '--space': space + 'px' } as any}></span>
          ) : (
            <motion.span
              variants={variants}
              animate={inView ? 'reveal' : 'initial'}
              initial="initial"
              transition={{
                delay: position * staggerBy, // stagger * no. of previous letters
                duration: staggerBy,
                type: 'spring',
                damping: 20,
                bounce: 0.1,
              }}
            >
              {letter}
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export const propsControls = {
  typography,
  space: getNumProps(10, true, 1, { min: 0, max: 100 }),
  text: getStrProps('Example Text'),
  duration: getNumProps(0.5, false, 0.1, { min: 0.1, max: 2 }),
  offsetX: getNumProps(5, false, 1, { min: -50, max: 50 }),
  offsetY: getNumProps(0, false, 1, { min: -50, max: 50 }),
  fadeIn: getBoolProps(false),
}
