import * as React from "react";
import { ControlType } from "framer";
import { BoxShadowProps } from "../../utils/framerControlProps";
type Props = {
    children?: React.ReactNode;
    width?: number;
    height?: number;
    radius?: number;
    videoSrc?: string;
    margin?: number;
    align: "top" | "bottom" | "left" | "right";
    id?: string;
    shadows: BoxShadowProps[];
};
export declare const VideoPeek: ({ children, videoSrc, width, height, radius, margin, align, id, shadows }: Props) => JSX.Element;
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
        defaultValue: string;
    };
    children: {
        type: ControlType;
    };
    shadows: {
        type: ControlType;
        control: {
            x: {
                type: ControlType;
                displayStepper: boolean;
                defaultValue: number;
            };
            y: {
                type: ControlType;
                displayStepper: boolean;
                defaultValue: number;
            };
            blur: {
                type: ControlType;
                displayStepper: boolean;
                defaultValue: number;
            };
            color: {
                type: ControlType;
                defaultValue: string;
            };
            size: {
                type: ControlType;
                displayStepper: boolean;
                defaultValue: number;
            };
        };
    };
};
export {};
