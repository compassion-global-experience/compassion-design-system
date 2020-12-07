import { css } from '@emotion/core';

export const progressBar = css`
  width: 350px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #bbb;
  margin-bottom: 20px;
`;

export const range = (color) => css`
  background: ${color};
  height: 100%;
  border-radius: inherit;
  transition: width 0.3s ease-in;
`;
