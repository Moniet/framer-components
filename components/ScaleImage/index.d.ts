import { ControlType } from "framer";
export declare const ScaleImage: ({ image, alt, easing, dur, width, height, br, scale }: {
    image: any;
    alt?: string | undefined;
    easing?: string | undefined;
    dur?: number | undefined;
    width?: string | undefined;
    height?: string | undefined;
    br?: number | undefined;
    scale?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    image: {
        type: ControlType;
        defaultValue: string;
    };
    radius: {
        type: ControlType;
        defaultValue: number;
    };
    dur: {
        title: string;
        type: ControlType;
        default: number;
    };
    width: {
        type: ControlType;
        displayStepper: boolean;
        step: number;
        defaultValue: number;
    };
    height: {
        type: ControlType;
        displayStepper: boolean;
        step: number;
        defaultValue: number;
    };
    easing: {
        type: ControlType;
        options: string[];
        optionTitles: string[];
        defaultValue: string;
    };
};
