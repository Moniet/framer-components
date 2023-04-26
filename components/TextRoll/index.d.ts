import { ControlType } from "framer";
export declare const TextRoll: ({ text, fadeInOut, delay, duration, offset, initialAnimation, syncAnimations, fontWeight, fontSize, font, color }: {
    text?: string | undefined;
    fadeInOut?: boolean | undefined;
    delay?: number | undefined;
    duration?: number | undefined;
    offset?: number | undefined;
    initialAnimation?: boolean | undefined;
    syncAnimations?: boolean | undefined;
    fontWeight?: number | undefined;
    fontSize?: number | undefined;
    font: any;
    color?: string | undefined;
}) => JSX.Element;
export declare const propControls: {
    animation: {
        type: ControlType;
        Title: string;
        controls: {
            duration: {
                type: ControlType;
                defaultValue: number;
                max: number;
                min: number;
                displayStepper: boolean;
            };
            delay: {
                type: ControlType;
                max: number;
                min: number;
                defaultValue: number;
            };
            offset: {
                type: ControlType;
                defaultValue: number;
            };
            fadeInOut: {
                title: string;
                type: ControlType;
                defaultValue: boolean;
            };
            initialAnimation: {
                title: string;
                type: ControlType;
                defaultValue: boolean;
            };
            syncAnimations: {
                title: string;
                type: ControlType;
                defaultValue: boolean;
            };
        };
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
    };
    font: {
        type: ControlType;
        default: string;
    };
    color: {
        type: ControlType;
        default: string;
    };
    text: {
        type: ControlType;
        defaultValue: string;
    };
};
