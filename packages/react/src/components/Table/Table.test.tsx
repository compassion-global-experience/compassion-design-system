import { render } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  it('should render 3 columns and 3 rows', () => {
    const { container } = render(<Table {...TABLE_DEFAULT} />);
    expect(container).toMatchSnapshot();
  });

  it('should render disabled version', () => {
    const { container } = render(<Table {...TABLE_DEFAULT} disabled />);
    expect(container).toMatchSnapshot();
  });

  it('should render sticky header version', () => {
    const { container } = render(<Table {...TABLE_DEFAULT} stickyHeader />);
    expect(container).toMatchSnapshot();
  });
});

const TABLE_DEFAULT = {
  columns: [
    { title: 'Heading 1', key: 'column1' },
    { title: 'Heading 2', key: 'column2' },
    { title: 'Heading 3', key: 'column3' },
  ],
  rows: [
    { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
    { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
    { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
  ],
  stickyHeader: false,
};
