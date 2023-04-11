/// <reference types="react" />
import { Meta } from '@storybook/react';
import SelectField from './SelectField';
declare const meta: Meta<typeof SelectField>;
export default meta;
export declare const Default: {
    args: {};
};
export declare const WithDefaultOption: {
    args: {
        defaultOption: string;
    };
};
export declare const WithHelperText: {
    args: {
        hint: string;
    };
};
export declare const Error: {
    args: {
        state: string;
        hint: string;
    };
};
export declare const Success: {
    args: {
        state: string;
        placeholder: string;
    };
};
export declare const SuccessWithIcon: {
    args: {
        state: string;
        icon: JSX.Element;
    };
};
export declare const Disabled: {
    args: {
        state: string;
    };
};
export declare const WithoutLabel: {
    args: {
        label: any;
    };
};
