import React from 'react';
import './Card.stories.css';

import { Card } from './Card';

export default {
  title: 'Components/Layout Components/Card',
  component: Card,
};

const BasicTemplate = (args) => (
  <Card {...args}>
    <h3>Use whatever heading level is appropriate for your context!</h3>
    <p>
      If this town name seems like two random syllables put together, it’s
      because that’s pretty much the case. Bow Mar, found in the Denver metro
      area, is named for two nearby lakes – Bowles Lake and Marston Lake – but
      only the first syllable of each spot was used.
    </p>
  </Card>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {
  padding: `md`,
};

const ImageCardTemplate = (args) => (
  <Card
    {...args}
    image={
      <img
        alt="Black canyon of the gunnison national park"
        src="https://source.unsplash.com/lTTt0px6zkM/1200x1600"
      />
    }
  >
    <h3>Use whatever heading level is appropriate for your context!</h3>
    <p>
      If this town name seems like two random syllables put together, it’s
      because that’s pretty much the case. Bow Mar, found in the Denver metro
      area, is named for two nearby lakes – Bowles Lake and Marston Lake – but
      only the first syllable of each spot was used.
    </p>
  </Card>
);

export const ImageCard = ImageCardTemplate.bind({});
ImageCard.args = {
  renderAs: `anchor`,
  href: `http://compassion.com`,
  padding: `md`,
};
