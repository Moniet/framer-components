export declare const SkewOnScroll: ({ children, duration, stretch, skew }: {
    children: any;
    duration?: number | undefined;
    stretch?: number | undefined;
    skew?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    skew: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    stretchiness: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    children: {
        type: import("framer").ControlType;
        control: {
            type: import("framer").ControlType;
        };
    };
};
