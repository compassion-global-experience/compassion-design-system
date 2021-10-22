import PropTypes from 'prop-types';


import { cx } from '@emotion/css';
import inlineIcon from './InlineIcon.module.css';

export const InlineIcon = ({ vertical, ...props }) => {
  return (
    <span
      css={inlineIcon}
      className={cx(
        'gds-icon--inline',
        vertical ? `gds-icon--inline--vertical` : null
      )}
      {...props}
    >
      {props.children}
    </span>
  );
};

InlineIcon.propTypes = {
  vertical: PropTypes.bool,
};

InlineIcon.defaultProps = {
  vertical: false,
};
