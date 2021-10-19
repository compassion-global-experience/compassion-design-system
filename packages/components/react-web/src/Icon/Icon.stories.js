import React from 'react';

import IconSkippy from './icons/IconSkippy';
import IconGlobe from './icons/IconGlobe';
import IconDocs from './Icon.docs.mdx';
import IconHome from './icons/IconHome';
import IconPin from './icons/IconPin';

import { InlineIcon as IWT } from './InlineIcon';

export default {
  title: 'Elements/Icon',
  component: IconSkippy,
  args: {},
  parameters: {
    docs: {
      page: IconDocs,
    },
  },
};

export const IconProps = (args) => <IconSkippy width="2rem" />;

export const IconColor = (args) => (
  <>
    <section>
      <span style={{ color: '#b52c2c' }}>
        <IconPin width="2rem" />
      </span>
    </section>
  </>
);

export const MeaningfulIcon = (args) => <IconSkippy width="2rem" role="img" />;

export const InlineIcon = (args) => (
  <>
    <IWT>
      Hello world
      <IconGlobe aria-hidden="true" />
    </IWT>
    &nbsp;
    <IWT vertical>
      <IconGlobe aria-hidden="true" color="#0948aa" />
      Hello world
    </IWT>
  </>
);

export const ActionIcon = (args) => (
  <a href="/">
    <IconHome aria-label="Go to the home page" role="img" width="2rem" />
  </a>
);
