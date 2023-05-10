export declare const LiquidReveal: ({ children, id, duration }: {
    children: any;
    id?: string | undefined;
    duration?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    children: {
        type: import("framer").ControlType;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
};
