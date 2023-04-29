import { ControlType } from "framer"
//
import styles from "./styles.module.css"

const defaultImg =
  "https://labs.moniet.dev/framer-components/public/france.jpeg"

export const ScaleImage = ({
  image,
  alt = "",
  easing = "ease",
  dur = 0.3,
  width = 200,
  height = 200,
  br = 10,
  scale = 1.2
}) => {
  return (
    <div
      className={styles.container}
      style={
        {
          "--dur": dur + "s",
          "--easing": easing,
          "--br": br + "px",
          "--height": height + "px",
          "--width": width + "px",
          "--scale": scale
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
  dur: {
    title: "Duration",
    type: ControlType.Number,
    default: 0.3,
    min: 0.1,
    max: 2,
    step: 0.1,
    displayStepper: true
  },
  width: {
    type: ControlType.Number,
    displayStepper: true,
    step: 10,
    defaultValue: 200
  },
  height: {
    type: ControlType.Number,
    displayStepper: true,
    step: 10,
    defaultValue: 200
  },
  easing: {
    type: ControlType.Enum,
    options: ["ease", "ease-in-out", "ease-out", "ease-in", "linear"],
    optionTitles: ["Ease", "Ease-In-Out", "Ease-Out", "Ease-In", "Linear"],
    defaultValue: "ease"
  }
}
