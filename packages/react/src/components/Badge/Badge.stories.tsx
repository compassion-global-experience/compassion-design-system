import { Meta } from '@storybook/react';
import Badge from './Badge';
import { cdsIconMap } from '../Icon/Icon';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

export const Default = {
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    status: {
      control: { type: 'select' },
    },
    borderRadius: {
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(cdsIconMap).sort(),
    },
    iconPosition: {
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Badge',
  },
};

const Template = (args) => {
  return <Badge {...args} />;
};

export const Status = (args) => (
  <div
    className="cds-storybook__story__wrap"
    data-comment="The wrapping element is only used for Storybook layout and can be removed from your code."
  >
    <Badge label="Primary" status="primary" {...args} />
    <Badge label="Info" status="info" {...args} />
    <Badge label="Success" status="success" {...args} />
    <Badge label="Warning" status="warning" {...args} />
    <Badge label="Danger" status="danger" {...args} />
    <Badge label="Neutral" {...args} />
  </div>
);

export const BorderRadius = (args) => (
  <div
    className="cds-storybook__story__wrap"
    data-comment="The wrapping element is only used for Storybook layout and can be removed from your code."
  >
    <Badge label="Rounded Badge" {...args} />
    <Badge label="Pill Badge" borderRadius="pill" {...args} />
  </div>
);

export const WithIcon = (args) => (
  <div
    className="cds-storybook__story__wrap"
    data-comment="The wrapping element is only used for Storybook layout and can be removed from your code."
  >
    <Badge
      label="With iconPosition: end"
      icon="arrowRight"
      iconPosition="end"
      {...args}
    />
    <Badge label="With iconPosition: start" icon="warningOctagon" {...args} />
    <Badge label="" icon="eye" {...args} />
  </div>
);
