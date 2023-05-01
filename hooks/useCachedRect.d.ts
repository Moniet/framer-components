import React, { MutableRefObject } from "react";
export declare const useCachedRect: (ref: MutableRefObject<any>) => React.MutableRefObject<{}> | {
    current: {
        left: number;
        top: number;
        height: number;
        width: number;
    };
};
