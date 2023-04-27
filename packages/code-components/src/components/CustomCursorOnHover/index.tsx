import * as React from "react"
import { ControlType } from "framer"
import styles from "./styles.modules.css"
import { useRef } from "react"

// cursor can :
// • scale in or fade in
// • show on a particular element hover

export const CustomCursorOnHover = ({
  image = {
    src: "https://s3-alpha-sig.figma.com/img/e03c/2a53/d457b0d9cb93b7735873023f9f6f7691?Expires=1683504000&Signature=exgquu-lwlVoFNW~LVvKKdP0RMnDInLZ9VBToBR7VlrizcffwDRabWfPt7OX7KjasQc05RtbuPK7UMM0zzCpQnnXrv99rX0yd6t8jddCeWRcjPrDuWObgcj3duLhJ1J5mybS3r4V3LxzZLA5BZbxL98Sau2xw6xsaaKQIcUnl8F~BLkAPEvDKVKqor8dKGmcM1pnZ61E2L2oijo43sZSqeFvJzdH39dox8lt-AFVtSAJCsXYKsQSbD8cBVYFji9flCjOagzFaXxdBrIM91LURIcd3JORrYyMguqEFmUcY-L4GfJPbspyhLu1~FkgqLOrliBHedWpPjhJOv~MykIknw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  children,
  size = 45
}) => {
  const container = React.useRef<HTMLDivElement>()
  const cursor = React.useRef<HTMLDivElement>()
  const dimensions = React.useRef({ left: 0, top: 0, height: 0, width: 0 })

  const calculateSize = (clientX: number, clientY: number) => {
    const { left, top } = dimensions.current
    const x = clientX - left + "px"
    const y = clientY - top + "px"

    cursor.current?.style.setProperty("--x", x)
    cursor.current?.style.setProperty("--y", y)
  }

  React.useEffect(() => {
    let timeout: NodeJS.Timeout

    const onResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        // reset dimensions
        const newDims = {
          left: container.current?.clientLeft as number,
          top: container.current?.clientTop as number,
          width: container.current?.clientWidth as number,
          height: container.current?.clientHeight as number
        }
        dimensions.current = newDims
        cursor.current?.style.setProperty("--x", "50%")
        cursor.current?.style.setProperty("--y", "50%")
      }, 150)
    }

    onResize()

    return () => {
      try {
        clearTimeout(timeout)
      } catch {}
    }
  }, [])

  return (
    <div
      ref={container as any}
      className={styles.container}
      onMouseOver={() => {
        cursor.current?.style.setProperty("--opacity", "1")
      }}
      onMouseLeave={() => {
        cursor.current?.style.setProperty("--opacity", "0")
      }}
      onMouseMove={(e) => {
        calculateSize(e.clientX, e.clientY)
      }}
    >
      {children}
      <div
        className={styles.cursorWrapper}
        style={{ "--size": `${size}px` } as any}
      >
        <div
          ref={cursor as any}
          className={styles.cursor}
          style={{ "--size": `${size}px`, "--opacity": 0 } as any}
          aria-hidden={true}
        >
          <img alt="cursor" src={image.src} />
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
  borderRadius: {
    type: ControlType.Number,
    defaultValue: 0
  },
  scaleIn: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  fadeIn: {
    type: ControlType.Boolean,
    defaultValue: true
  }
}
