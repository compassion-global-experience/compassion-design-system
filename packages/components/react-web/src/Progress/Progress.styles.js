import { css } from '@emotion/core';

export const progress = (theme) => {
  return css`
    overflow: hidden;
    width: 350px;
    height: 20px;
    height: ${theme.base.height};
    border: ${theme.base.border};
    border-radius: ${theme.base.borderRadius};
    box-shadow: ${theme.base.boxShadow};

    &.progress--small {
      height: ${theme.small.height};
    }

    &.progress--large {
      height: ${theme.large.height};
    }
  `;
};

export const range = (theme) => {
  return css`
    height: 100%;
    border-radius: ${theme.range.borderRadius};
    background: ${theme.range.background};
  `;
};
