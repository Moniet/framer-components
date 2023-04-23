// src/hooks/useStripeStore.ts
import { create } from "zustand";
var useStripeStore = create((set, get) => ({
  items: [],
  setItem: (item) => set({ items: get().items.concat(item) })
}));
export {
  useStripeStore
};
