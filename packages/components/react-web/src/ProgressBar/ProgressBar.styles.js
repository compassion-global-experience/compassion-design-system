import { css } from '@emotion/core';

export const progressBar = css`
  width: 350px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #bbb;
  overflow: hidden;
  box-shadow: 0 1px 2px #ccc inset;

  &.progress--small {
    height: 10px;
  }

  &.progress--medium {
    height: 15px;
  }

  &.progress--large {
    height: 20px;
  }
`;

export const range = (color) => css`
  background: ${color};
  height: 100%;
  border-radius: 0 50px 50px 0;
`;
