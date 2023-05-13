import * as React from "react"
import styles from "./styles.modules.css"
import { ControlType } from "framer"
import { getSingleChild, getNumProps } from "../../utils/framerControlProps"
import { Example } from "./Example"

type Props = {
  children?: React.ReactNode
  snap?: "start" | "center" | "end"
  align?: "start" | "center" | "end"
  gap?: number
  direction?: "column" | "row"
  axis?: "x" | "y"
  width?: number | string
  height?: number | string
}
//
export const HorizontalScroll = ({
  children,
  align = "center",
  gap = 0
}: Props) => {
  const count = !children ? 2 : React.Children.count(children)
  const classes = `${count === 1 ? styles.wrapper : styles.container} ${
    styles.xScroll
  }`

  return (
    <div
      className={classes}
      style={
        {
          "--align": align,
          "--gap": gap + "px"
        } as any
      }
    >
      {children || <Example />}
    </div>
  )
}

export const propsControls = {
  children: {
    type: ControlType.Array,
    control: getSingleChild()
  },
  gap: getNumProps(0, true, 10),
  align: {
    type: ControlType.Enum,
    options: ["start", "center", "end"]
  }
}
