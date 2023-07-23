import { motion } from 'framer-motion'

import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'
import useMediaQuery from 'src/hooks/useMediaQuery'
import { getNumProps, getStrProps } from '../../utils/framerControlProps'
import { ControlType } from 'framer'

type Props = {
  openWidth: number
  aspectRatio: number
  padding: number
  borderRadius: number
  overlayColor: string
  overlayOpacity: number
  image: {
    src?: string
  }
}

export const ImageWithOverlay = ({
  openWidth = 500,
  aspectRatio = 1.4,
  padding = 20,
  borderRadius = 10,
  overlayColor = '#000',
  overlayOpacity = 0.5,
  image,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const openHeight = Math.floor(openWidth / aspectRatio)
  const [width] = [openWidth, openHeight].map((d) => d + 'px')
  const [transX, transY] = [openWidth, openHeight].map((d) => Math.floor(d / 2) + 'px')

  const swipeConfidenceThreshold = 200
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  const isSmallDevice = useMediaQuery(`(max-width: ${openWidth + 100}px)`)

  const [zIndex, setZIndex] = useState(0)

  const handleClose = () => {
    window.document.body.style.setProperty('height', 'auto')
    window.document.body.style.setProperty('overflow', 'auto')
    setIsOpen(false)

    setTimeout(() => {
      setZIndex(1)
    }, 500)
  }

  const handleOpen = () => {
    window.document.body.style.setProperty('height', window.innerHeight + 'px')
    window.document.body.style.setProperty('overflow', 'hidden')
    setZIndex(100001)
    setIsOpen(true)
  }

  const img = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target as Element
      if (!target?.contains(ref.current)) {
        handleClose()
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div style={{ overscrollBehavior: 'contain' }}>
      <motion.div
        ref={img}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: isOpen ? 100000 : 1,
          overscrollBehavior: 'contain',
        }}
        animate={{
          opacity: isOpen ? overlayOpacity : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          backgroundColor: overlayColor,
          dur: 0.5,
        }}
      />
      <div className={isSmallDevice && isOpen ? styles.center : ''} style={{ zIndex }}>
        <motion.div
          ref={ref}
          onClick={(e) => {
            e.stopPropagation()
            handleOpen()
          }}
          className={isSmallDevice ? styles.containerSmall : ''}
          style={
            {
              aspectRatio,
              top: isOpen && !isSmallDevice ? `calc(50% - ${transY})` : 0,
              left: isOpen && !isSmallDevice ? `calc(50% - ${transX})` : 0,
              position: isOpen && !isSmallDevice ? 'fixed' : 'relative',
              height: isOpen ? 'auto' : '100%',
              width: isOpen && !isSmallDevice ? width : '100%',
              zIndex,
              '--padding': padding + 'px',
            } as any
          }
          transition={{
            duration: 0.5,
            type: 'spring',
            damping: 15,
          }}
        >
          <motion.img
            layout
            drag={isOpen ? 'y' : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.2}
            dragSnapToOrigin
            onClick={() => setIsOpen(!isOpen)}
            src={
              image?.src ?? 'https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/vid-thumbnail.jpg'
            }
            style={{
              aspectRatio,
              width: '100%',
              height: 'auto',
              objectFit: 'fill',
              borderRadius: borderRadius + 'px',
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (Math.abs(swipe) >= swipeConfidenceThreshold) {
                handleClose()
              }
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export const propControls = {
  openWidth: {
    ...getNumProps(500, true, 10, { min: 100 }),
    description: 'The height is automatically set based on the aspect ratio',
  },
  aspectRatio: getNumProps(1.4, true, 0.1, { min: 0.5, max: 2 }),
  padding: {
    ...getNumProps(20, true, 5, { min: 0 }),
    description: 'The padding on small devices',
  },
  overlayColor: getStrProps('#000'),
  overlayOpacity: getNumProps(0.5, true, 0.1, { min: 0.1, max: 1 }),
  borderRadius: getNumProps(10, false, 1, { min: 0, max: 100 }),
  image: {
    type: ControlType.ResponsiveImage,
  },
}
