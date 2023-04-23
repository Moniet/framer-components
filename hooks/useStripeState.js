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
    for (let listener of this.listeners) {
      listener(this.store);
    }
  };
  listen = (listener) => {
    this.listeners.push(listener);
  };
  removeListener = (fn) => {
    const index = this.listeners.findIndex((listener) => listener === fn);
    console.log("removing listener");
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
    return () => {
      console.log("unmount");
      observer.current?.removeListener(listener);
    };
  }, []);
  const handleSetState = (item) => {
    observer?.current.setItem(item);
  };
  return [state, handleSetState, observer.current];
}
export {
  useStripeState
};
