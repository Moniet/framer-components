import { ControlType } from "framer"
import { useEffect, useRef } from "react"
import styles from "./styles.module.css"

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} width="100%" height="100%" />
}

export const Filters = ({ filter, amount, children, image }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const unit = (() => {
      switch (filter) {
        case "sepia":
        case "grayscale":
        case "contrast":
        case "invert":
          return "%"
        case "blur":
          return "px"
        case "hue":
          return "deg"
        default:
          return ""
      }
    })()

    const cssFilterValue = `${filter}(${amount}${unit})`

    ref.current?.style.setProperty("filter", cssFilterValue)
  }, [filter, amount, image, children])

  return (
    <div className={styles.container} ref={ref}>
      {image ? <Image {...image} /> : children}
    </div>
  )
}

export const propsControls = {
  image: {
    type: ControlType.ResponsiveImage,
    hidden: (props) => !!props.children
  },
  filter: {
    type: ControlType.Enum,
    options: ["blur", "sepia", "contrast", "hue-rotate", "grayscale", "invert"],
    optionTitles: ["Blur", "Sepia", "Contrast", "Hue", "Grayscale", "Invert"],
    defaultValue: "blur"
  },
  amount: {
    type: ControlType.Number,
    step: 1,
    displayStepper: true
  },
  children: {
    hidden: (props) => !!props.image,
    type: ControlType.ComponentInstance
  }
}
