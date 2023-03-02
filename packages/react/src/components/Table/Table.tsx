import { CSSProperties } from 'react';
import '@compassion-gds/css/src/components/Table/table.css';

export interface TableProps {
  columns: {
    value: string,
    link?: string,
    disabled?: boolean,
  }[],
  rows: {
    data: {
      value: string,
      link?: string,
      disabled?: boolean,
    }[],
    disabled?: boolean,
  }[],
  disabled?: boolean,
  stickyHeader?: boolean,
  containerStyle?: CSSProperties,
  tableStyle?: CSSProperties,
}

const Table = ({ columns= [], rows = [], disabled = false, stickyHeader = false, containerStyle, tableStyle }: TableProps) => {
  const sticky = stickyHeader ? 'sticky-header' : '';
  const disabledTable = disabled ? 'disabled' : '';
  const classNames = ['table', sticky, disabledTable].join(' ');

  return (
    <div className="table-container" style={containerStyle}>
      <table className={classNames} style={tableStyle}>
        <thead className="table-head">
          <tr className="table-row">
            {columns.map((col, i) => (
              <th key={`table-head-${i}`} className={`table-cell ${col.disabled ? 'disabled' : ''}`}>
                {col.link ? <a href={col.link}>{col.value}</a> : col.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((row, rowIndex) => (
            <tr key={`table-row-${rowIndex}`} className={`table-row ${row.disabled ? 'disabled' : ''}`}>
              {
                  row.data.map((cell, cellIndex) => (
                    <td key={`table-cell-${rowIndex}-${cellIndex}`} className={`table-cell ${cell.disabled ? 'disabled' : ''}`}>
                      {cell.link ? <a href={cell.link}>{cell.value}</a> : cell.value}
                    </td>
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
