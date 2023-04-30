import { ControlType } from "framer";
type Props = {
    children?: JSX.Element[] | JSX.Element;
    minWidth: number;
    maxWidth: number;
    gap: number;
    justify: string;
};
export declare const AutoGrid: ({ children, minWidth, maxWidth, gap, justify }: Partial<Props>) => JSX.Element;
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
    children: {
        type: ControlType;
        control: {
            type: ControlType;
        };
    };
    justify: {
        type: ControlType;
        defaultValue: string;
        options: string[];
        optionTitles: string[];
    };
};
export {};
