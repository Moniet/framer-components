import { ControlType } from "framer";
/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export declare const Squircle: ({ width, height, id, curvature }: {
    width: number;
    height: number;
    id?: string | undefined;
    curvature?: number | undefined;
}) => JSX.Element;
export declare const propControls: {
    curvature: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
    };
    width: {
        type: ControlType;
        min: number;
    };
    height: {
        type: ControlType;
        min: number;
    };
};
