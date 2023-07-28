import { Meta } from '@storybook/react';
import Button from './Button';

const buttonKindsDecorator = (Story) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '24px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Default" />
      <Button label="CTA" kind="cta" />
      <Button label="White" kind="white" />
      <Button label="Inverted" kind="inverted" />
      <Button label="Destructive" kind="destructive" />
    </div>
    <div>
      <Story />
    </div>
  </div>
);

const buttonEmphasisDecorator = (Story) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '24px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Primary" />
      <Button label="Secondary" emphasis="secondary" />
      <Button label="Tertiary" emphasis="tertiary" />
    </div>
    <div>
      <Story />
    </div>
  </div>
);

const buttonSizeDecorator = (Story) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '24px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="small" size="small" />
      <Button label="medium" size="medium" />
      <Button label="large" size="large" />
    </div>
    <div>
      <Story />
    </div>
  </div>
);

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
};

export default meta;

// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
const emphasisArgTypes = {
  control: { type: 'select' },
  options: ['primary', 'secondary', 'tertiary'],
};

const kindArgTypes = {
  control: { type: 'select' },
  options: ['default', 'cta', 'white', 'inverted', 'destructive'],
};

const sizeArgTypes = {
  control: { type: 'select' },
  options: ['small', 'medium', 'large'],
};

const disabledArgTypes = {
  control: { type: 'select' },
  options: [true, false],
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Playground = {
  args: {
    label: 'Controlled Button',
  },
  argTypes: {
    emphasis: emphasisArgTypes,
    kind: kindArgTypes,
    size: sizeArgTypes,
    disabled: disabledArgTypes,
  },
};

export const Kinds = {
  decorators: [buttonKindsDecorator],
  args: { label: 'Controlled button' },
  argTypes: {
    kind: kindArgTypes,
  },
};

export const Emphasis = {
  decorators: [buttonEmphasisDecorator],
  args: {
    label: 'Controlled Button',
  },
  argTypes: {
    emphasis: emphasisArgTypes,
  },
};

export const Size = {
  decorators: [buttonSizeDecorator],
  args: {
    label: 'Controlled Button',
  },
  argTypes: {
    size: sizeArgTypes,
  },
};

export const Disabled = {
  args: {
    label: 'Controlled Button',
    disabled: true,
  },
  argTypes: {
    disabled: disabledArgTypes,
  },
};
