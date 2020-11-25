import { css } from '@emotion/core';

export const label = css`
  display: flex;
  align-items: center;

  input {
    margin-left: 16px;
  }
`;

export const checkboxStyles = css`
  padding-right: 1rem;
  padding-left: 1rem;
  min-height: 44px;
  border: 1px solid #0948aa;
  background: #fff;
  color: #0948aa;
  font-family: unset;
  cursor: pointer;

  &.checkbox--primary {
    background: #0948aa;
    color: #fff;
  }

  &.checkbox--large {
    min-height: 64px;
  }

  &.checkbox--small {
    min-height: 36px;
  }
`;
