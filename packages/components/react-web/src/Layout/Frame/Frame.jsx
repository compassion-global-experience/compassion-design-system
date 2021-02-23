import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import frameStyles from './Frame.styles';

export const Frame = ({ ratio, objectPosition, ...props }) => {
  const matches = ratio && ratio !== null ? ratio.match(/(\d+):(\d+)/) : null;

  const [denominator, numerator] =
    matches && matches.length > 0 ? matches.slice(1) : [undefined, undefined];

  return (
    <div
      css={frameStyles({ denominator, numerator, objectPosition })}
      className="gds-frame"
    >
      {props.children}
    </div>
  );
};

Frame.propTypes = {
  ratio: PropTypes.string.isRequired,
  objectPosition: PropTypes.string,
};

Frame.defaultProps = { objectPosition: `center` };
