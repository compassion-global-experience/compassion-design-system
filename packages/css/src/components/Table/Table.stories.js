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
}) => {
  const sticky = stickyHeader ? 'sticky-header' : '';

  return `
    <div class="table-container" style="${containerHeight ? `max-height: ${containerHeight}` : ''}">
      <table class="table ${sticky} ${state}" style="${tableWidth ? `width: ${tableWidth}` : ''}">
      <thead class="table-head">
        <tr class="table-row">
          <th class="table-cell ${state}">Heading</th>
          <th class="table-cell ${state}"><a href="https://google.com">Link</a></th>
          <th class="table-cell ${state}">Heading</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-row">
          <td class="table-cell ${state}">Cell 1</td>
          <td class="table-cell ${state}">Cell 2</td>
          <td class="table-cell ${state}">Cell 3</td>
        </tr>
        <tr class="table-row">
          <td class="table-cell ${state}"><a href="https://google.com">Link 1</a></td>
          <td class="table-cell ${state}"><a href="https://google.com">Link 2</a></td>
          <td class="table-cell ${state}"><a href="https://google.com">Link 3</a></td>
        </tr>
        <tr class="table-row">
          <td class="table-cell ${state}">Cell 1</td>
          <td class="table-cell ${state}">Cell 2</td>
          <td class="table-cell ${state}">Cell 3</td>
        </tr>
        <tr class="table-row">
          <td class="table-cell ${state}"><a href="https://google.com">Link 1</a></td>
          <td class="table-cell ${state}"><a href="https://google.com">Link 2</a></td>
          <td class="table-cell ${state}"><a href="https://google.com">Link 3</a></td>
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
