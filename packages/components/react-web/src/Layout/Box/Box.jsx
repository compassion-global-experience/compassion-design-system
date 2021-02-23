import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import boxStyles from './Box.styles';

export const Box = ({ padding, ...props }) => {
  return (
    <div css={boxStyles({ padding })} className="gds-box">
      {props.children}
    </div>
  );
};

Box.propTypes = {
  /** Any valid CSS padding value. */
  padding: PropTypes.string,
};

Box.defaultProps = {
  padding: `0`,
};
