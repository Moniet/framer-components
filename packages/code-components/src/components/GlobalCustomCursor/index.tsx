import { ControlType } from "framer"
import * as React from "react"

export const GlobalCustomCursor = ({ image }) => {
  React.useEffect(() => {
    document.body.style.cursor = `url(${image.src})`
  }, [])

  return null
}

export const propControls = {
  cursor: {
    type: ControlType.ResponsiveImage
  }
}
