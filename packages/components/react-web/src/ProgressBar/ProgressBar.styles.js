import { css } from '@emotion/core';

export const progressBar = (theme) => {
  return css`
    overflow: hidden;
    width: 350px;
    height: 20px;
    height: ${theme.base.height};
    border: ${theme.base.border};
    border-radius: ${theme.base.borderRadius};
    box-shadow: ${theme.base.boxShadow};

    &.progress-bar--small {
      height: ${theme.small.height};
    }

    &.progress-bar--large {
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
