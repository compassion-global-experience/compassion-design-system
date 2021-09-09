import React from 'react';
import { flags } from '@compassion-gds/elements';
import FlagDocs from './Flag.docs.mdx';
import FlagAustralia from './PartnerCountries/FlagAustralia';

import { ProgramCountries, PartnerCountries } from './index';

export default {
  title: 'Components/Flag',
  component: FlagAustralia,
  args: {
    programFlags: Object.keys(flags.programCountries),
    partnerFlags: Object.keys(flags.partnerCountries),
  },
  parameters: {
    docs: {
      page: FlagDocs,
    },
  },
};
export const Sizing = (args) => (
  <>
    <FlagAustralia height="4rem" />
    <FlagAustralia height="7vw" />
    <FlagAustralia height="calc(4rem * 2)" />
    <FlagAustralia width="8ch" />
    <FlagAustralia width="1em" />
  </>
);

export const ProgramFlags = (args) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
    {args.programFlags.map((name) => {
      const flagName = `Flag${name[0].toUpperCase()}${name.substr(1)}`;
      const Flag = ProgramCountries[flagName];

      return (
        <li
          key={name}
          style={{ width: 222, display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <Flag width="2em" height="2em" /> <span>{name}</span>
        </li>
      );
    })}
  </ul>
);

export const PartnerFlags = (args) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
    {args.partnerFlags.map((name) => {
      const flagName = `Flag${name[0].toUpperCase()}${name.substr(1)}`;
      const Flag = PartnerCountries[flagName];

      return (
        <li
          key={name}
          style={{ width: 222, display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <Flag width="2em" height="2em" /> <span>{name}</span>
        </li>
      );
    })}
  </ul>
);
