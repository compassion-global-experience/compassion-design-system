import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as menuStyles from './Menu.styles';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export const Menu = ({ primary, size, label, ...props }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div css={menuStyles.menuContainer}>
        <button onClick={onClick} css={menuStyles.menuTrigger}>
          <span css={menuStyles.label}>Menu</span>
        </button>
        <nav ref={dropdownRef} css={menuStyles.menu({ isActive })}>
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
