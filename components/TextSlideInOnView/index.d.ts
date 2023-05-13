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
        type: import("framer").ControlType;
        controls: {
            letterSpacing: {
                step?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                type: import("framer").ControlType;
                defaultValue: number;
                displayStepper: boolean;
            };
            fontSize: {
                type: import("framer").ControlType;
                defaultValue: number;
                min: number;
                max: number;
            };
            fontWeight: {
                type: import("framer").ControlType;
                defaultValue: number;
                step: number;
                min: number;
                max: number;
            };
            font: {
                type: import("framer").ControlType;
                default: string;
            };
            color: {
                type: import("framer").ControlType;
                default: string;
            };
        };
    };
};
export {};
