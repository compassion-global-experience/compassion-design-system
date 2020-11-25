import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as progressBarStyles from './ProgressBar.styles';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export const ProgressBar = ({ primary, size, label, ...props }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div css={progressBarStyles.progressBarContainer}>
        <button
          onClick={onClick}
          css={progressBarStyles.progressBarTrigger}
          aria-haspopup="listbox"
          aria-labelledby="exp_elem exp_button"
          id="exp_button"
        >
          <span css={progressBarStyles.label}>Progress Bar</span>
        </button>
        <nav
          ref={dropdownRef}
          css={progressBarStyles.progressBar({ isActive })}
        >
          <ul
            id="exp_elem_list"
            tabindex="-1"
            role="listbox"
            aria-labelledby="exp_elem"
          >
            <li id="exp_elem_Mg" role="option">
              <a href="#">Messages</a>
            </li>
            <li id="exp_elem_Sv" role="option">
              <a href="#">Saved</a>
            </li>
            <li id="exp_elem_Ab" role="option">
              <a href="#">About</a>
            </li>
            <li id="exp_elem_Lg" role="option">
              <a href="#">Languages</a>
            </li>
            <li id="exp_elem_St" role="option">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
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
   * Progress Bar contents
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
