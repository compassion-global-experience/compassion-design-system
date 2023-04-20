import {
  ReactElement,
  CSSProperties,
  forwardRef,
  ForwardedRef,
  Ref,
  ReactNode,
} from 'react';
import styles from '@compassion-gds/core/src/components/Table/table.module.css';
import { getClasses } from '../../utils/classes';

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

export function Table<Row extends BasicRow>(props: TableProps<Row>) {
  const {
    columns = [],
    rows = [],
    disabled = false,
    stickyHeader = false,
    containerStyle,
    tableStyle,
    className,
    forwardedRef,
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
      <table ref={forwardedRef} className={classNames} style={tableStyle}>
        <thead className={headClass}>
          <tr className={rowClass}>
            {columns.map((col) => (
              <th
                key={col.key}
                className={getClasses(styles, [
                  'table-cell',
                  col.disabled ? 'disabled' : undefined,
                ])}
              >
                {col.headerRender ? col.headerRender(col) : col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={bodyClass}>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={getClasses(styles, [
                'table-row',
                row.disabled && 'disabled',
              ])}
            >
              {columns.map((col) => (
                <td
                  className={getClasses(styles, [
                    'table-cell',
                    (col.disabled || (row[col.key] as BasicRow)?.disabled) &&
                      'disabled',
                  ])}
                  key={`${rowIndex}-${col.key}`}
                >
                  {col.cellRender
                    ? col.cellRender(col, row)
                    : (row[col.key] as string)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableWithRef = <Row extends BasicRow>(
  props: TableProps<Row>,
  ref: ForwardedRef<HTMLTableElement>,
) => <Table<Row> {...props} forwardedRef={ref} />;

TableWithRef.displayName = 'Table';

export default forwardRef(TableWithRef);
