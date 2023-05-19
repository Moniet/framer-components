import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Flex } from 'theme-ui'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { HiPlay } from 'react-icons/hi'

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (video.current) {
      if (playVideo) {
        video.current.volume = 0.3
        video.current?.play()
      } else {
        video.current?.pause()
      }
    }
  }, [playVideo])

  return (
    <Flex
      sx={{
        borderRadius: '10px',
        position: 'relative',
        // overflow: 'hidden',
        width: 'min(100%, 900px)',
        height: 'auto',
        perspective: '1000px',
        cursor: 'pointer',
      }}
      onClick={() => {
        if (!playVideo) {
          setPlayVideo(true)
        }
      }}
    >
      <motion.div
        sx={{ size: '100%' }}
        initial={{
          opacity: 0,
          rotateX: '60deg',
          y: 40,
        }}
        animate={{
          rotateX: '0deg',
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          type: 'spring',
          bounce: 0.3,
        }}
      >
        <video
          ref={video}
          preload="auto"
          src="https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/framerlib_promo.mp4"
          sx={{ borderRadius: '10px', width: '100%', height: 'auto' }}
          onPause={() => setPlayVideo(false)}
          onPlay={() => setPlayVideo(true)}
          controls
        />

        <motion.div
          variants={{
            exit: {
              opacity: 0,
              zIndex: -1,
            },
            initial: {
              opacity: 1,
              zIndex: 1,
            },
          }}
          animate={playVideo ? 'exit' : 'initial'}
          sx={{ size: ' 100%', position: 'absolute', top: 0, left: 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          <Image
            src="/promo_thumbnail.png"
            alt=""
            width="1920"
            height="1080"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
              pointerEvents: 'none',
              borderRadius: '10px',
            }}
          />
          <button sx={{ size: 'fit-content', color: 'text' }}>
            <div
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                size: '80px',
                bg: 'rgba(0,0,0,0.8)',
                display: 'flex',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            >
              <span sx={{ margin: 'auto' }}>
                <HiPlay size={40} />
              </span>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </Flex>
  )
}

export default Video
