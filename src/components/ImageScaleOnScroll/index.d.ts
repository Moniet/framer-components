import { ControlType } from "framer";
type Props = {
    scale?: number;
    image?: {
        src?: string;
        alt?: string;
    };
    borderRadius?: number;
    startAnimationFrom?: "screen-center" | "screen-end";
};
export declare function ImageScaleOnScroll({ scale, image, borderRadius, startAnimationFrom }: Props): JSX.Element;
export declare const propsControls: {
    scale: {
        type: ControlType;
        defaultValue: number;
        min: number;
        max: number;
        step: number;
        description: string;
    };
    borderRadius: {
        type: ControlType;
        defaultValue: number;
        min: number;
        max: number;
    };
    image: {
        type: ControlType;
    };
    startAnimationFrom: {
        type: ControlType;
        options: string[];
        optionTitles: string[];
    };
};
export {};
