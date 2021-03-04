import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { cx } from 'emotion';
import iconStyles from './Icon.styles';

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ ...props }) => {
  const theme = useTheme();

  return (
    <button type="button" css={iconStyles(theme.component.icon)}>
      Foo
    </button>
  );
};

Icon.propTypes = {};

Icon.defaultProps = {};
