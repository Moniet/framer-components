import { ControlType } from "framer";
type Props = {
    startColor?: string;
    endColor?: string;
    borderRadius?: number;
    size?: number;
    angle?: number;
    colorsText?: string;
    duration?: number;
    blur?: number;
    animateAngle?: boolean;
};
export declare const GradientBgAnimation: ({ colorsText, borderRadius, size, angle, duration, blur, animateAngle }: Props) => JSX.Element;
export declare const propControls: {
    startColor: {
        title: string;
        type: ControlType;
    };
};
export {};
