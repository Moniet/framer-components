import { ControlType } from "framer"
import { useState } from "react"
import styles from "./styles.module.css"
import { Effect1 } from "./Effect1"
import { defaultImage } from "./contstants"
import { getNumProps } from "../../utils/framerControlProps"

type ImageProps = {
  src?: string
  alt?: string
}

type Props = {
  image?: ImageProps
  effect?: number
  duration?: number
  radius?: number
}

const components = {
  1: Effect1
}

export const ImageRepeatOnHover = ({
  image,
  effect = 1,
  duration = 1,
  radius = 10
}: Props) => {
  const Comp = components[effect || 1]
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={styles.container}
      style={
        {
          "--dur": duration + "s",
          "--border-radius": radius + "px"
        } as any
      }
    >
      <img
        className={styles.img}
        src={image?.src || defaultImage}
        alt={image?.alt || ""}
      />
      <Comp image={image} isHovering={isHovering} />
      <div
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={styles.capture}
      />
    </div>
  )
}

export const propsControls = {
  image: {
    type: ControlType.ResponsiveImage,
    defaultValue: defaultImage
  },
  duration: getNumProps(1, false, 0.1, { min: 0.1, max: 2 }),
  radius: getNumProps(10, true, 1, { min: 0, max: 20 })
}