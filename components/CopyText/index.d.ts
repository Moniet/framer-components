/// <reference types="react" />
type Props = {
    text?: string;
    children?: React.ReactNode;
};
export declare const CopyText: ({ text, children }: Props) => JSX.Element;
export declare const propsControls: {
    children: {
        type: import("framer").ControlType;
    };
    text: {
        type: import("framer").ControlType;
        defaultValue: string;
    };
};
export {};
