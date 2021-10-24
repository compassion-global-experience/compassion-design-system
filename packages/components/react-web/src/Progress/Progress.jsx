import React from 'react';
import PropTypes from 'prop-types';


import { cx } from '@emotion/css';
import { useTheme } from '../hooks';

import * as progressStyles from './Progress.styles';

export const Progress = ({ value, size }) => {
  const theme = useTheme().component.progress;

  let progress = value;
  if (value < 0) progress = 0;
  else if (value > 100) progress = 100;

  return (
    <div
      css={progressStyles.progress(theme)}
      className={cx({
        [`progress--${size}`]: size !== 'medium',
      })}
    >
      <div
        css={progressStyles.range(theme)}
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

Progress.propTypes = {
  /**
   * Percentage of progress
   */
  value: PropTypes.number.isRequired,
  /**
   * How large should the indicator be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Progress.defaultProps = {
  size: 'medium',
};
