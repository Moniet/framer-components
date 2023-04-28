import { ControlType } from "framer";
export declare const CustomCursorOnHover: ({ image, children, size, delay, scaleIn, fadeIn }: {
    image?: {
        src: string;
    } | undefined;
    children: any;
    size?: number | undefined;
    delay?: number | undefined;
    scaleIn?: boolean | undefined;
    fadeIn?: boolean | undefined;
}) => JSX.Element;
export declare const propControls: {
    cursor: {
        type: ControlType;
    };
    children: {
        type: ControlType;
    };
    size: {
        type: ControlType;
        defaultValue: number;
    };
    scaleIn: {
        type: ControlType;
        defaultValue: boolean;
    };
    fadeIn: {
        type: ControlType;
        defaultValue: boolean;
    };
    delay: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
    };
};
