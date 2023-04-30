import { ControlType } from "framer";
type Props = {
    image?: {
        src?: string;
    };
    alt?: string;
    easing: string;
    dur?: number;
    width?: number;
    height?: number;
    br?: number;
    scaleImage?: number;
    scaleContainer?: number;
};
export declare const ScaleImage: ({ image, alt, easing, dur, width, height, br, scaleImage, scaleContainer }: Props) => JSX.Element;
export declare const propsControls: {
    image: {
        type: ControlType;
        defaultValue: string;
    };
    radius: {
        type: ControlType;
        defaultValue: number;
    };
    scaleContainer: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
    };
    scaleImage: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
    };
    dur: {
        title: string;
        type: ControlType;
        default: number;
        min: number;
        max: number;
        step: number;
        displayStepper: boolean;
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
export {};
