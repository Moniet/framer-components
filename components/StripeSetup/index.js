// src/components/StripeSetup/index.tsx
import { ControlType, addPropertyControls } from "framer";
import getStripe from "../../hooks/getStripe.js";
import { useEffect } from "react";
var StripeSetup = ({ stripeKey }) => {
  useEffect(() => {
    stripeKey && getStripe(stripeKey);
  }, []);
  return null;
};
addPropertyControls(StripeSetup, {
  stripeKey: {
    title: "Stripe Key",
    type: ControlType.String
  }
});
export {
  StripeSetup
};
