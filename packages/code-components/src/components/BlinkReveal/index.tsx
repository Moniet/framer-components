import { useInView } from 'framer'
import { ReactNode, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { easingProps, getNumProps, getSingleChild } from '../../utils/framerControlProps'
import BlinkRevealExample from './BlinkRevealExample'

type Props = {
  children?: ReactNode
  scaleFrom?: number
  scaleTo?: number
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  duration?: number
}

export const BlinkReveal = ({
  children,
  scaleFrom = 1.3,
  scaleTo = 1,
  easing = 'ease',
  duration = 2,
}: Props) => {
  const ref = useRef(null)
  const child = useRef(null)
  const inView = useInView(ref, {
    once: true,
  })

  useEffect(() => {
    const el = ref.current as any
    const childEl = child.current as any
    const seq = [
      { clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)' },
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
    ]
    const seq2 = [{ transform: `scale(${scaleFrom})` }, { transform: `scale(${scaleTo})` }]

    const animSettings = {
      fill: 'forwards',
      easing,
      duration: duration * 1000,
    }

    if (inView) {
      el.animate(seq, animSettings)
      childEl.animate(seq2, animSettings)
    }
  }, [inView])

  return (
    <div ref={ref} className={styles.container}>
      <div ref={child}>{children || <BlinkRevealExample />}</div>
    </div>
  )
}

export const propsControls = {
  duration: getNumProps(2, false, 0.5, { min: 0.5, max: 10 }),
  easing: {
    ...easingProps,
  },
  scaleFrom: getNumProps(1.3, true, 0.1, { min: 1, max: 2 }),
  scaleTo: getNumProps(1, true, 0.1, { min: 1, max: 2 }),
  children: getSingleChild(),
}
