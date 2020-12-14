import React from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as progressBarStyles from './ProgressBar.styles';

export const ProgressBar = ({ value, color, size }) => {
  let progress = value;
  if (value < 0) progress = 0;
  else if (value > 100) progress = 100;

  return (
    <div
      css={progressBarStyles.progressBar}
      className={cx({ [`progress--${size}`]: size })}
    >
      <div
        css={progressBarStyles.range(color)}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label={`${progress}%`}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
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
  /**
   * How large should the bar be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ProgressBar.defaultProps = {
  color: '#0948aa',
  size: 'medium',
};
