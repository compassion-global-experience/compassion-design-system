/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './Image';

export default {
  title: 'Global Design System/Image',
  args: {
    label: 'Image',
    src: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=100',
    srcPreview:
      'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=100',
    srcSet: '',
    sizes: '',
    alt: 'Arkansas is great.',
    caption: '',
    isLazyLoaded: true,
    width: '500px',
    maxWidth: '',
    height: '500px',
    maxHeight: '',
    objectFit: 'cover',
    objectPosition: '',
  },
};

export const Primary = ({
  src,
  srcPreview,
  srcSet,
  sizes,
  alt,
  caption,
  isLazyLoaded,
  width,
  maxWidth,
  height,
  maxHeight,
  objectFit,
  objectPosition,
}) =>
  html`<gds-image
    src=${src}
    srcPreview=${srcPreview}
    srcSet=${srcSet}
    sizes=${sizes}
    alt=${alt}
    .caption=${caption}
    ?isLazyLoaded=${isLazyLoaded}
    width=${width}
    .maxWidth=${maxWidth}
    .height=${height}
    .maxHeight=${maxHeight}
    .objectFit=${objectFit}
    .objectPosition=${objectPosition}
  />`;
