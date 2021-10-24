import React from 'react';
import PropTypes from 'prop-types';
import { color as gdsColors } from '@compassion-gds/elements';

import LogoFull from './logos/LogoFull';
import LogoMinimal from './logos/LogoMinimal';



export const Logo = ({ style, color, width }) => {
  let colorVal;

  if (color === 'brand') {
    colorVal = gdsColors.primary.main;
  } else if (color === 'dark') {
    colorVal = gdsColors.black.main;
  } else {
    colorVal = gdsColors.white.main;
  }

  if (style === 'full') {
    return <LogoFull fill={colorVal} width={width}></LogoFull>;
  } else {
    return <LogoMinimal fill={colorVal} width={width}></LogoMinimal>;
  }
};

Logo.propTypes = {
  style: PropTypes.oneOf(['full', 'minimal']),
  /**
   * `fill` value of Logo.
   */
  color: PropTypes.oneOf(['brand', 'dark', 'light']),
  /** May be any CSS width value. */
  width: PropTypes.string,
};

Logo.defaultProps = {
  style: 'full',
  color: 'brand',
  width: '100%',
};
