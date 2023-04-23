import * as React from "react"
import { useStripeState } from "../../hooks/useStripeState"
import styles from "./styles.module.css"
import { ControlType, addPropertyControls } from "framer"

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
)

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */

export const StripeCart = ({ Icon }) => {
  const [state] = useStripeState()

  return (
    <div className={styles.container}>
      <Icon />
      <div className={styles.badge}>{state?.length}</div>
    </div>
  )
}

addPropertyControls(StripeCart, {
  Icon: {
    title: "Icon",
    type: ControlType.File,
    allowedFileTypes: [".svg", ".png", ".jpg"]
  }
})

StripeCart.defaultProps = {
  Icon: CartIcon
}
