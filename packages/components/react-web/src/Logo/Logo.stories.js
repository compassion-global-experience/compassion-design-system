import React from 'react';
import { Logo } from './Logo';

import LogoDocs from './Logo.docs.mdx';

export default {
  title: 'Elements/Logo',
  component: Logo,
  argTypes: {},
  parameters: {
    docs: {
      page: LogoDocs,
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MinimalVariant = Template.bind({});
MinimalVariant.args = { color: `brand`, style: `minimal` };
