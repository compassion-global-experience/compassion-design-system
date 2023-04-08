import {
  ReactElement,
  CSSProperties,
  forwardRef,
  ForwardedRef,
  Ref,
} from 'react';
import '@compassion-gds/css/src/components/Table/table.module.css';

export interface Column<Row> {
  title: string;
  key: string;
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

function TableInner<Row>(
  props: TableProps<Row>,
  ref: ForwardedRef<HTMLTableElement>,
) {
  const {
    columns = [],
    rows = [],
    disabled = false,
    stickyHeader = false,
    containerStyle,
    tableStyle,
    className,
  } = props;

  const sticky = stickyHeader ? 'sticky-header' : '';
  const disabledTable = disabled ? 'disabled' : '';
  const classNames = ['table', sticky, disabledTable].filter(Boolean).join(' ');
  const containerClassNames = ['table-container', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} style={containerStyle}>
      <table ref={ref} className={classNames} style={tableStyle}>
        <thead className="table-head">
          <tr className="table-row">
            {columns.map((col) =>
              col.headerRender ? (
                col.headerRender(col)
              ) : (
                <th key={col.key} className="table-cell">
                  {col.title}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {columns.map((col) =>
                col.cellRender ? (
                  col.cellRender(col, row)
                ) : (
                  <td className="table-cell" key={`${rowIndex}-${col.key}`}>
                    {row[col.key]}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableWithRef = forwardRef(TableInner);

type TableWithRefProps<T> = TableProps<T> & {
  mRef?: Ref<HTMLTableElement>;
};

function Table<RowData>({ mRef, ...props }: TableWithRefProps<RowData>) {
  return <TableWithRef ref={mRef} {...props} />;
}

export default Table;
