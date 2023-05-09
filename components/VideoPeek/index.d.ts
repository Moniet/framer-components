import * as React from "react";
import { ControlType } from "framer";
import { BoxShadowProps } from "../../utils/framerControlProps";
type Props = {
    children?: React.ReactNode;
    w?: number | string;
    h?: number | string;
    radius?: number;
    videoSrc?: string;
    margin?: number;
    align: "top" | "bottom" | "left" | "right";
    id?: string;
    boxShadow: BoxShadowProps[];
};
export declare const VideoPeek: ({ children, videoSrc, w: width, h: height, radius, margin, align, id, boxShadow: shadows }: Props) => JSX.Element;
export declare const propsControls: {
    videoSrc: {
        title: string;
        type: ControlType;
        allowedFileTypes: string[];
    };
    w: {
        title: string;
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    h: {
        title: string;
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
    boxShadow: {
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
