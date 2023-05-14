import { ControlType } from "framer";
export declare const MagneticButton: ({ text, textColor, bgColor, borderColor, borderWidth, borderRadius, buttonPadding, cursorPadding, sensitivity, movement, typography }: {
    text?: string | undefined;
    textColor?: string | undefined;
    bgColor?: string | undefined;
    borderColor?: string | undefined;
    borderWidth?: number | undefined;
    borderRadius?: number | undefined;
    buttonPadding?: number | undefined;
    cursorPadding?: number | undefined;
    sensitivity?: number | undefined;
    movement?: number | undefined;
    typography: any;
}) => JSX.Element;
export declare const propsControls: {
    text: {
        type: ControlType;
        defaultValue: string;
    };
    textColor: {
        type: ControlType;
        defaultValue: string;
    };
    bgColor: {
        title: string;
        type: ControlType;
        defaultValue: string;
    };
    borderColor: {
        type: ControlType;
        defaultValue: string;
    };
    borderWidth: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    borderRadius: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    buttonPadding: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    cursorPadding: {
        description: string;
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    sensitivity: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    movement: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    typography: {
        type: ControlType;
        controls: {
            letterSpacing: {
                step?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                type: ControlType;
                defaultValue: number;
                displayStepper: boolean;
            };
            fontSize: {
                type: ControlType;
                defaultValue: number;
                min: number;
                max: number;
            };
            fontWeight: {
                type: ControlType;
                defaultValue: number;
                step: number;
                min: number;
                max: number;
            };
            font: {
                type: ControlType;
                default: string;
            };
            color: {
                type: ControlType;
                default: string;
            };
        };
    };
};
