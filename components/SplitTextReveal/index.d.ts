export declare const SplitTextReveal: ({ text, space, typography, fadeIn, offsetY, offsetX, duration }: {
    text?: string | undefined;
    space?: number | undefined;
    typography: any;
    fadeIn?: boolean | undefined;
    offsetY?: number | undefined;
    offsetX?: number | undefined;
    duration?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    typography: {
        type: import("framer").ControlType;
        controls: {
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
