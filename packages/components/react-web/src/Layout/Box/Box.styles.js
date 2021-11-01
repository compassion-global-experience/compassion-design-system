import { css } from '@emotion/react';

const paddingPartial = (padding) => {
  return css`
    --gds-box-padding: ${padding};
    padding: var(--gds-box-padding);
  `;
};

export default (theme) => {
  return css`
    ${paddingPartial(theme.padding)};

    & * {
      color: inherit;
    }
  `;
};
