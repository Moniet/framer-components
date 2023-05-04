import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import { useRef } from "react"

type Props = {
  scale?: number
  image?: {
    src: string
    alt: string
  }
  borderRadius?: number
}

const fallbackImg =
  "https://images.unsplash.com/photo-1683142667313-49cb993d29e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"

/*
    @framerSupportedLayoutWidth fixed
    @framerSupportedLayoutHeight fixed
*/

export default function ImageScaleOnScroll({
  scale = 1.3,
  image,
  borderRadius = 10
}: Props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px"]
  })
  const scroll = useTransform(scrollYProgress, [0, 1], [1, scale])
  const scaleValue = useSpring(scroll, { duration: 5 })

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: `${borderRadius}px`,
        overflow: "hidden"
      }}
    >
      <motion.img
        src={image?.src || fallbackImg}
        alt={image?.alt || ""}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          scale: scaleValue
          // transition: "transform 1s ease",
        }}
      />
    </motion.div>
  )
}

addPropertyControls(ImageScaleOnScroll, {
  scale: {
    type: ControlType.Number,
    defaultValue: 1,
    min: 1,
    max: 2,
    step: 0.1
  },
  borderRadius: {
    type: ControlType.Number,
    defaultValue: 10,
    min: 0,
    max: 20
  },
  image: {
    type: ControlType.ResponsiveImage,
    defaultValue: fallbackImg
  }
})
