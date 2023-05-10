interface State {
    items: any[];
    setItem: (val: any) => void;
}
export declare var useStripeStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State>>;
export {};
