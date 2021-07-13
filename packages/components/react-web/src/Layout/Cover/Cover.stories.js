import React from 'react';
import './Cover.stories.css';

import { Cover } from './Cover';
import { Cluster } from '../Cluster/Cluster';

export default {
  title: 'Global Design System/Layout/Cover',
  component: Cover,
};

const BasicTemplate = (args) => (
  <Cover {...args}>
    <div className="gds-cover__centered">
      <h1>Known, Loved, and Connected</h1>
    </div>
  </Cover>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};

const SimpleHeroTemplate = (args) => (
  <Cover {...args}>
    <Cluster justifyContent="flex-end">
      <ul>
        <li>Contact Us</li>
        <li>Donate Now</li>
      </ul>
    </Cluster>
    <div className="gds-cover__centered">
      <h1>Known, Loved, and Connected</h1>
      <small>How Compassion strives to serve its neighbors</small>
    </div>
    <div>Find out more</div>
  </Cover>
);

export const SimpleHero = SimpleHeroTemplate.bind({});
SimpleHero.args = {};
