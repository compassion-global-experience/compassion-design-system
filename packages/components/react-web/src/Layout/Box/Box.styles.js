import { css } from '@emotion/react';

const paddingPartial = (padding) => {
  return padding !== 0
    ? css`
        --gds-box-padding: ${padding === `0` ? `0px` : padding};
        padding: var(--gds-box-padding);
      `
    : css``;
};

export default (theme) => {
  return css`
    ${paddingPartial(theme.padding)};

    & * {
      color: inherit;
    }
  `;
};
