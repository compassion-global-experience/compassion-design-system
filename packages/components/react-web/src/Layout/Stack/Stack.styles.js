import { css } from '@emotion/core';

const splitAfterPartial = (splitAfter) => {
  if (splitAfter !== undefined) {
    if (splitAfter > 0) {
      return css`
        & > :nth-of-type(${splitAfter}) {
          margin-bottom: auto;
        }
      `;
    }
    const oooooo = css`
      & > :nth-last-of-type(-n + ${splitAfter * -1}) {
        margin-top: auto;
      }
    `;

    return oooooo;
  }
  return css``;
};

export default (theme) => {
  return css`
    --gds-stack-space: ${theme.space};
    --gds-stack-split-after: ${theme.splitAfter};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * {
      margin-top: 0;
      margin-bottom: 0;
    }

    & > * + * {
      margin-top: var(--gds-stack-space);
    }

    &:only-child {
      height: 100%;
    }

    ${splitAfterPartial(theme.splitAfter)};
  `;
};
