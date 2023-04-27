import { Stripe, loadStripe } from "@stripe/stripe-js"

let stripe: Promise<Stripe | null>

const getStripe = (key: string) => {
  if (!stripe) {
    stripe = loadStripe(key)
  }
  return stripe
}

export default getStripe
