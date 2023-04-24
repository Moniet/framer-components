declare class StripeObserver {
    store: any[];
    listeners: ((state: typeof this.store) => void)[];
    constructor();
    setItem: (item: any) => Promise<void>;
    deleteItem: (item: any) => Promise<any[]>;
    listen: (listener: (state: any) => void) => void;
    removeListener: (fn: (state: any) => void) => void;
}
export declare function useStripeState(): readonly [never[], (item: any) => void, (item: any) => void, StripeObserver];
export {};
