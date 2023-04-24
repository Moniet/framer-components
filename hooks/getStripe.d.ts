import { Stripe } from "@stripe/stripe-js";
declare const getStripe: (key: string) => Promise<Stripe | null>;
export default getStripe;
