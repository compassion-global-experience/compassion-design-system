import { css } from '@emotion/core';

export const imageStyles = (theme) => {
  return css`
    display: grid;

    img {
      width: 400px;
      height: auto;

      &:hover {
        cursor: pointer;
      }
    }
  `;
};
