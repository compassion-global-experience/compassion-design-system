import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as menuStyles from './Menu.stories.js';

/**
 * Primary UI component for user interaction
 */
export const Menu = ({ primary, size, label, ...props }) => {
  return (
    <div class="listbox-area">
      <div class="left-area">
        <span id="exp_elem">Choose an element:</span>
        <div id="exp_wrapper">
          <button
            aria-haspopup="listbox"
            aria-labelledby="exp_elem exp_button"
            id="exp_button"
          >
            Neptunium
          </button>
          <ul
            id="exp_elem_list"
            tabindex="-1"
            role="listbox"
            aria-labelledby="exp_elem"
            class="hidden"
          >
            <li id="exp_elem_Np" role="option">
              Neptunium
            </li>
            <li id="exp_elem_Pu" role="option">
              Plutonium
            </li>
            <li id="exp_elem_Am" role="option">
              Americium
            </li>
            <li id="exp_elem_Cm" role="option">
              Curium
            </li>
            <li id="exp_elem_Bk" role="option">
              Berkelium
            </li>
            <li id="exp_elem_Cf" role="option">
              Californium
            </li>
            <li id="exp_elem_Es" role="option">
              Einsteinium
            </li>
            <li id="exp_elem_Fm" role="option">
              Fermium
            </li>
            <li id="exp_elem_Md" role="option">
              Mendelevium
            </li>
            <li id="exp_elem_No" role="option">
              Nobelium
            </li>
            <li id="exp_elem_Lr" role="option">
              Lawrencium
            </li>
            <li id="exp_elem_Rf" role="option">
              Rutherfordium
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the Menu be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Menu contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Menu.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
