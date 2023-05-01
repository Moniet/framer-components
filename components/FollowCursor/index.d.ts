import React from "react";
type Props = {
    movement: number;
    duration: number;
    children: React.ReactNode;
};
export declare const FollowCursor: ({ children, duration, movement }: Partial<Props>) => JSX.Element;
export declare const propsControls: {
    movement: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    children: {
        type: import("framer").ControlType;
    };
};
export {};
