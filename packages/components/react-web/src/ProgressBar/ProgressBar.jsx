import React from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as progressBarStyles from './ProgressBar.styles';

export const ProgressBar = ({ primary, size, label, ...props }) => {
  return (
    <div className="container">
      <div css={progressBarStyles.menuContainer}>
        <button
          css={progressBarStyles.menuTrigger}
          aria-haspopup="listbox"
          aria-labelledby="exp_elem exp_button"
          id="exp_button"
        >
          <span css={progressBarStyles.label}>Menu</span>
        </button>
        <nav css={progressBarStyles.menu}>
          <ul
            id="exp_elem_list"
            tabIndex="-1"
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
