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
