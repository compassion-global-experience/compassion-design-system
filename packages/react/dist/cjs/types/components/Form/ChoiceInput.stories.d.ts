/// <reference types="react" />
import { Meta } from '@storybook/react';
import { ChoiceInput } from '@compassion-gds/react';
declare const meta: Meta<typeof ChoiceInput>;
export default meta;
export declare const Radio: {
    args: {
        id: string;
        label: string;
        type: string;
    };
};
export declare const RadioError: {
    args: {
        id: string;
        label: string;
        type: string;
        state: string;
        hint: string;
    };
};
export declare const Checkbox: {
    args: {
        id: string;
        label: string;
        type: string;
    };
};
export declare const CheckboxError: {
    args: {
        id: string;
        label: string;
        type: string;
        state: string;
        hint: string;
    };
};
export declare const MultipleRadios: (props: any) => JSX.Element;
export declare const MultipleCheckboxes: (props: any) => JSX.Element;
