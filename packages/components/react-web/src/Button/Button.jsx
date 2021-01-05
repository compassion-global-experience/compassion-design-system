import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { cx } from 'emotion';
import buttonStyles from './Button.styles';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  size,
  type,
  label,
  disabled,
  onClick,
  length = 350,
  ...props
}) => {
  const theme = useTheme();

  const [showLess, setShowLess] = useState(true);

  const text =
    'Hello World! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc eu sem pharetra vulputate ut quis sapien. Mauris tellus dui, imperdiet volutpat sem placerat, ornare tempus ipsum. Vivamus mattis tempor ultricies. In malesuada et odio sed dictum. Donec et justo suscipit, aliquet turpis et, interdum turpis. Suspendisse in velit aliquam ex vehicula pulvinar. Nam quis ex elementum, fringilla diam eu, dictum sem. Curabitur quis imperdiet elit. Nunc vulputate dictum turpis, ut aliquet enim sodales vitae. Ut nulla tortor, faucibus nec est at, tincidunt pulvinar ipsum. Phasellus vitae eros vestibulum, tristique urna eleifend, sagittis dolor. Donec dictum ullamcorper ullamcorper. Nunc elementum euismod accumsan. Aenean cursus lacus at tempus vestibulum. Phasellus enim sem, dapibus vitae nunc id, volutpat maximus mauris. Vestibulum egestas ligula in nibh molestie varius. Nulla facilisi. Maecenas finibus auctor vestibulum. Aliquam venenatis fringilla cursus. Maecenas interdum sed arcu gravida consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse gravida semper lacus sit amet fermentum. Etiam ut sapien vehicula, sodales elit vestibulum, vehicula metus. Praesent e lacinia eros. Maecenas pharetra risus vel urna aliquam, mollis viverra elit tincidunt.';

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <React.Fragment>
      {type === 'readmore' && (
        <React.Fragment>
          <p>{showLess ? `${text.slice(0, length)}...` : text} </p>
          <button onClick={() => setShowLess(!showLess)}>
            Read {showLess ? 'More' : 'Less'}
          </button>
        </React.Fragment>
      )}

      {type === 'readmore' ? null : (
        <button
          type="button"
          css={buttonStyles(theme.component.button)}
          className={cx(
            { 'button--primary': primary },
            { [`button--${size}`]: size }
          )}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {label}
        </button>
      )}
    </React.Fragment>
  );
};

Button.propTypes = {
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
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Type of input
   */
  type: PropTypes.oneOf(['readmore']),
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  disabled: false,
  onClick: undefined,
};
