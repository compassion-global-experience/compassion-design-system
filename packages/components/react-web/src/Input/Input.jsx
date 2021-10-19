import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { helpers } from '@compassion-gds/elements';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from '../hooks';
// import CreditCard from './CreditCard';
// import Currency from './Currency';
import Edit from './Edit';
import { inputStyles } from './Input.styles';

/**
 * Form elements gather information from users via Inputs, Textareas, Selects,
 * Checkboxes, Radio buttons, and the like.
 *
 * For accessibility purposes, every instance of a form element must be
 * accompanied by a label, even if it’s visually hidden in the interface.
 */
export const Input = ({ type, size, label, disabled, validator, ...props }) => {
  // State used for text input fields
  const [value, setValue] = useState('');
  const [disable, setDisable] = useState(disabled);
  const [touched, setTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // State used for radio buttons and checkboxes
  const [checked, setChecked] = useState(false);

  const [inputId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());
  const inline = type === 'radio' || type === 'checkbox';

  const inputRef = useRef(null);

  useEffect(() => {
    if (disable === false && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disable]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(e.target.checked);
    if (validator && touched) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  const handleBlur = (e) => {
    if (type === 'edit') setDisable(!disable);
    setTouched(true);
    if (validator) setErrorMessage(validator(e.target.value));
  };

  const changeInputToEnabled = () => {
    setDisable(false);
  };

  const changeInputToDisabled = () => {
    if (type === 'edit') {
      setDisable(true);
    }
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
      {/* {type === 'creditcard' && (
        <CreditCard inputId={inputId} label={label} props={props} />
      )}
      {type === 'currency' && <Currency />} */}

      {/* {type === 'currency' || type === 'creditcard' ? null : ( */}
      {type === 'currency' || type === 'creditcard' ? null : (
        <React.Fragment>
          <input
            id={props.id || inputId}
            type={type || 'text'}
            value={value}
            checked={checked}
            disabled={disable}
            name={props.name || label}
            {...props}
            className={cx({
              [`input--${size}`]: size !== 'medium' ? size : null,
            })}
            aria-describedby={errorMessage ? errorId : null}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={inputRef}
          />

          <label htmlFor={props.id || inputId}>{label}</label>

          {type === 'edit' ? (
            <Edit
              type={type}
              label={label}
              props={props}
              inputId={inputId}
              disable={disable}
              inputRef={inputRef}
              changeInputToEnabled={changeInputToEnabled}
              changeInputToDisabled={changeInputToDisabled}
              onButtonClick={handleBlur}
            />
          ) : null}

          {errorMessage && !inline && (
            <small className="input-group__error-message" id={errorId}>
              {errorMessage}
            </small>
          )}
        </React.Fragment>
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
    'date',
    'edit',
    // 'currency',
    // 'creditcard',
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
  disabled: false,
  validator: undefined,
  required: false,
  onChange: undefined,
};
