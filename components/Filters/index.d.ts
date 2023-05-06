import { ControlType } from "framer";
export declare const Filters: ({ filter, amount, children, image }: {
    filter: any;
    amount: any;
    children: any;
    image: any;
}) => JSX.Element;
export declare const propsControls: {
    image: {
        type: ControlType;
        hidden: (props: any) => boolean;
    };
    filter: {
        type: ControlType;
        options: string[];
        defaultValue: string;
    };
    amount: {
        type: ControlType;
        step: number;
        displayStepper: boolean;
    };
    children: {
        hidden: (props: any) => boolean;
        type: ControlType;
        control: {
            type: ControlType;
        };
    };
};
