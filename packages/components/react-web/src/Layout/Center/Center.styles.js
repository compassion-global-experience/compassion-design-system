import { css } from '@emotion/react';

const maxWidthPartial = (maxWidth) => {
  return maxWidth !== 0
    ? css`
        --gds-center-measure: ${maxWidth};
        max-width: var(--gds-center-measure);
      `
    : css``;
};

const gutterPartial = (gutter) => {
  return gutter !== 0
    ? css`
        box-sizing: content-box;
        padding-right: ${gutter};
        padding-left: ${gutter};
      `
    : css``;
};

const intrinsicallyCenterPartial = (intrinsicallyCenter) => {
  return intrinsicallyCenter
    ? css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `
    : css``;
};

export default (theme) => {
  return css`
    margin-right: auto;
    margin-left: auto;

    ${gutterPartial(theme.gutter)};
    ${maxWidthPartial(theme.maxWidth)};
    ${intrinsicallyCenterPartial(theme.intrinsicallyCenter)};
  `;
};
