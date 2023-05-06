import React, { MutableRefObject, Ref } from "react"

let timeout: NodeJS.Timeout

export const useCachedRect = (ref: MutableRefObject<any>) => {
  const dimensions = React.useRef()

  React.useEffect(() => {
    const getSize = () => {
      if (timeout) clearTimeout(timeout)

      timeout = setTimeout(() => {
        const { width, height, top, left } =
          ref.current?.getBoundingClientRect() || {}
        const newDims = {
          left,
          top,
          width,
          height
        }

        dimensions.current = newDims as any
      }, 200)
    }

    getSize()

    window.addEventListener("resize", getSize)

    return () => {
      try {
        clearTimeout(timeout)
        window.removeEventListener("resize", getSize)
      } catch {}
    }
  }, [ref.current])

  return dimensions.current
    ? dimensions.current
    : { left: 0, top: 0, height: 0, width: 0 }
}
