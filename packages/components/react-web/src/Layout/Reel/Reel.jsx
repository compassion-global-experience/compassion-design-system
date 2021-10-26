import PropTypes from 'prop-types';
import { useEffect } from 'react';

import reelStyles from './Reel.styles';

export const Reel = ({
  itemWidth,
  space,
  height,
  trackColor,
  thumbColor,
  hideScrollbar,
  children, 
  ...props
}) => {
  const classn = `gds-reel`;
  useEffect(() => {
    const reels = Array.from(document.querySelectorAll(`.${classn}`));
    const toggleOverflowClass = (elem) => {
      elem.classList.toggle(
        'gds-reel--overflowing',
        elem.scrollWidth > elem.clientWidth
      );
    };

    reels.forEach((reel) => {
      if ('ResizeObserver' in window) {
        new ResizeObserver((entries) => {
          toggleOverflowClass(entries[0].target);
        }).observe(reel);
      }

      if ('MutationObserver' in window) {
        new MutationObserver((entries) => {
          toggleOverflowClass(entries[0].target);
        }).observe(reel, { childList: true });
      }
    });
  });

  return (
    <div
      css={reelStyles({
        itemWidth,
        space,
        height,
        trackColor,
        thumbColor,
        hideScrollbar,
      })}
      className={classn}
      {...props}
    >
      {children}
    </div>
  );
};

Reel.propTypes = {
  itemWidth: PropTypes.string,
  space: PropTypes.string,
  height: PropTypes.string,
  trackColor: PropTypes.string,
  thumbColor: PropTypes.string,
  hideScrollbar: PropTypes.bool,
};

Reel.defaultProps = {
  itemWidth: `auto`,
  space: `1.5rem`,
  height: `auto`,
  trackColor: `#000`,
  thumbColor: `#fff`,
  hideScrollbar: false,
};
