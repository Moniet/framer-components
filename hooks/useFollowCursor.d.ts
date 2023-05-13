import { RefObject } from "react";
type Options = {
    movement?: number;
    range?: number;
};
export declare const useFollowCursor: (ref: RefObject<HTMLElement>, options?: Options) => {
    mouseX: import("framer-motion").MotionValue<any>;
    mouseY: import("framer-motion").MotionValue<any>;
    handleMouseMove: (e: React.MouseEvent) => void;
    handleMouseLeave: (e: React.MouseEvent) => void;
    handleMouseEnter: (e: MouseEvent) => void;
};
export {};
