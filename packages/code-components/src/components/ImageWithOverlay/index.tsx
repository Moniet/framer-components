import { motion } from 'framer-motion'

import styles from './styles.module.css'
import { useRef, useState } from 'react'
import useMediaQuery from 'src/hooks/useMediaQuery'
import { getNumProps } from '../../utils/framerControlProps'

type Props = {
  openWidth: number
  aspectRatio: number
  padding: number
}

export const ImageWithOverlay = ({ openWidth = 500, aspectRatio = 1.4, padding = 20 }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const openHeight = Math.floor(openWidth / aspectRatio)
  const [width] = [openWidth, openHeight].map((d) => d + 'px')
  const [transX, transY] = [openWidth, openHeight].map((d) => Math.floor(d / 2) + 'px')

  const swipeConfidenceThreshold = 250
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  const isSmallDevice = useMediaQuery(`(max-width: ${openWidth + 100}px)`) //

  return (
    <>
      <motion.div
        initial={{ opacity: 0, pointerEvents: 'none' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
        animate={{
          opacity: isOpen ? 0.8 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          backgroundColor: '#fff',
        }}
        onClick={() => setIsOpen(false)}
      />
      <div className={isSmallDevice && isOpen ? styles.center : ''}>
        <motion.div
          ref={ref}
          onClick={() => setIsOpen(true)}
          className={isSmallDevice ? styles.containerSmall : ''}
          style={
            {
              aspectRatio,
              top: isOpen && !isSmallDevice ? `calc(50% - ${transY})` : 0,
              left: isOpen && !isSmallDevice ? `calc(50% - ${transX})` : 0,
              position: isOpen && !isSmallDevice ? 'fixed' : 'relative',
              height: isOpen ? 'auto' : '100%',
              width: isOpen && !isSmallDevice ? width : '100%',
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
            src="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/vid-thumbnail.jpg"
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio,
              objectFit: 'fill',
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              console.log(swipe)

              if (Math.abs(swipe) > swipeConfidenceThreshold) {
                setIsOpen(false)
              }
            }}
          />
        </motion.div>
      </div>
    </>
  )
}

export const propControls = {
  openWidth: {
    ...getNumProps(500, true, 10, { min: 100 }),
    description: 'The height is automatically set based on the aspect ratio',
  },
  borderRadius: getNumProps(10, false, 1, { min: 0, max: 100 }),
  aspectRatio: getNumProps(1.4, true, 0.1, { min: 0.5, max: 2 }),
  padding: {
    ...getNumProps(20, true, 5, { min: 0 }),
    description: 'The padding on small devices',
  },
}
