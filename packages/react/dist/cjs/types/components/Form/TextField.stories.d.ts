/// <reference types="react" />
import { Meta } from '@storybook/react';
import TextField from './TextField';
declare const meta: Meta<typeof TextField>;
export default meta;
export declare const Default: {
    args: {
        label: string;
        placeholder: string;
    };
};
export declare const WithHelperText: {
    args: {
        label: string;
        placeholder: string;
        hint: string;
    };
};
export declare const Error: {
    args: {
        label: string;
        state: string;
        hint: string;
        placeholder: string;
    };
};
export declare const Success: {
    args: {
        label: string;
        state: string;
        placeholder: string;
    };
};
export declare const SuccessWithLeftIcon: {
    args: {
        label: string;
        state: string;
        placeholder: string;
        iconLeft: JSX.Element;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        state: string;
        placeholder: string;
    };
};
export declare const WithoutLabel: {
    args: {
        placeholder: string;
    };
};
