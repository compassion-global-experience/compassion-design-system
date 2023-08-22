import './table.scss';
import prefixStateWithClass from '../../utils/prefixStateWithClass';

export default {
  title: 'Components/Table',
  argTypes: {
    stickyHeader: { control: 'boolean' },
    disabled: { control: 'boolean' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'active'],
    },
  },
  decorators: [(Story) => `<div style="width: 450px;">${Story()}</div>`],
};

const Table = ({
  stickyHeader = false,
  state = 'default',
  tableWidth = null,
  containerHeight = null,
  disabledRow = false,
  disabledCell = false,
}) => {
  const sticky = stickyHeader ? 'cds-table__sticky-header' : '';
  const stateClass = prefixStateWithClass(state, `cds-table--`, `default`);

  return `
    <div class="cds-table__container" style="${
      containerHeight ? `max-height: ${containerHeight}` : ''
    }">
      <table class="cds-table ${sticky} ${stateClass}" style="${
    tableWidth ? `width: ${tableWidth}` : ''
  }">
      <thead class="cds-table__head">
        <tr class="cds-table__row">
          <th class="cds-table__cell ${stateClass}">Heading</th>
          <th class="cds-table__cell ${stateClass}"><a href="https://google.com">Link</a></th>
          <th class="cds-table__cell ${stateClass}">Heading</th>
        </tr>
      </thead>
      <tbody class="cds-table__body">
        <tr class="cds-table__row ${disabledRow ? 'disabled' : ''}">
          <td class="cds-table__cell ${
            disabledCell ? 'disabled' : ''
          }">Cell 1</td>
          <td class="cds-table__cell">Cell 2</td>
          <td class="cds-table__cell">Cell 3</td>
        </tr>
        <tr class="cds-table__row">
          <td class="cds-table__cell"><a href="https://google.com">Link 1</a></td>
          <td class="cds-table__cell"><a href="https://google.com">Link 2</a></td>
          <td class="cds-table__cell"><a href="https://google.com">Link 3</a></td>
        </tr>
        <tr class="cds-table__row">
          <td class="cds-table__cell">Cell 1</td>
          <td class="cds-table__cell">Cell 2</td>
          <td class="cds-table__cell">Cell 3</td>
        </tr>
        <tr class="cds-table__row">
          <td class="cds-table__cell"><a href="https://google.com">Link 1</a></td>
          <td class="cds-table__cell"><a href="https://google.com">Link 2</a></td>
          <td class="cds-table__cell"><a href="https://google.com">Link 3</a></td>
        </tr>
      </tbody>
    </table>
    </div>
`;
};

export const Default = Table.bind({});
Default.args = {
  state: 'default',
  stickyHeader: false,
};

export const Disabled = Table.bind({});
Disabled.args = {
  state: 'disabled',
  stickyHeader: false,
};

export const DisabledFirstRow = Table.bind({});
DisabledFirstRow.args = {
  state: 'default',
  stickyHeader: false,
  disabledRow: true,
};

export const DisabledFirstCell = Table.bind({});
DisabledFirstCell.args = {
  state: 'default',
  stickyHeader: false,
  disabledCell: true,
};

export const HorizontalScroll = Table.bind({});
HorizontalScroll.args = {
  state: 'default',
  tableWidth: '500px',
};

export const StickyHeader = Table.bind({});
StickyHeader.args = {
  state: 'default',
  stickyHeader: true,
  containerHeight: '150px',
};

export const HorizontalAndSticky = Table.bind({});
HorizontalAndSticky.args = {
  state: 'default',
  stickyHeader: true,
  containerHeight: '150px',
  tableWidth: '500px',
};
