import * as React from "react";
import { ControlType } from "framer";
type Props = {
    cursor: React.ReactNode;
    delay: number;
    scale: number;
    hideDefaultCursor: boolean;
};
export declare const CustomFrameCursor: ({ cursor, delay, scale, hideDefaultCursor }: Partial<Props>) => import("react").ReactPortal | null;
export declare const propControls: {
    cursor: {
        type: ControlType;
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
    };
    hideDefaultCursor: {
        type: ControlType;
        defaultValue: boolean;
    };
};
export {};
