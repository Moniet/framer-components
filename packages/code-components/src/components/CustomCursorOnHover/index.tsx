import * as React from "react"
import { ControlType } from "framer"
import styles from "./styles.modules.css"

const defaultSrc =
  "https://labs.moniet.dev/framer-components/public/default-cursor.png"

export const CustomCursorOnHover = ({
  cursor: cursorProps,
  children,
  size = 45,
  delay = 0.3,
  scaleIn = true,
  fadeIn = true
}) => {
  const container = React.useRef<HTMLDivElement>() //
  const cursor = React.useRef<HTMLDivElement>()
  const cursorWrapper = React.useRef<HTMLDivElement>(null)
  const dimensions = React.useRef({ left: 0, top: 0, height: 0, width: 0 })

  const calculatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const { top, left } = dimensions.current
    const y = e.clientY - top
    const x = e.clientX - left

    cursorWrapper.current?.style.setProperty("--x", x + "px")
    cursorWrapper.current?.style.setProperty("--y", y + "px")
  }

  React.useEffect(() => {
    let timeout: NodeJS.Timeout

    const onResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        // reset dimensions /
        const { width, height, top, left } =
          container.current?.getBoundingClientRect() || {}
        const newDims = {
          left,
          top,
          width,
          height
        }

        dimensions.current = newDims as any
        cursorWrapper.current?.style.setProperty("--x", "50%")
        cursorWrapper.current?.style.setProperty("--y", "50%")
      }, 150)
    }

    onResize()

    window.addEventListener("resize", onResize)

    return () => {
      try {
        clearTimeout(timeout)
      } catch {} ///
    }
  }, [])

  return (
    <div
      ref={container as any}
      className={styles.container}
      onMouseOver={(e) => {
        if (cursorWrapper.current) {
          const prevTransition = cursorWrapper.current.style.transition
          cursorWrapper.current.style.transition = "none"
          calculatePosition(e)
          cursorWrapper.current.style.transition = prevTransition
          cursorWrapper.current?.style.setProperty("--opacity", "1")
          cursorWrapper.current?.style.setProperty("--scale", "1") ///////
        }
      }}
      onMouseLeave={() => {
        cursorWrapper.current?.style.setProperty("--opacity", "0")
        cursorWrapper.current?.style.setProperty("--scale", "0")
      }}
      onMouseMove={(e) => {
        calculatePosition(e)
      }}
    >
      {children}
      <div
        ref={cursorWrapper}
        className={styles.cursorWrapper}
        style={
          {
            "--size": `${size}px`,
            "--scale": scaleIn ? 0 : 1,
            "--opacity": fadeIn ? 0 : 1,
            "--delay": `${delay}s`
          } as any
        }
      >
        <div
          ref={cursor as any}
          className={styles.cursor}
          aria-hidden={true}
          style={{ "--size": `${size}px` } as any}
        >
          <img alt="cursor" src={cursorProps?.src || defaultSrc} />
        </div>
      </div>
    </div>
  )
}

export const propControls = {
  cursor: {
    type: ControlType.ResponsiveImage
  },
  children: {
    type: ControlType.ComponentInstance
  },
  size: {
    type: ControlType.Number,
    defaultValue: 45
  },
  scaleIn: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  fadeIn: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  delay: {
    type: ControlType.Number,
    min: 0,
    max: 2,
    step: 0.05,
    defaultValue: 0.3
  }
}
