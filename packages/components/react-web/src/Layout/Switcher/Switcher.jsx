import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import switcherStyles from './Switcher.styles';

export const Switcher = ({ threshold, space, horizontalLimit, ...props }) => {
  return (
    <div
      css={switcherStyles({ threshold, space, horizontalLimit })}
      className="gds-switcher"
    >
      {props.children}
    </div>
  );
};

Switcher.propTypes = {
  /** A CSS width at which the component switches between horizontal and vertical layout. */
  threshold: PropTypes.string.isRequired,
  /** The max number of elements that may be present in a horizontal orientation. */
  horizontalLimit: PropTypes.number,
  /** The space between child elements. */
  space: PropTypes.string,
};

Switcher.defaultProps = {
  horizontalLimit: 9999,
  space: `1.5rem`,
};
