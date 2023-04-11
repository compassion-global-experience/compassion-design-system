import { ReactElement, CSSProperties, Ref } from 'react';
export interface Column<Row> {
    title: string;
    key: string;
    disabled?: boolean;
    headerRender?: (col: Column<Row>) => ReactElement;
    cellRender?: (col: Column<Row>, data: Row) => ReactElement;
}
export interface TableProps<Row> {
    columns: Column<Row>[];
    rows: Row[];
    disabled?: boolean;
    stickyHeader?: boolean;
    containerStyle?: CSSProperties;
    tableStyle?: CSSProperties;
    className?: string;
}
type TableWithRefProps<T> = TableProps<T> & {
    mRef?: Ref<HTMLTableElement>;
};
declare function Table<RowData>({ mRef, ...props }: TableWithRefProps<RowData>): JSX.Element;
export default Table;
