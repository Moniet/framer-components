import { ControlType } from "framer";
export declare const TextRoll: ({ text, fadeInOut, delay, duration, offset, initialAnimation, syncAnimations, fontSize, font }: {
    text?: string | undefined;
    fadeInOut?: boolean | undefined;
    delay?: number | undefined;
    duration?: number | undefined;
    offset?: number | undefined;
    initialAnimation?: boolean | undefined;
    syncAnimations?: boolean | undefined;
    fontSize?: number | undefined;
    font: any;
}) => JSX.Element;
export declare const propControls: {
    duration: {
        type: ControlType;
        defaultValue: number;
    };
    fontSize: {
        type: ControlType;
        defaultValue: number;
        min: number;
        max: number;
    };
    font: {
        type: ControlType;
        default: string;
    };
    delay: {
        type: ControlType;
        min: number;
        defaultValue: number;
    };
    offset: {
        type: ControlType;
        defaultValue: number;
    };
    text: {
        type: ControlType;
        defaultValue: string;
    };
    fadeInOut: {
        type: ControlType;
        defaultValue: boolean;
    };
    initialAnimation: {
        type: ControlType;
        defaultValue: boolean;
    };
    syncAnimations: {
        type: ControlType;
        defaultValue: boolean;
    };
};
