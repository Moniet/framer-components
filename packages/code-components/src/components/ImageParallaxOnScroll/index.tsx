import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { addPropertyControls, ControlType } from 'framer'
import styles from './styles.modules.css'

type Props = {
  scale?: number
  image?: {
    src: string
    alt: string
  }
  borderRadius?: number
  offset?: number
  startAnimationFrom?: 'screen-center' | 'screen-end'
}

const fallbackImg =
  'https://images.unsplash.com/photo-1683142667313-49cb993d29e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

/*
    @framerSupportedLayoutWidth fixed
    @framerSupportedLayoutHeight fixed
*/

export function ImageParallaxOnScroll({
  image,
  borderRadius = 10,
  offset = 100,
  startAnimationFrom = 'screen-center',
}: Props) {
  const ref = useRef(null)
  const offsetValues = (() => {
    if (startAnimationFrom === 'screen-end') {
      return ['start end', 'end start'] as any
    }
    return ['start center', 'end start'] as any
  })()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offsetValues,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -1 * Math.round(offset / 2)])

  return (
    <motion.div
      ref={ref}
      style={
        {
          '--br': `${borderRadius}px`,
        } as any
      }
      className={styles.container}
    >
      <motion.img
        src={image?.src || fallbackImg}
        alt={image?.alt || ''}
        className={styles.img}
        style={
          {
            y,
            '--offset': `${offset}px`,
          } as any
        }
      />
    </motion.div>
  )
}

export const propsControls = {
  scale: {
    type: ControlType.Number,
    defaultValue: 1.3,
    min: 1,
    max: 2,
    step: 0.1,
  },
  borderRadius: {
    type: ControlType.Number,
    defaultValue: 10,
    min: 0,
    max: 20,
  },
  image: {
    type: ControlType.ResponsiveImage,
  },
  startAnimationFrom: {
    type: ControlType.Enum,
    options: ['screen-end', 'screen-center'],
    optionTitles: ['Screen End', 'Screen Start'],
  },
}
