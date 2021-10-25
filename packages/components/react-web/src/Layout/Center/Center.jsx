import PropTypes from 'prop-types';



import centerStyles from './Center.styles';

export const Center = ({ maxWidth, gutter, intrinsicallyCenter, children, ...props }) => {
  return (
    <div
      css={centerStyles({ maxWidth, gutter, intrinsicallyCenter })}
      className="gds-center"
      {...props}
    >
      {children}
    </div>
  );
};

Center.propTypes = {
  /** Any valid CSS width value. If text content, `60ch`-`70ch` is recommended. */
  maxWidth: PropTypes.string,
  /** Any valid CSS width value. */
  gutter: PropTypes.string,
  /** Center based on content-based widths. Useful for block-level elements or items with small natural widths. */
  intrinsicallyCenter: PropTypes.bool,
};

Center.defaultProps = {
  maxWidth: 0,
  gutter: 0,
  intrinsicallyCenter: false,
};
