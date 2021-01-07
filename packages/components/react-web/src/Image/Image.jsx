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
  const [selected, setSelected] = useState(image1);
  const [value, setValue] = useState(image1);

  const theme = useTheme().component.input;
  const data = [
    {
      id: '1',
      key: '1',
      title: 'Title1',
      text: 'Text1.',
      img: image1,
    },
    {
      id: '2',
      key: '2',
      title: 'Title2',
      text: 'Text2.',
      img: image2,
    },
    {
      id: '3',
      key: '3',
      title: 'Title3',
      text: 'Text3.',
      img: image3,
    },
    {
      id: '4',
      key: '4',
      title: 'Title4',
      text: 'Text4',
      img: image4,
    },
    {
      id: '5',
      key: '5',
      title: 'Title5',
      text: 'Text5',
      img: image5,
    },
  ];

  return (
    <div css={imageStyles(theme)}>
      <img src={selected} alt="Selected Image" />
      <button onClick={() => setSelected(image1)}>
        <img src={image1} value={value} />
      </button>
      <button onClick={() => setSelected(image2)}>
        <img src={image2} />
      </button>
      <button onClick={() => setSelected(image3)}>
        <img src={image3} />
      </button>
      <button onClick={() => setSelected(image4)}>
        <img src={image4} />
      </button>
      <button onClick={() => setSelected(image5)}>
        <img src={image5} />
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
