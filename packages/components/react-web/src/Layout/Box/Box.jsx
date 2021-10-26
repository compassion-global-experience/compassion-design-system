import PropTypes from 'prop-types';

import boxStyles from './Box.styles';

export const Box = ({ padding, children, ...rest }) => {
  return (
    <div css={boxStyles({ padding })} className="gds-box" {...rest}>
      {children}
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
