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
    <div class="modal ${size}">
        <span class="modal-button-close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 3.14645C13.0488 3.34171 13.0488 3.65829 12.8536 3.85355L3.85355 12.8536C3.65829 13.0488 3.34171 13.0488 3.14645 12.8536C2.95118 12.6583 2.95118 12.3417 3.14645 12.1464L12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.14645 3.14645C3.34171 2.95118 3.65829 2.95118 3.85355 3.14645L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L3.14645 3.85355C2.95118 3.65829 2.95118 3.34171 3.14645 3.14645Z" fill="black"/>
            </svg>
        </span>
        ${header ? `<div class="modal-header">${title}</div>` : ''}
        <div class="modal-body">
            <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>
        </div>
        ${
          footer
            ? `
        <div class="modal-footer">
            <button type="button" class="button-main secondary medium">Button 2</button>
            <button type="button" class="button-main primary medium">Button 1</button>
        </div>
        `
            : ''
        }
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
