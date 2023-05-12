export declare const ShuffleText: ({ text, maxIterations, typography }: any) => JSX.Element;
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
    maxIterations: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
};
