import { ReactElement, CSSProperties } from 'react';
import '@compassion-gds/css/src/components/Table/table.css';

export interface Column {
  title: string;
  key: string;
  headerRender?: (col: Column) => ReactElement;
  cellRender?: (col: Column, data: object) => ReactElement;
}

export interface TableProps {
  columns: Column[],
  rows: object[],
  disabled?: boolean,
  stickyHeader?: boolean,
  containerStyle?: CSSProperties,
  tableStyle?: CSSProperties,
  className?: string,
}

const Table = ({ columns = [], rows = [], disabled = false, stickyHeader = false, containerStyle, tableStyle, className }: TableProps) => {
  const sticky = stickyHeader ? 'sticky-header' : '';
  const disabledTable = disabled ? 'disabled' : '';
  const classNames = ['table', sticky, disabledTable].join(' ');
  const containerClassNames = ['table-container', className].join(' ');

  return (
    <div className={containerClassNames} style={containerStyle}>
      <table className={classNames} style={tableStyle}>
        <thead className="table-head">
          <tr className="table-row">
            {
              columns.map(col => (
                col.headerRender
                  ? col.headerRender(col)
                  : <th key={col.key} className="table-cell">{col.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {
                columns.map((col) => (
                  col.cellRender
                    ? col.cellRender(col, row)
                    : <td className="table-cell" key={`${rowIndex}-${col.key}`}>{row[col.key]}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
