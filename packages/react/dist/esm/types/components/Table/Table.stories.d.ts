/// <reference types="react" />
import { Meta } from '@storybook/react';
import Table from './Table';
declare const meta: Meta<typeof Table>;
export default meta;
export declare const Default: {
    args: {
        columns: {
            title: string;
            key: string;
        }[];
        rows: {
            column1: string;
            column2: string;
            column3: string;
        }[];
        stickyHeader: boolean;
    };
};
export declare const WithLinks: {
    args: {
        columns: ({
            title: string;
            key: string;
            headerRender?: undefined;
            cellRender?: undefined;
        } | {
            title: string;
            key: string;
            headerRender: ({ key, title }: {
                key: any;
                title: any;
            }) => JSX.Element;
            cellRender: ({ key }: {
                key: any;
            }, row: any) => JSX.Element;
        })[];
        rows: {
            column1: string;
            column2: string;
            column3: string;
        }[];
        stickyHeader: boolean;
    };
};
export declare const CustomCells: {
    args: {
        columns: ({
            title: string;
            key: string;
            cellRender?: undefined;
        } | {
            title: string;
            key: string;
            cellRender: (col: any, row: any) => JSX.Element;
        })[];
        rows: {
            column1: string;
            column2: {
                label: string;
                link: string;
                disabled: boolean;
            };
            column3: string;
        }[];
        stickyHeader: boolean;
    };
};
export declare const WithStickyHeaderAndScroll: {
    args: {
        containerStyle: {
            height: number;
            width: number;
        };
        tableStyle: {
            width: number;
        };
        columns: {
            title: string;
            key: string;
        }[];
        rows: {
            column1: string;
            column2: string;
            column3: string;
        }[];
        stickyHeader: boolean;
    };
};
