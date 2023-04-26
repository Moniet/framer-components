import { ControlType } from "framer";
export declare const TextRoll: ({ text, fadeInOut, delay, duration, offset, initialAnimation, syncAnimations }: {
    text?: string | undefined;
    fadeInOut?: boolean | undefined;
    delay?: number | undefined;
    duration?: number | undefined;
    offset?: number | undefined;
    initialAnimation?: boolean | undefined;
    syncAnimations?: boolean | undefined;
}) => JSX.Element;
export declare const propControls: {
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
