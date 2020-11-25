import { css } from '@emotion/core';

export const progressBarContainer = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const progressBarTrigger = css`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;

  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const label = css`
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  margin: 0 10px;
`;

export const progressBar = ({ isActive }) => css`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    border-bottom: 1px solid #dddddd;

    &::before {
      content: none;
    }
  }

  a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
}

  ${
    isActive === true &&
    `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    `
  }
`;
