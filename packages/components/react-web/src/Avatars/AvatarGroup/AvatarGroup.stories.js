import React from 'react';
import { Avatar } from '../Avatar';
import { AvatarGroup } from './AvatarGroup';

import AvatarGroupDocs from './AvatarGroup.docs.mdx';

export default {
  title: 'Layouts/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    gapColor: { control: { type: 'color' } },
  },
  parameters: {
    docs: {
      page: AvatarGroupDocs,
    },
  },
};

export const Default = (args) => (
  <AvatarGroup {...args}>
    <Avatar abbreviation="AB" />
    <Avatar abbreviation="BC" />
    <Avatar abbreviation="CD" />
    <Avatar abbreviation="DE" />
    <Avatar abbreviation="EF" />
    <Avatar abbreviation="FG" />
  </AvatarGroup>
);
