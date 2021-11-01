import { css } from '@emotion/react';

const maxWidthPartial = (maxWidth) => {
  return (
    maxWidth &&
    css`
      --gds-center-measure: ${maxWidth};
      max-width: var(--gds-center-measure);
    `
  );
};

const gutterPartial = (gutter) => {
  return (
    gutter &&
    css`
      box-sizing: content-box;
      padding-right: ${gutter};
      padding-left: ${gutter};
    `
  );
};

const intrinsicallyCenterPartial = (intrinsicallyCenter) => {
  return (
    intrinsicallyCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `
  );
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
