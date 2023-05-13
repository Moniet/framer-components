type Props = {
    text: string;
    typography: any;
    backgroundColor: string;
    strokeWidth: number;
};
export declare const TextRepeatOnScroll: ({ text, typography, strokeWidth, backgroundColor }: Props) => JSX.Element;
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
                step: number;
                min: number;
                max: number;
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
    text: {
        type: import("framer").ControlType;
        defaultValue: string;
    };
    backgroundColor: {
        type: import("framer").ControlType;
        defaultValue: string;
    };
    strokeWidth: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
};
export {};
