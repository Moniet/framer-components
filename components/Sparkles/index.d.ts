import { ReactNode } from "react";
import { ControlType } from "framer";
export declare const Sparkles: ({ children, minSize, maxSize, numOfStars, duration, color }: {
    children: ReactNode;
    minSize?: number | undefined;
    maxSize?: number | undefined;
    numOfStars?: number | undefined;
    duration?: number | undefined;
    color?: string | undefined;
}) => JSX.Element;
export declare const propsControls: {
    children: {
        type: ControlType;
    };
    minSize: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    maxSize: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    numOfStars: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    color: {
        type: ControlType;
    };
};
