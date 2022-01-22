import PropTypes from 'prop-types';
import React from 'react';

import { cx } from '@emotion/css';

import { Frame } from '../Frame';
import { Stack } from '../Stack';

import cardStyles from './Card.styles';

export const Card = ({
  renderAs,
  padding,
  className,
  image,
  border,
  backgroundColor,
  children,
  ...props
}) => {
  const { El, isClickable, elementClass, type } = getRenderElement(renderAs);
  const NestedEl = image ? Stack : React.Fragment;

  return (
    <El
      css={cardStyles({
        isClickable,
        padding,
        border,
        backgroundColor,
      })}
      className={cx('gds-card', elementClass)}
      type={type}
      {...props}
    >
      <NestedEl>
        <Stack className="gds-card__body">{children}</Stack>
        {/* If CTA text, render button and make button—not card—focusable. */}
        {/* If no CTA text, whole card will have focused appearance */}
        {Boolean(image) && (
          <Frame className={cx('gds-card__image', className)}>{image}</Frame>
        )}
      </NestedEl>
    </El>
  );
};

const getRenderElement = (renderAs) => {
  if (renderAs === 'anchor') {
    return {
      El: 'a',
      isClickable: true,
      elementClass: 'gds-card--anchor',
    };
  }

  if (renderAs === 'button') {
    return {
      El: 'button',
      isClickable: true,
      elementClass: 'gds-card--button',
      type: 'button',
    };
  }

  return {
    El: 'div',
    isClickable: false,
  };
};

Card.propTypes = {
  renderAs: PropTypes.oneOf(['div', 'anchor', 'button']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  /**
   * A CDS [`Frame` component](/?path=/docs/components-layout-components-frame--basic),
   * [`Image` component](/?path=/docs/components-image--primary) component or a
   * standard `img` element.
   */
  image: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  backgroundColor: PropTypes.oneOf(['white', 'gray', 'transparent']),
  border: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
  renderAs: 'div',
  href: null,
  onClick: null,
  padding: `sm`,
  image: undefined,
  border: true,
  backgroundColor: `white`,
};
