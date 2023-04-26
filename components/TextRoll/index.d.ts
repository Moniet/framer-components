import { ControlType } from "framer";
export declare const TextRoll: ({ text, fadeInOut, delay, duration, offset, initialAnimation, syncAnimations, fontSize, font, color }: {
    text?: string | undefined;
    fadeInOut?: boolean | undefined;
    delay?: number | undefined;
    duration?: number | undefined;
    offset?: number | undefined;
    initialAnimation?: boolean | undefined;
    syncAnimations?: boolean | undefined;
    fontSize?: number | undefined;
    font: any;
    color?: string | undefined;
}) => JSX.Element;
export declare const propControls: {
    animation: {
        controls: {
            duration: {
                type: ControlType;
                defaultValue: number;
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
    color: {
        type: ControlType;
        default: string;
    };
    text: {
        type: ControlType;
        defaultValue: string;
    };
};
