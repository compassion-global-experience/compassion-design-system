import { css } from '@emotion/react';

export default (theme, stripeColor) => {
  return css`
    --gds-list-item-padding: ${theme.base.itemPadding};
    --gds-list-stripe-color: ${stripeColor || theme.base.stripeColor};

    &.gds-list--small {
      > li {
        --gds-list-item-padding: ${theme.small.itemPadding};
      }
    }

    &.gds-list--large {
      > li {
        --gds-list-item-padding: ${theme.large.itemPadding};
      }
    }

    &.gds-list {
      display: inline-block;
      margin: 0;
      padding: 0;
      list-style-type: none;

      > li {
        padding: var(--gds-list-item-padding);
      }
    }

    &.gds-list--full-width {
      display: unset;
    }

    &.gds-list--striped {
      > li:nth-of-type(odd) {
        background: var(--gds-list-stripe-color);
      }
    }
  `;
};
