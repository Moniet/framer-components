import { ControlType, addPropertyControls } from "framer"
import { useMemo } from "react"

import { createSquirclePath } from "./createSquirclePath"

const getId = () => Math.random() + ""

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */

export const Squircle = ({
  id = getId(),
  curvature = 0.3,
  color = "#333"
}: {
  id?: string
  curvature?: number
  color?: string
}) => {
  const [viewBox, d] = useMemo(() => {
    const height = 100
    const width = 100
    const viewBox = [0, 0, width, height]
    const squirclePath = createSquirclePath(width, height, curvature)
    return [viewBox, squirclePath]
  }, [id, curvature])

  const maskId = `${id}-mask`

  return (
    <div>
      <svg viewBox={viewBox.join(" ")} xmlns="http://www.w3.org/2000/svg">
        <path
          d={d}
          id={maskId}
          transform="rotate(45)"
          style={{ transformOrigin: "center" }}
          fill={color}
        />
      </svg>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          clipPath: `url(#${maskId})`
        }}
      />
    </div>
  )
}

export const propControls = {
  color: {
    type: ControlType.Color,
    defaultValue: "#555"
  },
  curvature: {
    type: ControlType.Number,
    min: 0,
    max: 0.55,
    step: 0.01,
    defaultValue: 0.3
  }
}

addPropertyControls(Squircle, propControls as any)
