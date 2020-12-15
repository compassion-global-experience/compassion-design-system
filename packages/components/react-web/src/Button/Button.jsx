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
  label,
  disabled,
  onClick,
  ...props
}) => {
  const theme = useTheme();

  return (
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
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  disabled: false,
  onClick: undefined,
};
