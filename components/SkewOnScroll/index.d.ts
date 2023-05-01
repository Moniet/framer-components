import { ControlType } from "framer";
export declare const SkewOnScroll: ({ children, duration, stretchiness, skew, gap, direction }: {
    children: any;
    duration?: number | undefined;
    stretchiness?: number | undefined;
    skew?: number | undefined;
    gap?: number | undefined;
    direction?: string | undefined;
}) => JSX.Element;
export declare const propsControls: {
    skew: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    stretchiness: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    children: {
        type: ControlType;
        control: {
            type: ControlType;
        };
    };
    direction: {
        type: ControlType;
        options: string[];
        optionTitles: string[];
        defaultValue: string;
    };
    gap: {
        type: ControlType;
        defaultValue: number;
        step: number;
        min: number;
        max: number;
    };
};
