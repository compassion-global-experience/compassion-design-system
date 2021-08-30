import React from 'react';
import { Thumbnail } from './Thumbnail';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

export default {
  title: 'Global Design System/Thumbnail',
  component: Thumbnail,
  argTypes: {},
};

const MOCKED_DATA = [
  {
    id: '1',
    title: 'Title1',
    img: image1,
  },
  {
    id: '2',
    title: 'Title2',
    img: image2,
  },
  {
    id: '3',
    title: 'Title3',
    img: image3,
  },
  {
    id: '4',
    title: 'Title4',
    img: image4,
  },
  {
    id: '5',
    title: 'Title5',
    img: image5,
  },
];

const Template = (args) => <Thumbnail {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: 'Preview',
  type: 'preview',
  data: MOCKED_DATA
};
