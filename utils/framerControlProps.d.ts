import { ControlType } from "framer";
export declare const getNumProps: (defaultValue: number, stepper: boolean, step?: number, minmax?: {
    min: number;
    max?: number;
}) => {
    step?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    type: ControlType;
    defaultValue: number;
    displayStepper: boolean;
};
export declare const getStrProps: (defaultValue: string) => {
    type: ControlType;
    defaultValue: string;
};
export declare const getSingleChild: () => {
    type: ControlType;
};
export declare const getMultipleChildren: () => {
    type: ControlType;
    control: {
        type: ControlType;
    };
};
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
export declare const easingProps: {
    type: ControlType;
    options: string[];
    optionTitles: string[];
    defaultValue: string;
};
export type ImageProps = {
    src?: string;
    alt?: string;
};
export declare const typography: {
    type: ControlType;
    controls: {
        letterSpacing: {
            step?: number | undefined;
            min?: number | undefined;
            max?: number | undefined;
            type: ControlType;
            defaultValue: number;
            displayStepper: boolean;
        };
        fontSize: {
            type: ControlType;
            defaultValue: number;
            min: number;
            max: number;
        };
        fontWeight: {
            type: ControlType;
            defaultValue: number;
            step: number;
            min: number;
            max: number;
        };
        font: {
            type: ControlType;
            default: string;
        };
        color: {
            type: ControlType;
            default: string;
        };
    };
};
export declare const getTypeographyStyles: (typography: any, dfontSize?: number, dfontWeight?: number) => any;
export declare const getBoolProps: (defaultValue: any) => {
    type: ControlType;
    defaultValue: any;
};
export declare const getColorProps: (defaultValue?: string) => {
    type: ControlType;
    defaultValue: string;
};
