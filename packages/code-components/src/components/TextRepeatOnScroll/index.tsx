import styles from "./styles.module.css"
import {
  getTypeographyStyles,
  typography,
  getStrProps
} from "../../utils/framerControlProps"
import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import { getColorProps, getNumProps } from "../../utils/framerControlProps"
import { ControlType } from "framer"

type Props = {
  text: string
  typography: any
  backgroundColor: string
  strokeWidth: number
  offset: number
  animationFrom: "center-top" | "bottom-center" | "bottom-top"
}

const TextScroll = ({
  scrollAmount = -100,
  text = "example",
  scrollProgress
}) => {
  const yPos = useTransform(scrollProgress, [0, 1], [0, scrollAmount])

  return (
    <motion.div className={styles.textStroke} style={{ y: yPos, x: 0 }}>
      {text}
    </motion.div>
  )
}

export const TextRepeatOnScroll = ({
  text = "Scrolly Bau5",
  typography,
  strokeWidth,
  backgroundColor = "#fff",
  offset = 15,
  animationFrom = "bottom-center"
}: Partial<Props>) => {
  const ref = useRef(null)

  const offsetScroll = (() => {
    if (animationFrom === "bottom-center") return ["start end", "center center"]
    if (animationFrom === "center-top") return ["start center", "end start"]
    if (animationFrom === "bottom-top") return ["start end", "end start"]
  })()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offsetScroll as any
  })

  const prevText = Array(3).fill("")

  return (
    <div
      ref={ref}
      className={styles.textContainer}
      style={
        {
          ...getTypeographyStyles({
            ...typography,
            fontSize: typography?.fontSize || 100,
            color: typography?.color || "#000"
          }),
          "--stroke-width": strokeWidth + "px",
          "--background-color": backgroundColor
        } as any
      } //
    >
      {prevText
        .map((__, i) => (
          <TextScroll
            key={i}
            scrollProgress={scrollYProgress}
            scrollAmount={(i + 1) * (-1 * offset)}
            text={text}
          />
        ))
        .reverse()}{" "}
      {prevText
        .map((__, i) => (
          <TextScroll
            key={i}
            scrollProgress={scrollYProgress}
            scrollAmount={(i + 1) * offset}
            text={text}
          />
        ))
        .reverse()}{" "}
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export const propsControls = {
  typography,
  text: getStrProps("Oshe"),
  backgroundColor: getColorProps("#fff"),
  strokeWidth: getNumProps(2, true, 1, { min: 1, max: 10 }),
  offset: getNumProps(5, false, 5, { min: 1, max: 100 }),
  animationFrom: {
    title: "Animation From",
    type: ControlType.Enum,
    options: ["center-top", "bottom-center", "bottom-top"],
    optionTitles: [
      "Center-top of screen",
      "Bottom-center of screen",
      "Bottom-top of screen"
    ]
  }
}
