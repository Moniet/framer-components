import { ControlType } from "framer";
import { ImageProps } from "../../../dist/utils/framerControlProps";
type Props = {
    image?: ImageProps;
    effect?: number;
};
export declare const ImageRepeatOnHover: ({ image, effect }: Props) => JSX.Element;
export declare const propsControls: {
    image: {
        type: ControlType;
    };
};
export {};
