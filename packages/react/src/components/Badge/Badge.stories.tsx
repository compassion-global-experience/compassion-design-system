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
  <>
    <Badge label="Primary" status="primary" {...args} />
    <Badge label="Info" status="info" {...args} />
    <Badge label="Success" status="success" {...args} />
    <Badge label="Warning" status="warning" {...args} />
    <Badge label="Danger" status="danger" {...args} />
    <Badge label="Neutral" {...args} />
  </>
);

export const BorderRadius = (args) => (
  <>
    <Badge label="Rounded Badge" {...args} />
    <Badge label="Pill Badge" borderRadius="pill" {...args} />
  </>
);

export const WithIcon = (args) => (
  <>
    <Badge
      label="With iconPosition: end"
      icon="ph-arrow-right"
      iconPosition="end"
      {...args}
    />
    <Badge label="With iconPosition: start" icon="ph-warning" {...args} />
    <Badge label="" icon="ph-flag" {...args} />
  </>
);
