import { css } from '@emotion/core';
import { color, typography } from '@compassion-gds/elements';
const { fonts, fontSizes } = typography;

export const fileSelectStyles = css`
  display: inline-flex;
  align-items: center;
  font-size: ${fontSizes.minus2};

  & > input {
    display: none;
  }

  & > button {
    background: ${color.primary};
    border: none;
    outline: none;
    padding: 8px;
    margin-right: 15px;
    color: ${color.white};
    font-family: ${fonts.sans};
    cursor: pointer;
  }

  & > span {
    max-width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
