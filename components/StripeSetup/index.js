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
var propControls = {
  stripeKey: {
    title: "Stripe Key",
    type: ControlType.String
  }
};
addPropertyControls(StripeSetup, propControls);
export {
  StripeSetup,
  propControls
};
