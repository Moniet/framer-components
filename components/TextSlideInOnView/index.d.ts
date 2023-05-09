import { ControlType } from "framer";
type Props = {
    text: string;
    typography: {
        font: string;
        fontSize: number;
        fontWeight: number;
        color: string;
    };
};
export declare const TextSlideInOnView: ({ text, typography }: Partial<Props>) => JSX.Element;
export declare const propsControls: {
    typography: {
        type: ControlType;
        controls: {
            fontSize: {
                type: ControlType;
                defaultValue: number;
                min: number;
                max: number;
            };
            fontWeight: {
                type: ControlType;
                defaultValue: number;
            };
            font: {
                type: ControlType;
                default: string;
            };
            color: {
                type: ControlType;
                default: string;
            };
        };
    };
};
export {};
