import { ControlType, addPropertyControls } from "framer"
import getStripe from "../../hooks/getStripe"
import { useEffect } from "react"

export const StripeSetup = ({ stripeKey }: { stripeKey: string }) => {
  useEffect(() => {
    stripeKey && getStripe(stripeKey)
  }, [])
  return null
}

export const propControls = {
  stripeKey: {
    title: "Stripe Key",
    type: ControlType.String
  }
}

addPropertyControls(StripeSetup, propControls as any)
