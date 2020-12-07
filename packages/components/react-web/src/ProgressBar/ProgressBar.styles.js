import { css } from '@emotion/core';

export const progressBar = css`
  width: 350px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #bbb;
  margin-bottom: 20px;
`;

export const range = css`
  background: limegreen;
  height: 100%;
  border-radius: inherit;
  transition: width 0.3s ease-in;
`;

export const toggleButtons = css`
  & > button {
    margin: 0 10px;
    padding: 7px 20px;
    border-radius: 5px;
    border: 1px solid #bbb;
    outline: 0;
    cursor: pointer;
  }

  & > button:hover {
    color: white;
    background: #ccc;
  }
`;
