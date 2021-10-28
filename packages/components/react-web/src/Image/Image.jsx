import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Use the Image component to easily implement lazy-loading with low-quality
 * image placeholders.
 *
 * The Image component also supports the responsive `sizes` and `srcSet`
 * properties. _Best-practices documentation coming soon!_
 */

export const Image = ({
  src,
  srcPlaceholder,
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
  ...props
}) => {
  const ref = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(null);
  const isLazyLoadedLoaded = useRef(false);
  const currentSrcSet = useRef(null);

  useEffect(() => {
    let isLoaded = false;
    const { current } = ref;

    function setSrc() {
      if (srcPlaceholder) {
        setCurrentSrc(srcPlaceholder);

        const img = document.createElement('img');
        if (srcSet) {
          img.srcset = src;
        } else {
          img.src = src;
        }
        img.onload = () => {
          currentSrcSet.current = srcSet;
          setCurrentSrc(src);
        };

        isLoaded = true;
      } else {
        currentSrcSet.current = srcSet;
        setCurrentSrc(src);
        isLoaded = true;
      }
    }

    if (!isLoaded) {
      if (isLazyLoaded) {
        let observer = new IntersectionObserver((entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSrc();
              observer = observer.disconnect();
            }
          })
        );

        observer.observe(current);

        return () => (observer = observer && observer.disconnect());
      }
      setSrc();
    }
  }, [
    ref,
    src,
    srcPlaceholder,
    srcSet,
    isLazyLoaded,
    isLazyLoadedLoaded,
    currentSrcSet,
  ]);

  return (
    <figure className="gds-image" ref={ref} {...props}>
      <img
        className="gds-image__photo"
        src={currentSrc}
        sizes={sizes}
        srcSet={currentSrcSet.current}
        alt={alt}
        style={{
          width,
          maxWidth,
          height,
          maxHeight,
          objectFit,
          objectPosition,
        }}
      />
      {caption && (
        <figcaption className="gds-image__caption">{caption}</figcaption>
      )}
    </figure>
  );
};

Image.defaultProps = {
  src: null,
  srcPlaceholder: null,
  srcSet: null,
  sizes: null,
  caption: null,
  isLazyLoaded: true,
  width: null,
  maxWidth: null,
  height: null,
  maxHeight: null,
  objectFit: null,
  objectPosition: null,
};

Image.propTypes = {
  /**
   * The highest-quality image source you wish to be displayed. The
   * responsive `srcSet` or `sizes` attributes can be provided to ensure proper
   * image quality for the viewport widths they specify.
   */
  src: PropTypes.string,
  /**
   * A low-quality version of the image to be used as a placeholder while a
   * higher quality is loading. A highly-compressed  image as small as 10px ×
   * 10px is adequate!
   */
  srcPlaceholder: PropTypes.string,
  /**
   * A comma-delimited string that will be passed to the image's `srcset`
   * attribute.
   */
  srcSet: PropTypes.string,
  /**
   * A comma-delimited string that will be passed to the image's `sizes`
   * attribute.
   */
  sizes: PropTypes.string,
  /**
   * The image's `alt` text. Good `alt` text should be specific and succint and
   * not begin with "Image of…" or "Picture of…"
   *
   * If the image is purely decorative and has no contextual meaning, an empty
   * string is permissible.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Text to be displayed below or alongside the image as a caption. This
   * element can be styled by targeting `.gds-image__caption`.
   */
  caption: PropTypes.string,
  /**
   * Indicates whether the image should be lazy-loaded.
   */
  isLazyLoaded: PropTypes.bool,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  objectFit: PropTypes.oneOf(['unset', 'cover', 'contain', 'none', 'fill']),
  objectPosition: PropTypes.string,
};
