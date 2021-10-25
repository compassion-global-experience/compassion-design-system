import React from 'react';
import PropTypes from 'prop-types';
import { color as gdsColors } from '@compassion-gds/elements';

import LogoFull from './logos/LogoFull';
import LogoMinimal from './logos/LogoMinimal';

export const Logo = ({ type, color, width }) => {
  let colorVal;

  if (color === 'brand') {
    colorVal = gdsColors.primary.main;
  } else if (color === 'dark') {
    colorVal = gdsColors.black.main;
  } else {
    colorVal = gdsColors.white.main;
  }

  if (type === 'full') {
    return <LogoFull fill={colorVal} width={width} />;
  }

  return <LogoMinimal fill={colorVal} width={width} />;
};

Logo.propTypes = {
  type: PropTypes.oneOf(['full', 'minimal']),
  /**
   * `fill` value of Logo.
   */
  color: PropTypes.oneOf(['brand', 'dark', 'light']),
  /** May be any CSS width value. */
  width: PropTypes.string,
};

Logo.defaultProps = {
  type: 'full',
  color: 'brand',
  width: '100%',
};
