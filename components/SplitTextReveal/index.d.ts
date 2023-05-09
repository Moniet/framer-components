export declare const SplitTextReveal: ({ typography, text, space, fadeIn, offsetY, offsetX, duration }: {
    typography: any;
    text?: string | undefined;
    space?: number | undefined;
    fadeIn?: boolean | undefined;
    offsetY?: number | undefined;
    offsetX?: number | undefined;
    duration?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    typography: {
        type: import("framer").ControlType;
        controls: {
            letterSpacing: {
                step?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                type: import("framer").ControlType;
                defaultValue: number;
                displayStepper: boolean;
            };
            fontSize: {
                type: import("framer").ControlType;
                defaultValue: number;
                min: number;
                max: number;
            };
            fontWeight: {
                type: import("framer").ControlType;
                defaultValue: number;
            };
            font: {
                type: import("framer").ControlType;
                default: string;
            };
            color: {
                type: import("framer").ControlType;
                default: string;
            };
        };
    };
    space: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    text: {
        type: import("framer").ControlType;
        defaultValue: string;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    offsetX: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    offsetY: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    fadeIn: {
        type: import("framer").ControlType;
        defaultValue: any;
    };
};
