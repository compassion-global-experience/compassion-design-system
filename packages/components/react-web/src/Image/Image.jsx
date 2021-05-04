import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * UI component for images
 */

export const Image = ({ src, srcPreview, srcSet, sizes, alt, caption, isLazyLoaded, width, maxWidth, height, maxHeight, objectFit, objectPosition }) => {
    const ref = useRef(null);
    const [currentSrc, setCurrentSrc] = useState(null);
    const isLazyLoadedLoaded = useRef(false);
    const currentSrcSet = useRef(null);

    useEffect(() => {
        let isLoaded = false;
        const { current } = ref;

        function setSrc() {
            if (srcPreview) {
                setCurrentSrc(srcPreview);

                let img = document.createElement('img');
                if (srcSet) {
                    img.srcset = src;
                } else {
                    img.src = src;
                }
                img.onload = () => {
                    currentSrcSet.current = srcSet;
                    setCurrentSrc(src);
                }

                isLoaded = true;
            } else {
                setCurrentSrc(src);
                isLoaded = true;
            }
        }

        if (!isLoaded) {
            if (isLazyLoaded) {
                let observer = new IntersectionObserver(
                    entries => entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setSrc();
                            observer = observer.disconnect();
                        }
                    })
                );

                observer.observe(current)

                return () => (observer = observer && observer.disconnect())
            } else {
                setSrc();
            }
        }
    }, [ref, src, srcPreview, srcSet, isLazyLoaded, isLazyLoadedLoaded, currentSrcSet]);

    return (
        <figure className={`img`} ref={ref}>
            <img className={`img__photo`}
                src={currentSrc}
                sizes={sizes}
                srcSet={currentSrcSet.current}
                alt={alt}
                style={{
                    width: width,
                    maxWidth: maxWidth,
                    height: height,
                    maxHeight: maxHeight,
                    objectFit: objectFit,
                    objectPosition: objectPosition
                }} />
            {caption &&
                <figcaption>
                    {caption}
                </figcaption>
            }
        </figure>
    );
}

Image.defaultProps = {
    src: null,
    srcSet: null,
    alt: null,
    caption: null,
    isLazyLoaded: true,
    width: null,
    maxWidth: null,
    height: null,
    maxHeight: null,
    objectFit: null,
    objectPosition: null
};

Image.propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
    isLazyLoaded: PropTypes.bool,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    objectFit: PropTypes.oneOf(['unset', 'cover', 'contain', 'none', 'fill']),
    objectPosition: PropTypes.string
};
