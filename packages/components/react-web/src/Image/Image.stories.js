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
    src: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=10',
    src375: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=375',
    src480: undefined,
    src728: undefined,
    src1280: undefined,
    src1600: undefined,
    alt: 'A plane flies over an awesome bay',
    title: undefined,
    caption: undefined,
    width: 500,
    height: 500,
    objectFit: 'cover',
    objectPositionX: undefined,
    objectPositionY: undefined,
    lazyLoad: false
};