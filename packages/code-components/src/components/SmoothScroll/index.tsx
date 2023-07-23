import { useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { getNumProps } from '../../utils/framerControlProps'

export const SmoothScroll = ({ duration = 1 }) => {
  const root = useMemo(
    () => (globalThis.window ? (document.querySelector('#main') as HTMLDivElement) : null),
    []
  )

  useEffect(() => {
    let to: NodeJS.Timeout

    const setBodyHeight = () => {
      if (to) clearTimeout(to)
      to = setTimeout(() => {
        document.body.style.setProperty('height', root?.scrollHeight + 'px')
      }, 100)
    }

    window.addEventListener('resize', setBodyHeight)

    window.addEventListener('scroll', (e) => {
      root?.style.setProperty('transform', `translateY(${-1 * window.scrollY}px)`)
    })

    setTimeout(() => {
      setBodyHeight()
    }, 10)

    if (root) {
      root.style.height = '100%'
      root.style.width = '100%'
      root.style.position = 'fixed'
      root.style.top = '0'
      root.style.left = '0'
      root.style.overflow = 'visible'
      root.style.transition = 'transform ease-out'
      root.style.transitionDuration = duration + 's'
    }

    return () => {
      window.removeEventListener('resize', setBodyHeight)
    }
  }, [root, duration])

  return <span />
}

export const propControls = {
  duration: getNumProps(1, true, 0.1, { min: 0.1 }),
}
