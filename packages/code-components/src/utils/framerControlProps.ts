import { ControlType } from "framer"

export const getNumProps = (
  defaultValue: number,
  stepper: boolean,
  step?: number,
  minmax?: {
    min: number
    max: number
  }
) => ({
  type: ControlType.Number,
  defaultValue,
  displayStepper: stepper,
  ...(minmax ?? {}),
  ...(step ? { step } : {})
})

export const getStrProps = (defaultValue: string) => ({
  type: ControlType.String,
  defaultValue
})

export const getSingleChild = () => ({
  type: ControlType.ComponentInstance
})

export const getMultipleChildren = () => ({
  type: ControlType.Array,
  control: {
    type: ControlType.ComponentInstance
  }
})

export type BoxShadowProps = {
  x: number
  y: number
  blur: number
  color: string
  size: number
}

export const boxShadowProps = {
  x: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  },
  y: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  },
  blur: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 20
  },
  color: {
    type: ControlType.Color,
    defaultValue: "rgba(0,0,0,0.08)"
  },
  size: {
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0
  }
}

export const easingProps = {
  type: ControlType.Enum,
  options: ["ease", "ease-in-out", "ease-out", "ease-in", "linear"],
  optionTitles: ["Ease", "Ease-In-Out", "Ease-Out", "Ease-In", "Linear"],
  defaultValue: "ease"
}

export type ImageProps = {
  src?: string
  alt?: string
}

export const typography = {
  type: ControlType.Object,
  controls: {
    fontSize: {
      type: ControlType.Number,
      defaultValue: 20,
      min: 1,
      max: 100
    },
    fontWeight: {
      type: ControlType.Number,
      defaultValue: 400
    },
    font: {
      type: ControlType.String,
      default: "Helvetica, sans-serif"
    },
    color: {
      type: ControlType.Color,
      default: "#555"
    }
  }
}

export const getTypeographyStyles = (typography) =>
  ({
    "--font-family": typography?.font || "inherit",
    "--font-size": (typography?.fontSize || 50) + "px",
    "--font-weight": typography?.fontWeight || 600,
    "--color": typography?.color || "#222"
  } as any)

export const getBoolProps = (defaultValue) => ({
  type: ControlType.Boolean,
  defaultValue: defaultValue
})
