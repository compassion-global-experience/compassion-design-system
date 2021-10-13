import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import inlineIcon from './InlineIcon.module.css';
import { useTheme } from '../hooks';

export const InlineIcon = ({ vertical, ...props }) => {
  const theme = useTheme();

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
