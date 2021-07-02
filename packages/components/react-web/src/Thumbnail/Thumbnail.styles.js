import { css } from '@emotion/core';

export const thumbnailStyles = (theme) => {
  return css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img {
      width: 400px;
      height: auto;

      &:first-of-type {
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
      }

      &:hover {
        cursor: pointer;
      }
    }

    button {
      border: none;
      background: transparent;
      margin: 0 -6px;
    }
  `;
};
