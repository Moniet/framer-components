import * as React from "react"
import styles from "./Button.modules.css"
import { useStripeStore } from "../../hooks/useStripeStore"
import { useStripeState } from "../../hooks/useStripeState"

export const Button = ({ label = "Button" }) => {
  const [state, setState] = useStripeState()

  return (
    <div className={styles.btn} onClick={() => setState("item")}>
      {label}
    </div>
  )
}
