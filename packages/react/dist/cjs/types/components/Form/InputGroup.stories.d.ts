/// <reference types="react" />
import { Meta } from '@storybook/react';
import { InputGroup } from '@compassion-gds/react';
declare const meta: Meta<typeof InputGroup>;
export default meta;
export declare const Default: {
    args: {
        label: string;
        placeholder: string;
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
export declare const Disabled: {
    args: {
        label: string;
        state: string;
        placeholder: string;
    };
};
export declare const WithMultipleIcons: {
    args: {
        label: string;
        placeholder: string;
        iconLeft: JSX.Element;
        iconRight: JSX.Element;
        adornmentIcon: JSX.Element;
    };
};
export declare const StartAdornmentWithText: {
    args: {
        label: string;
        placeholder: string;
        adornmentPosition: string;
        adornmentText: string;
    };
};
