import PropTypes from 'prop-types';

import frameStyles from './Frame.styles';

export const Frame = ({
  ratio,
  objectPosition,
  children,
  className,
  ...props
}) => {
  const [, denominator, numerator] = ratio.match(/(\d+):(\d+)/) ?? [];
  const classNames = ['gds-frame', className].filter(Boolean).join(' ');

  return (
    <div
      css={frameStyles({ denominator, numerator, objectPosition })}
      className={classNames}
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

Frame.defaultProps = { ratio: '1:1', objectPosition: `center` };
