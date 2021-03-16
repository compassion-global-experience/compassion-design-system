import React from 'react';
import '../global.css';

import { Image } from './Image';

export default {
    title: 'Global Design System/Image',
    component: Image,
    argTypes: {}
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    src375: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=375',
    alt: 'A plane flies over an awesome bay'
};