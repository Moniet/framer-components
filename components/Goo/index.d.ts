import * as React from "react";
import { ControlType } from "framer";
type Props = {
    children?: React.ReactNode;
    br?: number;
    id?: string;
};
export declare const Goo: ({ children, br, id }: Props) => JSX.Element;
export declare const propsControls: {
    children: {
        type: ControlType;
        control: {
            type: ControlType;
        };
    };
};
export {};
