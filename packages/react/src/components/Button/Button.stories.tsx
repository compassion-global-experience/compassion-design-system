import { Meta } from '@storybook/react';
import Button from './Button';
import { cdsIconMap } from '../Icon/Icon';

import { wrappingElementClass } from '@compassion-design-system/core/src/utils/wrapComponents';
import { wrappingElementComment } from '@compassion-design-system/core/src/utils/wrapComponents';

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

const iconPositionArgTypes = {
  control: { type: 'select' },
  options: ['start', 'end'],
};

const iconDescriptionArgType = { control: 'text' };

const iconArgTypes = {
  control: { type: 'select' },
  options: Object.keys(cdsIconMap).sort(),
};

const showLabelArgTypes = {
  control: { type: 'select' },
  options: [true, false],
};

export const Default = { args: { label: 'Button Label' } };

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
    icon: iconArgTypes,
    iconDescription: iconDescriptionArgType,
    iconPosition: iconPositionArgTypes,
    showLabel: showLabelArgTypes,
  },
};

export const Kinds = (args) => (
  <div className={wrappingElementClass} data-comment={wrappingElementComment}>
    <Button label="Default" />
    <Button label="CTA" kind="cta" />
    <Button label="White" kind="white" />
    <Button label="Inverted" kind="inverted" />
    <Button label="Destructive" kind="destructive" />
  </div>
);

export const Emphasis = (args) => (
  <div className={wrappingElementClass} data-comment={wrappingElementComment}>
    <Button label="Primary" emphasis="primary" />
    <Button label="Secondary" emphasis="secondary" />
    <Button label="Tertiary" emphasis="tertiary" />
  </div>
);

export const Size = (args) => (
  <div className={wrappingElementClass} data-comment={wrappingElementComment}>
    <Button label="Small" size="small" />
    <Button label="Medium" size="medium" />
    <Button label="Large" size="large" />
  </div>
);

export const State = (args) => (
  <div className={wrappingElementClass} data-comment={wrappingElementComment}>
    <Button label="Disabled" disabled />
  </div>
);

export const WithIcon = (args) => (
  <div className={wrappingElementClass} data-comment={wrappingElementComment}>
    <Button label="Icon Start" icon="compass" />
    <Button label="Icon End" icon="arrowRight" iconPosition="end" />
    <Button label="Confirm choices" icon="check" showLabel={false} />
  </div>
);
