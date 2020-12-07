import React from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as progressBarStyles from './ProgressBar.styles';

export const ProgressBar = ({ value, color }) => {
  let progress = value;
  if (value < 0) progress = 0;
  else if (value > 100) progress = 100;

  return (
    <div className="container">
      <div css={progressBarStyles.progressBar}>
        <div
          css={progressBarStyles.range(color)}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  /**
   * Percentage of progress
   */
  value: PropTypes.number.isRequired,
  /**
   * Fill color
   */
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  color: '#0948aa',
};
