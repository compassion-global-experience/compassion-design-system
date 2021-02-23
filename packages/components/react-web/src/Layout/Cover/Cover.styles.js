import { css } from '@emotion/core';

export default (theme) => {
  return css`
    --gds-cover-space: ${theme.space === `0` ? `0px` : theme.space};
    --gds-cover-min-height: ${theme.minHeight};
    --gds-cover-padding: ${theme.padding ? theme.space : 0};

    display: flex;
    flex-direction: column;
    padding: var(--gds-cover-padding);
    min-height: var(--gds-cover-min-height);

    & > * {
      margin-top: var(--gds-cover-space);
      margin-bottom: var(--gds-cover-space);
    }

    & > :first-of-type:not(${theme.centeredSelector}) {
      margin-top: 0;
    }

    & > :last-child:not(${theme.centeredSelector}) {
      margin-bottom: 0;
    }

    & > ${theme.centeredSelector} {
      margin-top: auto;
      margin-bottom: auto;
    }
  `;
};
