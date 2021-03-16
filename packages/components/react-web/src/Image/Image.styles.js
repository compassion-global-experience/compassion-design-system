import { css } from '@emotion/core';

export default css`
  display: inline-block;

  & > .image__img {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    background: #ddd;
    
    &--fit-cover {
      object-fit: cover;
    }

    &--fit-contain {
      object-fit: contain;
    }

    &--pos-top {
      object-position: top;
    }

    &--pos-center {
      object-position: center;
    }

    &--pos-bottom {
      object-position: bottom;
    }

    &--pos-right {
      object-position: right;
    }

    &--pos-left {
      object-position: left;
    }
  }

  & .image__caption {
    padding: .5rem;
    font-style: italic;
  }
`;
