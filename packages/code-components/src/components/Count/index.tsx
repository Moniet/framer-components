import { AnimationPlaybackControls, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { getNumProps, getTypeographyStyles, typography } from '../../utils/framerControlProps'
import { ControlType } from 'framer'
import styles from './styles.module.css'

export const Count = ({ from = 0, to = 50, duration = 1, typography, easing = 'easeInOut' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
  })

  useEffect(() => {
    let c: AnimationPlaybackControls
    if (inView && ref.current) {
      c = animate(from, to, {
        onUpdate: (v) => ((ref.current as any).textContent = Math.floor(v).toFixed(0)),
        duration,
        type: 'tween',
        ease: easing as any,
      })
    }
    return () => {
      c?.cancel()
    }
  }, [inView, duration])

  return (
    <div
      ref={ref}
      className={styles.text}
      style={{
        ...getTypeographyStyles(typography),
      }}
    ></div>
  )
}

export const propControls = {
  easing: {
    type: ControlType.Enum,
    options: ['ease', 'ease-in-out', 'ease-out', 'ease-in', 'linear'],
    optionTitles: ['Ease', 'Ease-In-Out', 'Ease-Out', 'Ease-In', 'Linear'],
    defaultValue: 'ease',
  },
  duration: getNumProps(5, true, 1, { min: 1 }),
  typography: typography,
  from: getNumProps(0, true, 1, { min: 1 }),
  to: getNumProps(50, true, 1, { min: 1 }),
}
