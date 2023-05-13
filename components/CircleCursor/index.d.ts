import { ControlType } from "framer";
type Props = {
    children: JSX.Element;
    delay: number;
    hideDefaultCursor: boolean;
    size: number;
    hoverScale: number;
    bgColor: string;
    borderColor: string;
    opacity: number;
    opacityOnHover: number;
    borderWidth: number;
    text?: string;
};
export declare const CircleCursor: ({ children, delay, size, opacity, opacityOnHover, borderColor, borderWidth, hoverScale, bgColor, hideDefaultCursor }: Partial<Props>) => import("react").ReactPortal | null;
export declare const propControls: {
    size: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    hoverScale: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    bgColor: {
        title: string;
        type: ControlType;
        defaultValue: string;
    };
    opacity: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    opacityOnHover: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    borderWidth: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    borderColor: {
        type: ControlType;
        defaultValue: string;
    };
    delay: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
    };
    hideDefaultCursor: {
        type: ControlType;
        defaultValue: boolean;
    };
};
export {};
