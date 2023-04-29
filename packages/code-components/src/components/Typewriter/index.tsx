import * as React from "react"
import { TypewriterProps, useTypewriter } from "./useTypewriter"
import { Cursor, CursorProps } from "./Cursor"
import { ControlType } from "framer"
import styles from "./styles.modules.css"

type ComponentProps = {
  cursor?: boolean
} & TypewriterProps &
  CursorProps

export const Typewriter = ({
  text = "Hello World!, This is a simple, Typewriter",
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  cursor = false,
  cursorStyle = "|",
  cursorColor = "inherit",
  cursorBlinking = true,
  onLoopDone,
  onType,
  onDelay,
  onDelete,
  color = "#333",
  fontSize = 20,
  fontFamily,
  fontWeight
}: ComponentProps): JSX.Element => {
  const words = text.split(",")
  const [txt] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
    onDelay,
    onDelete
  })
  //
  return (
    <div
      className={styles.container}
      style={
        {
          "--font-family": fontFamily,
          "--color": color,
          "--font-weight": fontWeight,
          "--font-size": fontSize + "px"
        } as any
      }
    >
      <span>{txt}</span>
      {cursor && (
        <Cursor
          cursorStyle={cursorStyle}
          cursorColor={cursorColor}
          cursorBlinking={cursorBlinking}
        />
      )}
    </div>
  )
}

export const propsControls = {
  text: {
    type: ControlType.String,
    defaultValue: "Hello World!, This is a simple, Typewriter"
  },
  font: {
    type: ControlType.String,
    defaultValue: "Helvetica"
  },
  fontSize: {
    type: ControlType.Number,
    defaultValue: 20,
    displayStepper: true
  },
  fontWeight: {
    type: ControlType.Number,
    defaultValue: 400,
    displayStepper: true,
    step: 100
  },
  color: {
    type: ControlType.Color,
    defaultValue: "#222"
  },
  animation: {
    type: ControlType.Object,
    controls: {
      loop: {
        type: ControlType.Boolean,
        defaultValue: true
      },
      typeSpeed: {
        type: ControlType.Number,
        min: 10,
        max: 10000,
        defaultValue: 80
      },
      deleteSpeed: {
        type: ControlType.Number,
        min: 10,
        max: 10000,
        defaultValue: 50
      },
      delaySpeed: {
        title: "Delay",
        type: ControlType.Number,
        defaultValue: 1500,
        min: 10,
        max: 10000
      },
      cursor: {
        type: Boolean,
        defaultValue: true
      },
      cursorBlinking: {
        type: ControlType.Boolean,
        defaultValue: true
      },
      cursorColor: {
        type: ControlType.Color,
        defaultValue: "inherit"
      }
    }
  }
}
