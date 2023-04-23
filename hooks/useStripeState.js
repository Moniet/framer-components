// src/hooks/useStripeState.tsx
import { useCallback, useEffect, useState } from "react";
var StripeObserver = class {
  constructor() {
    this.setItem = (item) => {
      console.log("set item");
      this.store.push(item);
      for (let listener of this.listeners) {
        console.log(listener);
        listener(this.store);
      }
    };
    this.listen = (listener) => {
      this.listeners.push(listener);
    };
    this.removeListener = (fn) => {
      const index = this.listeners.findIndex((listener) => listener === fn);
      console.log("removing listener");
      if (index > -1) {
        this.listeners = this.listeners.slice(0, index).concat(this.listeners.slice(index + 1));
      }
    };
    this.store = [];
    this.listeners = [];
  }
};
var useStripeState = () => {
  const [state, setState] = useState([]);
  const [observer, setObserver] = useState();
  let listener = useCallback((state2) => {
    setState(state2);
  }, []);
  useEffect(() => {
    let ob;
    if (!window.stripeObserver) {
      ob = new StripeObserver();
      window.stripeObserver = ob;
      setObserver(ob);
      ob?.listen(listener);
    } else {
      ob = window.stripeObserver;
      ob?.listen(listener);
    }
    return () => {
      console.log("unmount");
      ob?.removeListener(listener);
    };
  }, []);
  const handleSetState = (item) => {
    observer?.setItem(item);
  };
  return [state, handleSetState, observer];
};
export {
  useStripeState
};
