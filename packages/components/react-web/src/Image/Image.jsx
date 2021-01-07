import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { helpers } from '@compassion-gds/elements';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import { imageStyles } from './Image.styles';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

/**
 * Primary UI component for user Image
 */
export const Image = ({ type, size, label, validator, ...props }) => {
  const theme = useTheme().component.input;
  const [value, setValue] = useState('');

  const changePreview = (e) => {
    setValue(e.target.value);
  };

  return (
    <div css={imageStyles(theme)}>
      <button onClick={changePreview}>
        <img src={image1} alt="Image 1" value={value} />
      </button>
      <button onClick={changePreview}>
        <img src={image2} alt="Image 2" value={value} />
      </button>
      <button onClick={changePreview}>
        <img src={image3} alt="Image 3" value={value} />
      </button>
      <button onClick={changePreview}>
        <img src={image4} alt="Image 4" value={value} />
      </button>
      <button onClick={changePreview}>
        <img src={image5} alt="Image 5" value={value} />
      </button>
    </div>
  );
};

Image.propTypes = {
  /**
   * Type of Image
   */
  type: PropTypes.oneOf(['preview']),
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

Image.defaultProps = {
  type: 'text',
  size: 'medium',
  validator: undefined,
  required: false,
  disabled: false,
  onChange: undefined,
};
