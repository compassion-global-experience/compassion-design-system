import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { helpers } from '@compassion-gds/elements';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import checkboxStyles from './Checkbox.styles';

/**
 * Checkbox form input
 */
export const Checkbox = ({ label, onChange, disabled, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange();
  };

  const id = props.id || `gds-${helpers.id()}`;
  const theme = useTheme().component.checkbox;

  return (
    <React.Fragment>
      <div className="checkbox__wrapper" css={checkboxStyles(theme)}>
        <input
          id={id}
          type="checkbox"
          {...props}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  /**
   * Optional; if not supplied, one will be generated to link the label and input.
   */
  id: PropTypes.string,
  /**
   * Label describing the Checkbox.
   */
  label: PropTypes.string.isRequired,
  /**
   * Is the Checkbox disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Function to execute when Checkbox is checked/unchecked.
   */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  onChange: undefined,
  disabled: false,
};
