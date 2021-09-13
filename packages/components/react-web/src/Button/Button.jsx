import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import buttonStyles from './Button.styles';
import { useTheme } from '../hooks';

/**
 * The Button component should be used to direct a user's attention to specific
 * actions.
 *
 * Use a **primary Button** to indicate a preferred action, or a default action
 * if only one option is present. Omit the `primary` prop to add a secondary
 * Button for non-default or destructive actions. Strive to only have one
 * primary Button per page, and never use multiple primary Buttons within the
 * same logical area.
 *
 * Note that for proper accessibility, Buttons should _modify information_ on
 * the page; if a Button triggers navigation, it should be rendered as a link
 * instead. To do this, add the `asLink` prop and give the component a proper
 * `href` attribute.
 */
export const Button = ({
  primary,
  size,
  label,
  disabled,
  asLink,
  onClick,
  ...props
}) => {
  const theme = useTheme();

  return !asLink ? (
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
      {label || props.children}
    </button>
  ) : (
    <a
      href={props.href}
      css={buttonStyles(theme.component.button)}
      className={cx(
        { 'button--link': true },
        { 'button--primary': primary },
        { [`button--${size}`]: size }
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label || props.children}
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the Button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Specifies the Button text.
   */
  label: PropTypes.string.isRequired,
  /**
   * Indicates if the Button should be disabled.
   */
  disabled: PropTypes.bool,
  asLink: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  disabled: false,
  asLink: false,
  onClick: undefined,
};
