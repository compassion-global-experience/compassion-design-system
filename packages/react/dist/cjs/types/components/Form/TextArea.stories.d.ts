import { Meta } from '@storybook/react';
import TextArea from './TextArea';
declare const meta: Meta<typeof TextArea>;
export default meta;
export declare const Default: {
    args: {
        label: string;
        placeholder: string;
        rows: number;
    };
};
export declare const Error: {
    args: {
        label: string;
        state: string;
        placeholder: string;
        rows: number;
    };
};
export declare const Success: {
    args: {
        label: string;
        state: string;
        placeholder: string;
        rows: number;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        state: string;
        placeholder: string;
        rows: number;
    };
};
export declare const WithoutLabel: {
    args: {
        placeholder: string;
        rows: number;
    };
};
export declare const WithCounter: {
    args: {
        label: string;
        placeholder: string;
        rows: number;
        maxLength: number;
        showCounter: boolean;
    };
};
