import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { helpers } from '@compassion-gds/elements';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import { inputStyles } from './Input.styles';

/**
 * Primary UI component for user input
 */
export const Input = ({ type, size, label, validator, ...props }) => {
  // State used for text input fields
  const [value, setValue] = useState('');
  // State used for radio buttons and checkboxes
  const [checked, setChecked] = useState(false);
  const [symbol, setSymbol] = useState('$');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());
  const inline = type === 'radio' || type === 'checkbox';

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(e.target.checked);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  const updateSymbol = (e) => {
    setSymbol(e.target.value);
  };

  const theme = useTheme().component.input;

  return (
    <div
      css={inputStyles(theme)}
      className={cx({
        [`input-group`]: true,
        [`input-group--inline`]: inline,
        [`input-group--error`]: errorMessage,
      })}
    >
      {type === 'currency' && (
        <div>
          <select onChange={updateSymbol}>
            <option value="$" data-placeholder="0.00" selected>
              USD
            </option>
            <option value="€" data-placeholder="0.00">
              EUR
            </option>
            <option value="¥" data-placeholder="0.00">
              JPY
            </option>
          </select>
          <span>
            <NumberFormat thousandSeparator prefix={symbol} />
          </span>
        </div>
      )}

      {type === 'currency' ? (
        ''
      ) : (
        <>
          <input
            id={props.id || inputId}
            type={type || 'text'}
            value={value}
            checked={checked}
            name={props.name || label}
            disabled={props.disabled}
            {...props}
            className={cx({
              [`input--${size}`]: size !== 'medium' ? size : null,
            })}
            aria-describedby={errorMessage ? errorId : null}
            onChange={handleChange}
          />
          <label htmlFor={props.id || inputId}>{label}</label>
          {errorMessage && !inline && (
            <small className="input-group__error-message" id={errorId}>
              {errorMessage}
            </small>
          )}
        </>
      )}
    </div>
  );
};

Input.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'password',
    'radio',
    'tel',
    'text',
    'currency',
  ]),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Descriptive label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
  /**
   * Optional; if not supplied, one will be generated to link the label and input.
   */
  // Disabling require-default-props because a default is generated within the component.
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Is the Input disabled?
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

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  validator: undefined,
  required: false,
  disabled: false,
  onChange: undefined,
};
