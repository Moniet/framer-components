export declare const Donut: ({ strokeWidth, strokeColor, progress, duration }: {
    strokeWidth?: number | undefined;
    strokeColor?: string | undefined;
    progress?: number | undefined;
    duration?: number | undefined;
}) => JSX.Element;
export declare const propsControls: {
    strokeWidth: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    strokeColor: {
        type: import("framer").ControlType;
        defaultValue: string;
    };
    progress: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    duration: {
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        type: import("framer").ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
};
