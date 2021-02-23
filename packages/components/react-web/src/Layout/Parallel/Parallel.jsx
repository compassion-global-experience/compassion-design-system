import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import parallelStyles from './Parallel.styles';

export const Parallel = ({
  sideWidth,
  mainMinWidth,
  space,
  sideLocation,
  ...props
}) => {
  return (
    <div
      css={parallelStyles({ sideWidth, mainMinWidth, space, sideLocation })}
      className="gds-parallel"
    >
      {props.children}
    </div>
  );
};

Parallel.propTypes = {
  /** Any valid CSS width value. If empty, defaults to width of its contents. */
  sideWidth: PropTypes.string,
  /** A percentage indicating the narrowest the main content may be before wrapping. */
  mainMinWidth: PropTypes.string,
  /** The space between the sidebar and content. */
  space: PropTypes.string,
  /**  */
  sideLocation: PropTypes.oneOf(['left', 'right']),
};

Parallel.defaultProps = {
  sideWidth: undefined,
  mainMinWidth: `50%`,
  space: `1.5rem`,
  sideLocation: `left`,
};
