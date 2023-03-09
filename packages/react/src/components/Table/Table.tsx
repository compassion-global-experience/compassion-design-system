import { ReactElement, CSSProperties } from 'react';
import '@compassion-gds/css/src/components/Table/table.css';

export interface ColumnCell {
  title: string;
  key: string;
  headerRenderFn?: (key: string | number, title: string) => ReactElement;
  cellRenderFn?: (key: string, data: string | number | object) => ReactElement;
}

export interface TableProps {
  columns: ColumnCell[],
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
              columns.map((col, index) => (
                col.headerRenderFn
                  ? col.headerRenderFn(index, col.title)
                  : <th key={index} className="table-cell">{col.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {
                Object.keys(row).map((key, cellIndex) => (
                  columns[cellIndex].cellRenderFn
                    ? columns[cellIndex].cellRenderFn(key, row[key])
                    : <td className="table-cell" key={cellIndex}>{row[key]}</td>
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
