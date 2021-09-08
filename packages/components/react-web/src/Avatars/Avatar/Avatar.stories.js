import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup } from '../AvatarGroup';

import AvatarDocs from './Avatar.docs.mdx';

import { Image } from '../../Image';

export default {
  title: 'Layouts/Avatars/Avatar',
  component: Avatar,
  argTypes: {
    color: { control: { type: 'color' } },
  },
  parameters: {
    docs: {
      page: AvatarDocs,
    },
  },
};

const imageComponent = (
  <Image
    alt="Arkansas is great."
    objectFit="cover"
    src="https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
    srcPreview="https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=100"
  />
);

export const Basic = (args) => (
  <Avatar initials="KA" color="#cc00ff" {...args} />
);

export const WithImage = (args) => <Avatar image={imageComponent} {...args} />;
