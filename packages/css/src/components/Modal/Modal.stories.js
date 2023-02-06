export default {
  title: 'Components/Modal',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    header: { control: 'boolean' },
    footer: { control: 'boolean' },
    title: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'wide'],
    },
  },
};

const Template = ({
  header = true,
  footer = true,
  title = 'title',
  size = 'default',
}) => {
  return `
    <button type="button" class="button-main secondary medium" onclick='openModal()'>Open Modal</button>
    <span id="example-backdrop" style="display: none; position: fixed; left: 0; right: 0; top: 0; bottom: 0; background: black; opacity: 0.7; "></span>
    <div style="display: none;" id="example-modal" class="modal ${size}">
        <span id="example-modal-close" class="modal-button-close" onclick='closeModal()'>
            <i class="ph-x ph-xl"></i>
        </span>
        ${renderHeader({ header, title })}
        <div class="modal-body">
            <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>
        </div>
        ${renderFooter({ footer })}
    </div>

    <script>
      var modal = document.getElementById('example-modal');
      var backdrop = document.getElementById('example-backdrop');
      
      function openModal() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
      }
      
      function closeModal() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
      }
    </script>
`;
};

const renderHeader = ({ header, title }) =>
  header ? `<div class="modal-header">${title}</div>` : '';

const renderFooter = ({ footer }) => {
  if (!footer) return '';

  return `
        <div class="modal-footer">
            <button type="button" class="button-main secondary medium">Button 2</button>
            <button type="button" class="button-main primary medium">Button 1</button>
        </div>
        `;
};

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Wide = Template.bind({});
Wide.args = {
  size: 'wide',
};
