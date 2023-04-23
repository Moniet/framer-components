import * as React from "react"
import { create } from "zustand"

interface State {
  items: any[]
  setItem: (val: any) => void
}

export var useStripeStore = create<State>((set, get) => ({
  items: [],
  setItem: (item: any) => set({ items: get().items.concat(item) })
}))
