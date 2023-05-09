import * as React from "react"
import styles from "./styles.module.css"
import { AnimatePresence, ControlType } from "framer"
import {
  getNumProps,
  getSingleChild,
  boxShadowProps,
  BoxShadowProps
} from "../../utils/framerControlProps"
import { ExampleChild } from "./ExampleChild"
import { motion } from "framer-motion"
import { useState } from "react"
import { variants } from "./variants"

const defaultVideo =
  "https://labs.moniet.dev/framer-components/public/screen-rec.mov"

type Props = {
  children?: React.ReactNode
  w?: number | string
  h?: number | string
  radius?: number
  videoSrc?: string
  margin?: number
  align: "top" | "bottom" | "left" | "right"
  id?: string
  boxShadow: BoxShadowProps[]
}

export const VideoPeek = ({
  children,
  videoSrc = defaultVideo,
  w: width = 200,
  h: height = 200,
  radius = 10,
  margin = 40,
  align,
  id = "1234",
  boxShadow: shadows
}: Props) => {
  const alignClass = (() => {
    switch (align) {
      case "top":
        return styles.alignTop
      case "bottom":
        return styles.alignBottom
      default:
        return styles.top
    }
  })()

  const boxShadow = shadows
    ?.map(
      ({ x, y, blur, color, size }) => `${x}px ${y}px ${blur} ${size} ${color}`
    )
    .join(",")

  const videoClass = `${styles.videoWrapper} ${alignClass}`
  const [hovering, setHovering] = useState(false)

  return (
    <div
      className={styles.wrapper}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children || <ExampleChild />}
      <AnimatePresence>
        {hovering && (
          <motion.div
            variants={variants}
            exit="fadeOut"
            animate="fadeIn"
            initial="initial"
            transition={{
              duration: 0.3
            }}
            style={
              {
                boxShadow,
                "--border-radius": `${radius}px`,
                "--width": `${parseInt(width + "")}px`,
                "--height": `${parseInt(height + "")}px`,
                "--margin": `${margin}px`
              } as any
            }
            className={videoClass}
          >
            <video
              id={`fc-video${id}`}
              muted
              src={videoSrc}
              className={styles.video}
              loop={true}
              autoPlay
              onCanPlay={(e) => {
                ;(e.target as any).play()
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const propsControls = {
  videoSrc: {
    title: "Video",
    type: ControlType.File,
    allowedFileTypes: ["mov", "mp4"]
  },
  w: {
    ...getNumProps(200, true, 10, { min: 50, max: 1000 }),
    title: "Width"
  },
  h: {
    ...getNumProps(200, true, 10, { min: 50, max: 1000 }),
    title: "Height"
  },
  margin: getNumProps(50, true, 10, { min: 10, max: 100 }),
  align: {
    type: ControlType.Enum,
    options: ["top", "bottom"],
    defaultValue: "top"
  },
  children: getSingleChild(),
  boxShadow: {
    type: ControlType.Array,
    control: boxShadowProps
  }
}
