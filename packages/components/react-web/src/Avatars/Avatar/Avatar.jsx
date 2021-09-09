import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import avatarStyles from './Avatar.styles';
import { useTheme } from '../../hooks';

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
  size,
  shape,
  image,
  abbreviation,
  color,
  ...props
}) => {
  const theme = useTheme();

  const withImage = !!image;

  return (
    <div
      css={avatarStyles(theme.component.avatar, color, withImage)}
      className={cx('avatar', {
        [`avatar--${size}`]: size !== Avatar.defaultProps.size,
        [`avatar--${shape}`]: shape !== Avatar.defaultProps.shape,
        [`avatar--image`]: image,
        [`avatar--abbreviation`]: abbreviation && !image,
      })}
      {...props}
    >
      {image || (abbreviation && abbreviation.toUpperCase())}
      {/* Image || Initials || Auto */}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * The size of the Avatar.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Display the Avatar as a circle, square, or with a `border-radius`.
   */
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
  /**
   * An abbreviation that represents the user or organization, typically
   * initials. **Note:** Overflowing content will be clipped.
   */
  abbreviation: PropTypes.string,
  /**
   * A CSS color for the background color of the Avatar. The component will
   * calculate an appropriately-contrasting text color from this value.
   */
  color: PropTypes.string,
  /**
   * The [Image component](/?path=/docs/components-image) to use for the Avatar.
   * If this is set, all other props are overridden except for the `color` prop.
   */
  image: PropTypes.element,
};

Avatar.defaultProps = {
  size: 'small',
  shape: 'circle',
  abbreviation: null,
  color: '#efefef',
  image: null,
};
