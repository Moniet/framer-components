import * as React from "react";
import { ControlType } from "framer";
type Props = {
    children: React.ReactNode;
    delay: number;
    scale: number;
    hideDefaultCursor: boolean;
};
export declare const CustomFrameCursor: ({ children, delay, scale, hideDefaultCursor }: Partial<Props>) => import("react").ReactPortal | null;
export declare const propControls: {
    children: {
        type: ControlType;
        defaultValue: JSX.Element;
    };
    scale: {
        title: string;
        type: ControlType;
        defaultValue: number;
        step: number;
        min: number;
        max: number;
        description: string;
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
