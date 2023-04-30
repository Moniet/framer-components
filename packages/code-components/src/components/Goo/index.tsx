import * as React from "react"
import styles from "./styles.module.css"
import { ControlType } from "framer"
import { DefaultGoo } from "./DefaultGoo"

type Props = {
  children?: React.ReactNode
  br?: number
  id?: string
}

export const Goo = ({ children, br = 0, id = "123" }: Props) => {
  const filterId = `fc-goo-${id}`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={styles.children}
        style={{ filter: `url(#${filterId})` } as any}
      >
        {children || <DefaultGoo />}
      </div>
    </>
  )
}

export const propsControls = {
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance
    }
  }
}
