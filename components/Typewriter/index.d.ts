import { TypewriterProps } from "./useTypewriter";
import { CursorProps } from "./Cursor";
import { ControlType } from "framer";
type ComponentProps = {
    cursor?: boolean;
} & TypewriterProps & CursorProps;
export declare const Typewriter: ({ text, loop, typeSpeed, deleteSpeed, delaySpeed, cursor, cursorStyle, cursorColor, cursorBlinking, onLoopDone, onType, onDelay, onDelete, color, fontSize, fontFamily, fontWeight }: ComponentProps) => JSX.Element;
export declare const propsControls: {
    text: {
        type: ControlType;
        defaultValue: string;
    };
    font: {
        type: ControlType;
        defaultValue: string;
    };
    fontSize: {
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
    };
    fontWeight: {
        type: ControlType;
        defaultValue: number;
        displayStepper: boolean;
        step: number;
    };
    color: {
        type: ControlType;
        defaultValue: string;
    };
    animation: {
        type: ControlType;
        controls: {
            loop: {
                type: ControlType;
                defaultValue: boolean;
            };
            typeSpeed: {
                type: ControlType;
                min: number;
                max: number;
                defaultValue: number;
            };
            deleteSpeed: {
                type: ControlType;
                min: number;
                max: number;
                defaultValue: number;
            };
            delaySpeed: {
                title: string;
                type: ControlType;
                defaultValue: number;
                min: number;
                max: number;
            };
            cursor: {
                type: BooleanConstructor;
                defaultValue: boolean;
            };
            cursorBlinking: {
                type: ControlType;
                defaultValue: boolean;
            };
            cursorColor: {
                type: ControlType;
                defaultValue: string;
            };
        };
    };
};
export {};
