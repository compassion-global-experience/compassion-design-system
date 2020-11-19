import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as menuStyles from './Menu.module.css';
import { useDetectOutsideClick } from './useDetectOutsideClick';

/**
 * Primary UI component for user interaction
 */
export const Menu = ({ primary, size, label, ...props }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Menu</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Languages</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
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
