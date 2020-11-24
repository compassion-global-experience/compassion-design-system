import { css } from '@emotion/core';

export const contentModal = css`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const content = css`
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  height: 100%;
  overflow-y: auto;
  padding: 20px;

  div:not([data-title]) + & {
    border-radius: 10px;
  }
`;

export const titleBar = css`
  background-color: #eee;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: flex-end;

  & > h1 {
    flex: 1;
    padding: 20px;
  }

  & > button {
    background: no-repeat center / 60%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 50 50'%3E%3Cpath d='M 10,10 L 30,30 M 30,10 L 10,30' stroke='%23111' stroke-linecap='round' stroke-width='6'%3E%3C/path%3E%3C/svg%3E");
    height: 50px;
    width: 50px;
  }

  &:not([data-title]) {
    background-color: transparent;
    margin: 0 -16px -8px 0;
    filter: brightness(100);
  }
`;
