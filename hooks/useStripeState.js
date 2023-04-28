// src/hooks/useStripeState.tsx
import { useCallback, useEffect, useRef, useState } from "react";
var StripeObserver = class {
  store;
  listeners;
  constructor() {
    this.store = [];
    this.listeners = [];
  }
  setItem = async (item) => {
    this.store = [...this.store, item];
    this.publishChanges();
  };
  publishChanges = async () => {
    for (let listener of this.listeners) {
      listener(this.store);
    }
  };
  deleteItem = async (item) => {
    const index = this.store.findIndex((d) => d?.id === item?.id);
    if (index > -1) {
      this.store = [
        ...this.store.slice(0, index),
        ...this.store.slice(index + 1)
      ];
    }
    this.publishChanges();
  };
  listen = (listener) => {
    this.listeners.push(listener);
  };
  removeListener = (fn) => {
    const index = this.listeners.findIndex((listener) => listener === fn);
    if (index > -1) {
      this.listeners = this.listeners.slice(0, index).concat(this.listeners.slice(index + 1));
    }
  };
};
var getOb = () => {
  if (globalThis.window) {
    if (!window.stripeObserver) {
      ;
      window.stripeObserver = new StripeObserver();
      return window.stripeObserver;
    }
    return window.stripeObserver;
  }
};
function useStripeState() {
  const [state, setState] = useState([]);
  const observer = useRef(getOb());
  let listener = useCallback((state2) => {
    setState(state2);
  }, []);
  useEffect(() => {
    observer.current.listen(listener);
    setState(observer.current.store || []);
    return () => {
      observer.current?.removeListener(listener);
    };
  }, []);
  const handleSetState = (item) => {
    observer?.current.setItem(item);
  };
  const handleRemoveState = (item) => {
    observer?.current.deleteItem(item);
  };
  return [state, handleSetState, handleRemoveState, observer.current];
}
export {
  useStripeState
};
