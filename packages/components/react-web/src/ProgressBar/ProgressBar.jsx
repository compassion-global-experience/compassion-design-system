import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as progressBarStyles from './ProgressBar.styles';

export const ProgressBar = () => {
  const [percentRange, setProgress] = useState(0);

  return (
    <div className="container">
      <div css={progressBarStyles.progressBar}>
        <div
          css={progressBarStyles.range}
          style={{ width: `${percentRange}%` }}
        />
      </div>
      <div css={progressBarStyles.toggleButtons}>
        <button
          type="button"
          onClick={() => setProgress(percentRange > 0 ? percentRange - 20 : 0)}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() =>
            setProgress(percentRange < 100 ? percentRange + 20 : 100)
          }
        >
          Next
        </button>
        <button type="button" onClick={() => setProgress(0)}>
          Start Over
        </button>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {};

ProgressBar.defaultProps = {};
