import { ControlType, useMotionValue, useSpring } from 'framer'
import { motion } from 'framer'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { getNumProps } from '../../utils/framerControlProps'
import { getBoolProps } from '../../utils/framerControlProps'

type Props = {
  cursor?: {
    src?: string
  }
  duration?: number
  bounce?: boolean
  cursorWidth?: number
  cursorHeight?: number
}

export const GlobalCustomCursor = ({
  cursor,
  duration = 0.5,
  bounce = false,
  cursorWidth: width = 40,
  cursorHeight: height = 40,
}: Props) => {
  const ref = React.useRef(null)
  const [loaded, setLoaded] = React.useState(false)
  const [isServer, setIsServer] = React.useState(true)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opts = {
    damping: bounce ? 15 : 20,
    bounce: bounce ? 0.3 : 0.1,
  }
  const xTween = useSpring(x, opts as any)
  const yTween = useSpring(y, opts as any)

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const ev = e as MouseEvent

      x.set(ev.clientX, { ...opts, duration } as any)
      y.set(ev.clientY, { ...opts, duration } as any)
    }

    document.body.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isServer])

  React.useEffect(() => {
    setIsServer(false)
  }, [])

  if (isServer) return null

  return createPortal(
    <motion.img
      aria-hidden={true}
      onLoad={() => {
        setLoaded(true)
      }}
      ref={ref}
      src={cursor?.src || 'https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/dogecoint.webp'}
      width={width}
      height={height}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: xTween,
        y: yTween,
        opacity: loaded ? 1 : 0,
        marginTop: (-width / 2).toFixed(4) + 'px',
        marginLeft: (-height / 2).toFixed(4) + 'px',
        borderRadius: '10px',
        pointerEvents: 'none',
      }}
    />,
    document.body
  )
}

export const propControls = {
  cursor: {
    type: ControlType.ResponsiveImage,
  },
  cursorWidth: getNumProps(40, true, 1),
  cursorHeight: getNumProps(40, true, 1),
  bounce: getBoolProps(false),
  duration: getNumProps(0.5, true, 0.1, { min: 0.1 }),
}
