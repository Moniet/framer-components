import { useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { getNumProps } from '../../utils/framerControlProps'

export const SmoothScroll = ({ duration = 1, rootSelector = '#main' }) => {
  const root = useMemo(
    () => (globalThis.window ? (document.querySelector(rootSelector) as HTMLDivElement) : null),
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

    const handleScroll = (e) => {
      root?.style.setProperty('transform', `translateY(${-1 * window.scrollY}px)`)
    }

    window.addEventListener('resize', setBodyHeight)
    window.addEventListener('scroll', handleScroll)

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
      window.removeEventListener('scroll', handleScroll)
      document.body.style.setProperty('height', 'auto')

      if (root) {
        root.style.height = 'auto'
        root.style.width = 'auto'
        root.style.position = 'relative'
        root.style.overflow = 'auto'
        root.style.transition = 'none'
        root?.style.setProperty('transform', `translateY(0)`)
      }
    }
  }, [root, duration])

  return <span />
}

export const propControls = {
  duration: getNumProps(1, true, 0.1, { min: 0.1 }),
}
