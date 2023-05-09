import { ControlType } from "framer";
import { ImageProps } from "../../../dist/utils/framerControlProps";
type Props = {
    image?: ImageProps;
    effect?: number;
    duration?: number;
    radius?: number;
};
export declare const ImageRepeatOnHover: ({ image, effect, duration, radius }: Props) => JSX.Element;
export declare const propsControls: {
    image: {
        type: ControlType;
        defaultValue: string;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    radius: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
};
export {};
