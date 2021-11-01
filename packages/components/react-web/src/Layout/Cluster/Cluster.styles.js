import { css } from '@emotion/react';

const justifyContentPartial = (justifyContent) => {
  return (
    justifyContent !== 'flex-start' &&
    css`
      justify-content: ${justifyContent};
    `
  );
};

const alignItemsPartial = (alignItems) => {
  return (
    alignItems !== 'flex-start' &&
    css`
      align-items: ${alignItems};
    `
  );
};

export default (theme) => {
  return css`
    --gds-cluster-space: ${theme.space ?? '0'};
    overflow: hidden;

    & > * {
      display: flex;
      flex-wrap: wrap;

      ${justifyContentPartial(theme.justifyContent)}
      ${alignItemsPartial(theme.alignItems)}

      margin: calc(var(--gds-cluster-space) / 2 * -1);
    }

    & > * > * {
      margin: calc(var(--gds-cluster-space) / 2);
    }

    & > ul,
    & > ol {
      padding: 0;
      list-style-type: none;
    }
  `;
};
