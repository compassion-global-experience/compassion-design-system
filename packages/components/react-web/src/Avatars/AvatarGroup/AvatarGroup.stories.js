import React from 'react';
import { Avatar } from '../Avatar';
import { AvatarGroup } from './AvatarGroup';

import AvatarGroupDocs from './AvatarGroup.docs.mdx';

export default {
  title: 'Layouts/Avatars/AvatarGroup',
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
    <Avatar initials="AB" />
    <Avatar initials="BC" />
    <Avatar initials="CD" />
    <Avatar initials="DE" />
    <Avatar initials="EF" />
    <Avatar initials="FG" />
  </AvatarGroup>
);
