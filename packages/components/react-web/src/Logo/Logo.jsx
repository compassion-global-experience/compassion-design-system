import React from 'react';
import PropTypes from 'prop-types';
import { color as gdsColors } from '@compassion-gds/elements';

import LogoFull from './logos/LogoFull';
import LogoMinimal from './logos/LogoMinimal';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

export const Logo = ({ style, color, width }) => {
  let colorVal;

  if (color === 'brand') {
    colorVal = gdsColors.primary;
  } else if (color === 'dark') {
    colorVal = gdsColors.black;
  } else {
    colorVal = gdsColors.white;
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
