import { css } from '@emotion/core';

export const imageStyles = (theme) => {
  return css`
    display: grid;
    width: 400px;

    button {
      border: none;

      &:first-of-type {
        grid-row: 1;
        grid-column: 1/4;
        height: auto;
        width: 400px;
      }

      &:hover {
        cursor: pointer;
      }

      img {
        width: 100px;
        height: auto;
        grid-row: 2;
      }
    }
  `;
};
