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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
  abbreviation: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.elementType,
};

Avatar.defaultProps = {
  size: 'small',
  shape: 'circle',
  abbreviation: null,
  color: '#efefef',
  image: null,
};
