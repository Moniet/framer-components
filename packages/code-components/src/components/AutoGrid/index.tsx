import * as React from "react"
import styles from "./styles.module.css"
import { ControlType } from "framer"
import { GridExample } from "./GridExample"

type Props = {
  children?: JSX.Element[] | JSX.Element
  minWidth: number
  maxWidth: number
  gap: number
  justify: string
}

export const AutoGrid = ({
  children,
  minWidth = 100,
  maxWidth = 200,
  gap = 10,
  justify = "center"
}: Partial<Props>) => {
  const containerClass = React.useMemo(() => {
    const count = React.Children.count(children)
    return count === 1 ? styles.gridWrapper : styles.grid
  }, [children])

  return (
    <div
      className={containerClass}
      style={
        {
          "--min": minWidth + "px",
          "--max": maxWidth + "px",
          "--gap": gap + "px",
          "--justify": justify
        } as any
      }
    >
      {children || <GridExample />}
    </div>
  )
}

export const propsControls = {
  minWidth: {
    type: ControlType.Number,
    defaultValue: 100,
    displayStepper: true,
    step: 100
  },
  maxWidth: {
    type: ControlType.Number,
    defaultValue: 300,
    displayStepper: true,
    step: 100
  },
  gap: {
    type: ControlType.Number,
    defaultValue: 10,
    displayStepper: true,
    step: 5
  },
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance
    }
  },
  justify: {
    type: ControlType.Enum,
    defaultValue: "center",
    options: [
      "center",
      "start",
      "end",
      "space-evenly",
      "space-between",
      "stretch"
    ],
    optionTitles: ["Center", "Left", "Right", "Evenly", "Between", "Stretch"]
  }
}
