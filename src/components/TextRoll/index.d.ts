import { ControlType } from "framer";
type Props = {
    text: string;
    animation: {
        delay: number;
        duration: number;
        offset: number;
        initialAnimation: boolean;
        syncAnimations: boolean;
        fadeInOut: boolean;
    };
    typography: {
        font: string;
        fontSize: number;
        fontWeight: number;
        color: string;
    };
};
export declare const TextRoll: ({ text, typography, animation }: Props) => JSX.Element;
export declare const propControls: {
    text: {
        type: ControlType;
        defaultValue: string;
    };
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
    typography: {
        type: ControlType;
        controls: {
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
        };
    };
};
export {};
