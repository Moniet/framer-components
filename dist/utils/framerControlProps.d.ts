declare namespace i {
    namespace x {
        const type: e;
        const displayStepper: boolean;
        const defaultValue: number;
    }
    namespace y {
        const type_1: e;
        export { type_1 as type };
        const displayStepper_1: boolean;
        export { displayStepper_1 as displayStepper };
        const defaultValue_1: number;
        export { defaultValue_1 as defaultValue };
    }
    namespace blur {
        const type_2: e;
        export { type_2 as type };
        const displayStepper_2: boolean;
        export { displayStepper_2 as displayStepper };
        const defaultValue_2: number;
        export { defaultValue_2 as defaultValue };
    }
    namespace color {
        const type_3: e;
        export { type_3 as type };
        const defaultValue_3: string;
        export { defaultValue_3 as defaultValue };
    }
    namespace size {
        const type_4: e;
        export { type_4 as type };
        const displayStepper_3: boolean;
        export { displayStepper_3 as displayStepper };
        const defaultValue_4: number;
        export { defaultValue_4 as defaultValue };
    }
}
declare namespace m {
    const type_5: e;
    export { type_5 as type };
    export const options: string[];
    export const optionTitles: string[];
    const defaultValue_5: string;
    export { defaultValue_5 as defaultValue };
}
declare function c(t: any): {
    type: e;
    defaultValue: any;
};
declare function u(): {
    type: e;
    control: {
        type: e;
    };
};
declare function p(t: any, r: any, o: any, n: any): any;
declare function s(): {
    type: e;
};
declare function l(t: any): {
    type: e;
    defaultValue: any;
};
declare function f(t: any): {
    "--font-family": any;
    "--font-size": string;
    "--font-weight": any;
    "--color": any;
};
declare namespace y {
    const type_6: e;
    export { type_6 as type };
    export namespace controls {
        export const letterSpacing: any;
        export namespace fontSize {
            const type_7: e;
            export { type_7 as type };
            const defaultValue_6: number;
            export { defaultValue_6 as defaultValue };
            export const min: number;
            export const max: number;
        }
        export namespace fontWeight {
            const type_8: e;
            export { type_8 as type };
            const defaultValue_7: number;
            export { defaultValue_7 as defaultValue };
        }
        export namespace font {
            const type_9: e;
            export { type_9 as type };
            const _default: string;
            export { _default as default };
        }
        export namespace color_1 {
            const type_10: e;
            export { type_10 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export { color_1 as color };
    }
}
import { ControlType as e } from "framer";
export { i as boxShadowProps, m as easingProps, c as getBoolProps, u as getMultipleChildren, p as getNumProps, s as getSingleChild, l as getStrProps, f as getTypeographyStyles, y as typography };
