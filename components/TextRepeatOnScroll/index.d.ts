import { ControlType } from "framer";
type Props = {
    text: string;
    typography: any;
    backgroundColor: string;
    strokeWidth: number;
    offset: number;
    animationFrom: "center-top" | "bottom-center" | "bottom-top";
};
export declare const TextRepeatOnScroll: ({ text, typography, strokeWidth, backgroundColor, offset, animationFrom }: Partial<Props>) => JSX.Element;
export declare const propsControls: {
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
    text: {
        type: ControlType;
        defaultValue: string;
    };
    backgroundColor: {
        type: ControlType;
        defaultValue: string;
    };
    strokeWidth: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    offset: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    animationFrom: {
        title: string;
        type: ControlType;
        options: string[];
        optionTitles: string[];
    };
};
export {};
