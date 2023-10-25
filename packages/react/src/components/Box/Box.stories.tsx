import { Meta } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
};

export default meta;

const defaultCardContent = (
  <div style={{ padding: '30px' }}>
    <h1>Heading 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

export const Default = {
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
    },
    backgroundTint: {
      control: { type: 'select' },
    },
    addBorder: {
      control: { type: 'boolean' },
    },
    borderRadius: {
      control: { type: 'select' },
    },
    borderColor: {
      control: { type: 'select' },
    },
    isMobile: {
      control: { type: 'boolean' },
    },
    textColor: {
      control: { type: 'select' },
    },
  },

  args: {
    children: defaultCardContent,
  },
};
