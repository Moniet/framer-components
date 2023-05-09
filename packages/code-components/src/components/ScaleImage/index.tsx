// image scale on hover
import { ControlType } from "framer"
import styles from "./styles.module.css"
import { easingProps } from "../../utils/framerControlProps"

const defaultImg =
  "https://labs.moniet.dev/framer-components/public/france.jpeg"

type Props = {
  image?: {
    src?: string
  }
  alt?: string
  easing?: string
  dur?: number
  width?: number
  height?: number
  radius?: number
  scaleImage?: number
  scaleContainer?: number
}

export const ScaleImage = ({
  image,
  alt = "",
  easing = "ease",
  dur = 1,
  radius = 10,
  scaleImage = 1.1,
  scaleContainer = 0.95
}: Props) => {
  return (
    <div
      className={styles.container}
      style={
        {
          "--dur": dur + "s",
          "--easing": easing,
          "--br": radius + "px",
          "--scale-img": scaleImage,
          "--scale-container": scaleContainer
        } as any
      }
    >
      <img className={styles.img} src={image?.src || defaultImg} alt={alt} />
    </div>
  )
}

export const propsControls = {
  image: {
    type: ControlType.ResponsiveImage,
    defaultValue: defaultImg
  },
  radius: {
    type: ControlType.Number,
    defaultValue: 10
  },
  scaleContainer: {
    type: ControlType.Number,
    min: 0,
    max: 5,
    step: 1,
    defaultValue: 0.95
  },
  scaleImage: {
    type: ControlType.Number,
    min: 0,
    max: 5,
    step: 0.1,
    defaultValue: 1.1
  },
  dur: {
    title: "Duration",
    type: ControlType.Number,
    default: 1,
    min: 0.1,
    max: 2,
    step: 0.1,
    displayStepper: true
  },
  easing: {
    ...easingProps
  }
}