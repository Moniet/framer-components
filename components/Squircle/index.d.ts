import { ControlType } from "framer";
/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */
export declare const Squircle: ({ id, curvature, color }: {
    id?: string | undefined;
    curvature?: number | undefined;
    color?: string | undefined;
}) => JSX.Element;
export declare const propControls: {
    color: {
        type: ControlType;
        defaultValue: string;
    };
    curvature: {
        type: ControlType;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
    };
};
