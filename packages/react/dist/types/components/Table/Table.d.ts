import { ReactElement, CSSProperties, Ref, ReactNode } from 'react';
interface BasicRow {
    [key: string]: ReactNode | BasicRow;
    disabled?: boolean;
}
export interface Column<Row extends BasicRow> {
    title: string;
    key: string;
    disabled?: boolean;
    headerRender?: (col: Column<Row>) => ReactElement;
    cellRender?: (col: Column<Row>, data: Row) => ReactNode;
}
export interface TableProps<Row extends BasicRow> {
    columns: Column<Row>[];
    rows: Row[];
    disabled?: boolean;
    stickyHeader?: boolean;
    containerStyle?: CSSProperties;
    tableStyle?: CSSProperties;
    className?: string;
    forwardedRef?: Ref<HTMLTableElement>;
}
export declare function Table<Row extends BasicRow>(props: TableProps<Row>): JSX.Element;
declare const _default: import("react").ForwardRefExoticComponent<TableProps<BasicRow> & import("react").RefAttributes<HTMLTableElement>>;
export default _default;
