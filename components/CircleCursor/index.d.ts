import { ControlType } from "framer";
type Props = {
    children: JSX.Element;
    delay: number;
    hideDefaultCursor: boolean;
    size: number;
    hoverSize: number;
    color: string;
};
export declare const CircleCursor: ({ children, delay, size, hoverSize, color, hideDefaultCursor }: Partial<Props>) => import("react").ReactPortal | null;
export declare const propControls: {
    textOnHover: {
        type: ControlType;
        defaultValue: string;
    };
    size: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    sizeOnHover: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    children: {
        type: ControlType;
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
