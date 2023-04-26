import { ControlType } from "framer";
type Props = {
    borderRadius?: number;
    size?: number;
    angle?: number;
    colorsText?: string;
    blur?: number;
    animation: {
        duration?: number;
        animateAngle?: boolean;
    };
};
export declare const GradientBgAnimation: ({ colorsText, borderRadius, size, angle, blur, animation: { duration, animateAngle } }: Props) => JSX.Element;
export declare const propControls: {
    colorText: {
        title: string;
        type: ControlType;
        defaultValue: string;
    };
    size: {
        type: ControlType;
        min: number;
        max: number;
        default: number;
    };
    blur: {
        type: ControlType;
        defaultValue: number;
        displaySteppr: boolean;
    };
    angle: {
        type: ControlType;
        defaultValue: number;
        min: number;
        max: number;
        step: number;
    };
    animation: {
        title: string;
        type: ControlType;
        animateAngle: {
            type: ControlType;
            defaultValue: boolean;
        };
        duration: {
            title: string;
            type: ControlType;
            defaultValue: number;
            displayStepper: boolean;
        };
    };
};
export {};
