import { css } from '@emotion/core';

export default (theme) => {
  return css`
    padding-right: 1em;
    padding-left: 1em;
    min-height: ${theme.base.minHeight};
    border: ${theme.base.border};
    background: ${theme.base.background};
    color: ${theme.base.color};
    font-family: unset;
    cursor: ${theme.base.cursor};

    &:hover {
      border-color: ${theme.base.hover.borderColor};
      background: ${theme.base.hover.background};
      color: ${theme.base.hover.color};
    }

    &.button--primary {
      background: ${theme.primary.background};
      color: ${theme.primary.color};

      &:hover {
        background: ${theme.primary.hover.background};
      }
    }

    &.button--large {
      min-height: ${theme.base.large.minHeight};
      font-size: ${theme.base.large.fontSize};
    }

    &.button--small {
      min-height: ${theme.base.small.minHeight};
      font-size: ${theme.base.small.fontSize};
    }
  `;
};
