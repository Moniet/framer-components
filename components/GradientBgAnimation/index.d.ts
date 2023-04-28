import { ControlType } from "framer";
import { BoxShadowProps } from "src/utils/framerControlProps";
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
    shadow: BoxShadowProps;
};
export declare const GradientBgAnimation: ({ colorsText, borderRadius, size, angle, blur, animation: { duration, animateAngle }, shadow }: Props) => JSX.Element;
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
    borderRadius: {
        type: ControlType;
        min: number;
        max: number;
    };
    withShadow: {
        title: string;
        type: ControlType;
        defaultValue: boolean;
    };
    shadow: {
        hidden: (props: any) => boolean;
        title: string;
        type: ControlType;
        controls: {
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
    animation: {
        title: string;
        type: ControlType;
        controls: {
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
};
export {};
