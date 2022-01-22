import PropTypes from 'prop-types';

import { cx } from '@emotion/css';
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
  asLink,
  children,
  href,
  ...props
}) => {
  const theme = useTheme();
  const withSize = Boolean(size);

  return asLink ? (
    <a
      href={href}
      css={buttonStyles(theme.component.button)}
      className={cx(
        { 'button--link': true },
        { 'button--primary': primary },
        { [`button--${size}`]: withSize }
      )}
      {...props}
    >
      {label || children}
    </a>
  ) : (
    <button
      type="button"
      css={buttonStyles(theme.component.button)}
      className={cx(
        { 'button--primary': primary },
        { [`button--${size}`]: withSize }
      )}
      {...props}
    >
      {label || children}
    </button>
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
  /**
   * Does the Button trigger navigation? If so, it should be rendered as a link.
   */
  asLink: PropTypes.bool,
  /**
   * Does the Button trigger navigation? If so, the href is required.
   */
  href: (p) =>
    p.asLink &&
    !p.href &&
    new Error('"href" is required if you use button as link'),
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
  href: null,
  onClick: undefined,
};
