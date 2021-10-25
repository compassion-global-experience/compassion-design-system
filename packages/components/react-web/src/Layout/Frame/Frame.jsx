import PropTypes from 'prop-types';


import { cx, css } from '@emotion/css';

import frameStyles from './Frame.styles';

export const Frame = ({ ratio, objectPosition, children, ...props }) => {
  const matches = ratio && ratio !== null ? ratio.match(/(\d+):(\d+)/) : null;

  const [denominator, numerator] =
    matches && matches.length > 0 ? matches.slice(1) : [undefined, undefined];

  return (
    <div
      css={frameStyles({ denominator, numerator, objectPosition })}
      className={`gds-frame ${props.className ? props.className : ''}`}
      {...props}
    >
       {children}
    </div>
  );
};

Frame.propTypes = {
  ratio: PropTypes.string,
  objectPosition: PropTypes.string,
};

Frame.defaultProps = { ratio: '1:1', objectPosition: `center` };
