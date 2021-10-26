/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import image1 from '@compassion-gds/react-web/src/Thumbnail/assets/image1.jpg';
import image2 from '@compassion-gds/react-web/src/Thumbnail/assets/image2.jpg';
import image3 from '@compassion-gds/react-web/src/Thumbnail/assets/image3.jpg';
import image4 from '@compassion-gds/react-web/src/Thumbnail/assets/image4.jpg';
import image5 from '@compassion-gds/react-web/src/Thumbnail/assets/image5.jpg';

import './Thumbnail';

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

export default {
  title: 'Global Design System/Thumbnail',
  args: {
    data: MOCKED_DATA,
    onChange: action('On change handler'),
  },
};

export const Basic = ({ data, onChange }) => html`
  <gds-thumbnail .data=${data} .onChange=${onChange} />
`;
