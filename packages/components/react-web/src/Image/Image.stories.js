import React from 'react';
import { Image } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src:
    'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=100',
  srcSet: null,
  sizes: null,
  alt: "Sunset behind Hawk's Bill Crag in Newtown County, Arkansas.",
  caption: null,
  isLazyLoaded: false,
  width: '500px',
  maxWidth: null,
  height: '500px',
  maxHeight: null,
  objectFit: 'cover',
  objectPosition: null,
};
