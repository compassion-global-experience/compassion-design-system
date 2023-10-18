import './box.scss';
import '../TextBox/textBox.scss';

export default {
  title: 'Components/Box',
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'neutral'],
    },
    backgroundTint: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'amplified'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['square', 'rounded', 'circle'],
    },
    borderColor: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    textColor: {
      control: { type: 'select' },
      options: ['default', 'primary', 'white', 'accent'],
    },
    isMobile: {
      control: 'boolean',
    },
  },
  decorators: [
    (story) => {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.setAttribute('style', 'background-color: #fff; padding: 50px');
      wrapperDiv.appendChild(story());
      return wrapperDiv;
    },
  ],
};

const defaultBoxContent = `
    <div style="padding: 30px">
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
`;

const createBox = ({
  backgroundColor = 'neutral',
  backgroundTint = 'default',
  borderRadius,
  borderColor,
  textColor = 'default',
  isMobile = false,
}) => {
  const box = document.createElement('div');
  box.className = 'cds-box';
  box.classList.add(`cds-box--${backgroundColor}-${backgroundTint}`);
  if (borderRadius || borderColor) {
    box.classList.add(`cds-box--border`);
    box.classList.add(`cds-box--border-${borderRadius || 'square'}`);
    if (borderColor !== 'default') {
      box.classList.add(`cds-box--border-${borderColor || 'default'}`);
    }
  }

  box.classList.add('cds-text-box');
  box.classList.add(`cds-text-box--${textColor}`);
  if (!isMobile) {
    box.classList.add('cds-text-box--desktop');
  }

  box.innerHTML = defaultBoxContent;
  return box;
};

const Template = (args) => {
  return createBox(args);
};

export const Default = Template.bind({});
