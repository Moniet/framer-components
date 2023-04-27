import { ControlType } from "framer";
export type BoxShadowProps = {
    x: number;
    y: number;
    blur: number;
    color: string;
    size: number;
};
export declare const boxShadowProps: {
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
