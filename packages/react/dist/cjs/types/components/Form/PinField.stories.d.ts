import { Meta } from '@storybook/react';
import PinField from './PinField';
declare const meta: Meta<typeof PinField>;
export default meta;
export declare const Default: {
    args: {
        value: number;
    };
};
export declare const Secret: {
    args: {
        value: number;
        secret: boolean;
    };
};
export declare const Longer: {
    args: {
        label: string;
        value: string;
        length: number;
    };
};
export declare const EmptyAndSmall: {
    args: {
        size: string;
    };
};
export declare const Error: {
    args: {
        state: string;
    };
};
export declare const Disabled: {
    args: {
        state: string;
    };
};
export declare const AutoFocus: {
    args: {
        autoFocus: boolean;
    };
};
