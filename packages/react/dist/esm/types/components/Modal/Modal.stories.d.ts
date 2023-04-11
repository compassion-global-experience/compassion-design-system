/// <reference types="react" />
import { Meta } from '@storybook/react';
import Modal from './Modal';
declare const meta: Meta<typeof Modal>;
export default meta;
export declare const Default: {
    (props: any): JSX.Element;
    args: {
        title: string;
        size: string;
        footerSlot: JSX.Element;
    };
};
export declare const Small: {
    (props: any): JSX.Element;
    args: {
        title: string;
        size: string;
        footerSlot: JSX.Element;
    };
};
export declare const Wide: {
    (props: any): JSX.Element;
    args: {
        title: string;
        size: string;
        footerSlot: JSX.Element;
    };
};
export declare const NoHeader: {
    (props: any): JSX.Element;
    args: {
        footerSlot: JSX.Element;
    };
};
export declare const NoFooter: {
    (props: any): JSX.Element;
    args: {
        title: string;
    };
};
export declare const NoHeaderAndFooter: {
    (props: any): JSX.Element;
    args: {};
};
