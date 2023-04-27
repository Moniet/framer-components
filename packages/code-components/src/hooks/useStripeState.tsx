import { useCallback, useEffect, useMemo, useRef, useState } from "react"

class StripeObserver {
  store: any[]
  listeners: ((state: typeof this.store) => void)[]

  constructor() {
    this.store = []
    this.listeners = []
  }

  setItem = async (item: any) => {
    this.store = [...this.store, item]
    this.publishChanges()
  }

  publishChanges = async () => {
    for (let listener of this.listeners) {
      listener(this.store)
    }
  }

  deleteItem = async (item: any) => {
    const index = this.store.findIndex((d) => d?.id === item?.id)
    if (index > -1) {
      this.store = [
        ...this.store.slice(0, index),
        ...this.store.slice(index + 1)
      ]
    }
    this.publishChanges()
  }

  listen = (listener: (state: any) => void) => {
    this.listeners.push(listener)
  }

  removeListener = (fn: (state: any) => void) => {
    const index = this.listeners.findIndex((listener) => listener === fn)
    if (index > -1) {
      this.listeners = this.listeners
        .slice(0, index)
        .concat(this.listeners.slice(index + 1))
    }
  }
}

const getOb = () => {
  if (globalThis.window) {
    if (!(window as any).stripeObserver) {
      ;(window as any).stripeObserver = new StripeObserver()
      return (window as any).stripeObserver
    }

    return (window as any).stripeObserver
  }
}

export function useStripeState() {
  const [state, setState] = useState([])
  const observer = useRef<StripeObserver>(getOb())

  let listener = useCallback((state) => {
    setState(state)
  }, [])

  useEffect(() => {
    observer.current.listen(listener)

    setState((observer.current.store as any) || [])
    return () => {
      observer.current?.removeListener(listener)
    }
  }, [])

  const handleSetState = (item: any) => {
    observer?.current.setItem(item)
  }
  const handleRemoveState = (item: any) => {
    observer?.current.deleteItem(item)
  }

  return [state, handleSetState, handleRemoveState, observer.current] as const
}
