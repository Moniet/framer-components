import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ControlType } from 'framer'
import { getBoolProps, getColorProps, getNumProps } from '../../utils/framerControlProps'
import { PlayIcon } from './PlayIcon'

type Props = {
  image: {
    src?: string
  }
  video: string
  playButtonFrame: React.ReactNode
  defaultVolume: number
  isMuted: boolean
  autoPlay: boolean
  borderRadius: number
  playButtonColor: string
  buttonBackgroundColor: string
}

export const Video = ({
  image,
  video = 'https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/guide%20video.mp4',
  playButtonFrame = <PlayIcon />,
  defaultVolume = 0.3,
  isMuted,
  autoPlay,
  borderRadius,
  playButtonColor = '#fff',
  buttonBackgroundColor = 'rgba(0,0,0,0.5)',
}: Partial<Props>) => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoEl = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.volume = defaultVolume
    }
  }, [defaultVolume])

  return (
    <div
      style={{
        borderRadius: borderRadius + 'px',
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
      onClick={() => {
        if (videoEl.current?.paused) {
          videoEl.current.play()
        } else {
          videoEl.current?.pause()
        }
      }}
    >
      <video
        ref={videoEl}
        preload="auto"
        src={video}
        style={{ width: '100%', height: '100%' }}
        onPause={() => setPlayVideo(false)}
        onPlay={() => setPlayVideo(true)}
        autoPlay={autoPlay}
        muted={autoPlay ? true : isMuted}
        controlsList="nodownload"
      />

      <motion.div
        variants={{
          exit: {
            opacity: 0,
            pointerEvents: 'none',
          },
          initial: {
            opacity: 1,
            zIndex: 1,
            pointerEvents: 'all',
          },
        }}
        initial={autoPlay ? 'exit' : 'initial'}
        animate={playVideo ? 'exit' : 'initial'}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        <img
          src={
            image?.src || 'https://pub-db5cfbac23934b6e9312219ce0bd3ca4.r2.dev/vid-thumbnail.jpg'
          }
          alt=""
          width="1920"
          height="1080"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            cursor: 'pointer',
            pointerEvents: 'none',
          }}
        />
        <div
          role="button"
          aria-label="Play"
          style={{ width: 'fit-content', height: 'fit-content', color: 'black' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              background: buttonBackgroundColor,
              display: 'flex',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          >
            <span style={{ margin: 'auto', color: playButtonColor }}>
              {playButtonFrame || <PlayIcon />}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const propControls = {
  isMuted: {
    title: 'Muted',
    type: ControlType.Boolean,
    hidden(props) {
      return props.autoPlay
    },
  },
  video: {
    type: ControlType.File,
    title: 'Video',
    allowedFileTypes: ['mov', 'mp4', 'webm'],
  },
  image: {
    title: 'Thumbnail',
    type: ControlType.ResponsiveImage,
  },
  playButtonFrame: {
    type: ControlType.ComponentInstance,
  },
  playButtonColor: getColorProps('#fff'),
  buttonBackgroundColor: getColorProps('rgba(0,0,0,0)'),
  autoPlay: getBoolProps(false),
  borderRadius: getNumProps(10, true, 1, { min: 0, max: 20 }),
}
