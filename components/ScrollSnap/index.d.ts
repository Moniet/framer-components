import * as React from "react";
import { ControlType } from "framer";
type Props = {
    children?: React.ReactNode;
    snap?: "start" | "center" | "end";
    align?: "start" | "center" | "end";
    gap?: number;
    direction?: "column" | "row";
    axis?: "x" | "y";
    width?: number | string;
    height?: number | string;
};
export declare const ScrollSnap: ({ children, snap, align, gap, direction }: Props) => JSX.Element;
export declare const propsControls: {
    children: {
        type: ControlType;
        control: {
            type: ControlType;
        };
    };
    direction: {
        type: ControlType;
        options: string[];
        optionTitles: string[];
    };
    gap: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    align: {
        type: ControlType;
        options: string[];
    };
};
export {};
