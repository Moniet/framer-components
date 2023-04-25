import { ControlType } from "framer";
/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export declare const Squircle: ({ width, height, id, curvature, color }: {
    width: number;
    height: number;
    id?: string | undefined;
    curvature?: number | undefined;
    color?: string | undefined;
}) => JSX.Element;
export declare const propControls: {
    color: {
        type: ControlType;
    };
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
