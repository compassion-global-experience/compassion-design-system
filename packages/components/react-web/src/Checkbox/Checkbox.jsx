import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as checkboxStyles from './Checkbox.styles';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ primary, size, label, ...props }) => {
  return (
    <form>
      <label>
        Placeholder for checkbox:
        <input
          type="checkbox"
          placeholder={label}
          css={checkboxStyles.checkboxStyles}
          className={cx(
            { 'button--primary': primary },
            { [`button--${size}`]: size }
          )}
          {...props}
        ></input>
      </label>
    </form>
  );
};

Checkbox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
