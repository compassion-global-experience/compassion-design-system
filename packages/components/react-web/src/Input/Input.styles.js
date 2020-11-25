import { css } from '@emotion/core';
import { color, typography } from '@compassion-gds/elements';
const { fontSizes } = typography;

export const inputStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.error {
    color: ${color.error};

    & > span {
      padding-top: 4px;
      font-size: ${fontSizes.minus3};
    }

    & > input {
      border-color: ${color.error};
    }
  }

  &.inline {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

    & > label {
      padding-left: 8px;
      color: ${color.black};
    }
  }

  & > label {
    color: ${color.primary};
    font-size: ${fontSizes.minus2};
  }

  & > input {
    padding-right: 1rem;
    padding-left: 1rem;
    min-height: 44px;
    border: 1px solid ${color.primary};
    background: ${color.white};
    color: ${color.primary};
    font-family: unset;
    cursor: pointer;
  }

  & > input.input--small {
    min-height: 32px;
  }

  & > input.input--medium {
    min-height: 36px;
  }

  & > input.input--large {
    min-height: 40px;
  }
`;
