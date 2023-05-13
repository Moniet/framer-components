import { ControlType } from "framer";
export declare const MagneticButton: ({ text, textColor, bgColor, borderColor, borderWidth, borderRadius, buttonPadding, cursorPadding, sensitivity, movement }: {
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
};
