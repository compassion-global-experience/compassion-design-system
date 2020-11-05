import { css } from '@emotion/core';

export const textFieldStyles = css`
  padding-right: 1rem;
  padding-left: 1rem;
  min-height: 44px;
  border: 1px solid #0948aa;
  background: #fff;
  color: #0948aa;
  font-family: unset;
  cursor: pointer;

  &.textField--small {
    min-height: 36px;
  }
`;
