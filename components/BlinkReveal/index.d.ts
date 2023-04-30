export declare const BlinkReveal: ({ children, scaleFrom, scaleTo, easing, duration }: {
    children: any;
    scaleFrom?: number | undefined;
    scaleTo?: number | undefined;
    easing?: string | undefined;
    duration?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    easing: {
        type: import("framer").ControlType;
        options: string[];
        optionTitles: string[];
        defaultValue: string;
    };
    scaleFrom: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    scaleTo: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    children: {
        type: import("framer").ControlType;
    };
};
