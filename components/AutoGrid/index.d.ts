import { ControlType } from "framer";
type Props = {
    children?: JSX.Element[] | JSX.Element;
    minWidth: number;
    maxWidth: number;
    gap: number;
};
export declare const AutoGrid: ({ children, minWidth, maxWidth, gap }: Partial<Props>) => JSX.Element;
export declare const propsControls: {
    minWidth: {
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
        step: number;
    };
    maxWidth: {
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
        step: number;
    };
    gap: {
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
        step: number;
    };
};
export {};
