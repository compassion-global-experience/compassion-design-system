import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as styles from './ProgressBar.module.css';

const Range = (props) => {
  return (
    // render current the filled range of progress bar along its width
    <div className="range" style={{ width: `${props.percentRange}%` }} />
  );
};

const PB = (props) => {
  return (
    <div className="progress-bar">
      {/* render available progress bar’s limit */}
      <Range percentRange={props.percentRange} />
    </div>
  );
};

export const ProgressBar = ({ primary, size, label, ...props }) => {
  const [percentRange, setProgress] = useState(0);

  return (
    <div className="container">
      <PB percentRange={percentRange} />
      <div className="toggle-buttons">
        <button
          onClick={() => setProgress(percentRange > 0 ? percentRange - 20 : 0)}
        >
          Back
        </button>
        <button
          onClick={() =>
            setProgress(percentRange < 100 ? percentRange + 20 : 100)
          }
        >
          Next
        </button>
        <button onClick={() => setProgress(0)}>Start Over</button>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Menu contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
