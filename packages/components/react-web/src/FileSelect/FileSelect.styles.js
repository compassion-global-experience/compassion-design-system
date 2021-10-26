import { css } from '@emotion/react';

export const fileSelectStyles = (theme) => {
  return css`
    display: inline-flex;
    font-size: ${theme.base.fontSize};
    align-items: center;

    input {
      display: none;
      visibility: hidden;
    }

    .file-select__summary {
      overflow: hidden;
      margin-right: 1em;
      margin-left: 1em;
      max-width: 250px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
};
