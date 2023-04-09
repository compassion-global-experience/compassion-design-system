import {
  ReactElement,
  CSSProperties,
  forwardRef,
  ForwardedRef,
  Ref,
} from 'react';
import styles from '@compassion-gds/css/src/components/Table/table.module.css';
import { getClasses } from '../../utils/classes';

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
  const classNames = getClasses(
    styles,
    ['table', sticky, disabledTable],
    className,
  );
  const containerClassNames = getClasses(
    styles,
    ['table-container'],
    className,
  );
  const headClass = getClasses(styles, 'table-head');
  const rowClass = getClasses(styles, 'table-row');
  const bodyClass = getClasses(styles, 'table-body');

  return (
    <div className={containerClassNames} style={containerStyle}>
      <table ref={ref} className={classNames} style={tableStyle}>
        <thead className={headClass}>
          <tr className={rowClass}>
            {columns.map((col) => (
              <th
                key={col.key}
                className={getClasses(styles, [
                  'table-cell',
                  col.disabled && 'disabled',
                ])}
              >
                {col.headerRender ? col.headerRender(col) : col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={bodyClass}>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowClass}>
              {columns.map((col) => (
                <td
                  className={getClasses(styles, [
                    'table-cell',
                    (row[col.key]?.disabled || col.disabled) && 'disabled',
                  ])}
                  key={`${rowIndex}-${col.key}`}
                >
                  {col.cellRender ? col.cellRender(col, row) : row[col.key]}
                </td>
              ))}
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
