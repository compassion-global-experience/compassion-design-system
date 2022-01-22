import React from 'react';

import IconSkippy from './icons/Skippy';
import IconGlobe from './icons/Globe';
import IconDocs from './Icon.docs.mdx';
import IconHome from './icons/Home';
import IconPin from './icons/Pin';

import { InlineIcon as IWT } from './InlineIcon';

export default {
  title: 'Elements/Icon',
  component: IconSkippy,
  parameters: {
    docs: {
      page: IconDocs,
    },
  },
};

export const IconProps = () => <IconSkippy width="2rem" />;

export const IconColor = () => (
  <>
    <section>
      <span style={{ color: '#b52c2c' }}>
        <IconPin width="2rem" />
      </span>
    </section>
  </>
);

export const MeaningfulIcon = () => <IconSkippy width="2rem" role="img" />;

export const InlineIcon = () => (
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

export const ActionIcon = () => (
  <a href="/">
    <IconHome aria-label="Go to the home page" role="img" width="2rem" />
  </a>
);
