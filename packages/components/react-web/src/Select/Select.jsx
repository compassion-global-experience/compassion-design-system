import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { helpers } from '@compassion-gds/elements';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import selectStyles from './Select.styles';

/**
 * Primary UI component for user interaction
 */
export const Select = ({ size, label, validator, ...props }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());

  const theme = useTheme().component.select;

  const handleChange = (e) => {
    setValue(e.target.value);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  return (
    <div className="select-group">
      <select
        id={props.id || selectId}
        css={selectStyles(theme)}
        value={value}
        name={props.name || label}
        disabled={props.disabled}
        aria-describedby={errorMessage ? errorId : null}
        onChange={handleChange}
        {...props}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <label htmlFor={props.id || selectId}>{label}</label>
    </div>
  );
};

Select.propTypes = {
  /**
   * How large should the select be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Select contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
  /**
   * Optional; if not supplied, one will be generated to link the label and select.
   */
  // Disabling require-default-props because a default is generated within the component.
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Is the Select disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional; if not supplied, the `name` attribute will be set to the same value as the label.
   */
  // Disabling require-default-props because a default name is assigned within the component if one isn't provided
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  size: 'medium',
  onClick: undefined,
  required: false,
  disabled: false,
  validator: undefined,
  onChange: undefined,
};
