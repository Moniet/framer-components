import * as React from "react";
import { ControlType } from "framer";
type Props = {
    children?: React.ReactNode;
    width?: number;
    height?: number;
    radius?: number;
    videoSrc?: string;
    margin?: number;
    align: "top" | "bottom" | "left" | "right";
};
export declare const VideoPeek: ({ children, videoSrc, width, height, radius, margin, align }: Props) => JSX.Element;
export declare const propsControls: {
    videoSrc: {
        title: string;
        type: ControlType;
        allowedFileTypes: string[];
    };
    width: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    height: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    margin: {
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
    children: {
        type: ControlType;
    };
};
export {};
