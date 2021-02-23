import React from 'react';
import '../../global.css';

import { Center } from './Center';
import { Button } from '../../Button/Button';

export default {
  title: 'Global Design System/Layout/Center',
  component: Center,
};

const BasicTemplate = (args) => (
  <Center {...args}>
    <Button primary>Known, Loved, and Connected</Button>
  </Center>
);

export const Basic = BasicTemplate.bind({});
Basic.args = { intrinsicallyCenter: true };

const TextTemplate = (args) => (
  <Center {...args}>
    Globular star cluster courage of our questions two ghostly white figures in
    coveralls and helmets are softly dancing are creatures of the cosmos
    paroxysm of global death something incredible is waiting to be known.
    Permanence of the stars laws of physics billions upon billions with pretty
    stories for which there&apos;s little good evidence astonishment realm of
    the galaxies and billions upon billions upon billions upon billions upon
    billions upon billions upon billions.
  </Center>
);

export const Text = TextTemplate.bind({});
Text.args = { maxWidth: `55ch` };
