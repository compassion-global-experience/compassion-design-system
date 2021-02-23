import { css } from '@emotion/core';

const justifyContentPartial = (justifyContent) => {
  return justifyContent === 'flex-start'
    ? css``
    : css`
        justify-content: ${justifyContent};
      `;
};

const alignItemsPartial = (alignItems) => {
  return alignItems === 'flex-start'
    ? css``
    : css`
        align-items: ${alignItems};
      `;
};

export default (theme) => {
  return css`
    --gds-cluster-space: ${theme.space === `0` ? `0px` : theme.space};
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
