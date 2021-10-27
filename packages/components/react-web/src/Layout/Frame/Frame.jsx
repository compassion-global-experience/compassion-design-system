import PropTypes from 'prop-types';

import frameStyles from './Frame.styles';

export const Frame = ({
  ratio,
  objectPosition,
  children,
  className,
  ...props
}) => {
  const matches = ratio && ratio !== null ? ratio.match(/(\d+):(\d+)/) : null;

  const [denominator, numerator] =
    matches && matches.length > 0 ? matches.slice(1) : [undefined, undefined];

  return (
    <div
      css={frameStyles({ denominator, numerator, objectPosition })}
      className={`gds-frame ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Frame.propTypes = {
  ratio: PropTypes.string,
  objectPosition: PropTypes.string,
  className: PropTypes.string,
};

Frame.defaultProps = {
  ratio: '1:1',
  objectPosition: `center`,
  className: null,
};
