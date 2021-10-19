import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import listStyles from './List.styles';
import { useTheme } from '../hooks';

/**
 * UI component for lists.
 */
export const List = ({
  ordered,
  itemPadding,
  fullWidth,
  stripeColor,
  ...props
}) => {
  const theme = useTheme();
  const ElTag = `${ordered ? 'o' : 'u'}l`;

  return (
    <ElTag
      // `role="list"` is necessary for assistive tech to correctly announce
      // lists that have had default styles removed in Safari.
      role="list"
      className={cx(
        'gds-list',
        { [`gds-list--${itemPadding}`]: itemPadding },
        {
          [`gds-list--striped`]:
            stripeColor && stripeColor.toString().length > 0,
        },
        { [`gds-list--full-width`]: fullWidth }
      )}
      css={listStyles(theme.component.list, stripeColor)}
      {...props}
    >
      {props.children}
    </ElTag>
  );
};

List.propTypes = {
  /**
   * Are the list items arranged in a meaningful way?
   */
  ordered: PropTypes.bool,
  /**
   * How large should each list item be?
   */
  itemPadding: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   *  Expands the list to the width of its container when set.
   */
  fullWidth: PropTypes.bool,
  /**
   * Specify a CSS color to enable alternate-row striping.
   */
  stripeColor: PropTypes.string,
};

List.defaultProps = {
  ordered: false,
  itemPadding: 'small',
  fullWidth: false,
  stripeColor: null,
};
