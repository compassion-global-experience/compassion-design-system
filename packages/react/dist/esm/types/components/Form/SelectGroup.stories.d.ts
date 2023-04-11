/// <reference types="react" />
import { Meta } from '@storybook/react';
import SelectGroup from './SelectGroup';
declare const meta: Meta<typeof SelectGroup>;
export default meta;
export declare const Default: {
    args: {};
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
    };
};
export declare const Disabled: {
    args: {
        state: string;
    };
};
export declare const WithMultipleIcons: {
    args: {
        icon: JSX.Element;
        adornmentIcon: JSX.Element;
    };
};
export declare const StartAdornmentWithText: {
    args: {
        adornmentPosition: string;
        adornmentText: string;
    };
};
