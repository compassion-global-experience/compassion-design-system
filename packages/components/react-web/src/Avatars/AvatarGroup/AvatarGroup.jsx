import PropTypes from 'prop-types';

import { cx } from '@emotion/css';
import avatarGroupStyles from './AvatarGroup.styles';
import { useTheme } from '../../hooks';

export const AvatarGroup = ({ size, overlap, gapColor, shape, children, ...props }) => {
  const theme = useTheme();

  return (
    <div
      css={avatarGroupStyles(theme.component.avatarGroup, gapColor)}
      className={cx('avatar-group', {
        [`avatar-group--${size}`]: size !== AvatarGroup.defaultProps.size,
        [`avatar-group--${shape}`]: shape !== AvatarGroup.defaultProps.shape,
        [`avatar-group--overlap-${overlap}`]:
          overlap !== AvatarGroup.defaultProps.overlap,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

AvatarGroup.propTypes = {
  /**
   * The size of the Avatars in the group. **Note:** This prop will override any
   * `size` props specified on the individual Avatar components.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The amount of overlap among the Avatars in the group.
   */
  overlap: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  /**
   * A CSS color to apply to the gap between Avatars.
   */
  gapColor: PropTypes.string,
  /**
   * Display the Avatar as a circle, square, or with a `border-radius`.
   * **Note:** This prop will override any `size` props specified on the
   * individual Avatar components.
   */
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
};

AvatarGroup.defaultProps = {
  size: 'small',
  overlap: 'small',
  gapColor: '#fff',
  shape: 'circle',
};
