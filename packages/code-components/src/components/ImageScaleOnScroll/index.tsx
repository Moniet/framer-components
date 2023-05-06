import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import { useRef } from "react"

type Props = {
  scale?: number
  image?: {
    src?: string
    alt?: string
  }
  borderRadius?: number
  startAnimationFrom?: "screen-center" | "screen-end"
}

const fallbackImg =
  "https://images.unsplash.com/photo-1683142667313-49cb993d29e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"

/*
    @framerSupportedLayoutWidth fixed
    @framerSupportedLayoutHeight fixed
*/

export function ImageScaleOnScroll({
  scale = 1.3,
  image,
  borderRadius = 10,
  startAnimationFrom = "screen-end"
}: Props) {
  const ref = useRef(null)
  const offsetValues = (() => {
    if (startAnimationFrom === "screen-end") {
      return ["start end", "end start"] as any
    }
    return ["start center", "end start"] as any
  })()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offsetValues
  })
  const scroll = useTransform(scrollYProgress, [0, 1], [1, scale])
  const scaleValue = useSpring(scroll, { duration: 5 })

  return (
    <motion.div
      ref={ref}
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
        }}
      />
    </motion.div>
  )
}

export const propsControls = {
  scale: {
    type: ControlType.Number,
    defaultValue: 1,
    min: 1,
    max: 2,
    step: 0.1,
    description: "Value to scale image to on scroll"
  },
  borderRadius: {
    type: ControlType.Number,
    defaultValue: 10,
    min: 0,
    max: 20
  },
  image: {
    type: ControlType.ResponsiveImage
  },
  startAnimationFrom: {
    type: ControlType.Enum,
    options: ["screen-end", "screen-center"],
    optionTitles: ["Screen End", "Screen Start"]
  }
}
