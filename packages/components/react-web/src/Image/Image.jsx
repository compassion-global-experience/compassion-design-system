import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import imageStyles from './Image.styles';


/**
 * UI component for images
 */
export const Image = ({ src, src375, src480, src728, src1280, src1600, alt, title, caption, width, height, objectFit, objectPosition, objectPositionX, objectPositionY, lazyLoad }) => {
    const ref = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [realSrc, setRealSrc] = useState(lazyLoad ? null : src);
    let srcSet = null;

    if (!lazyLoad || isLoaded && (src375 || src480 || src728 || src1280 || src1600)) {
        srcSet = [];

        if (src1600) srcSet.push(<source media="(min-width: 1600px)" srcset={src1600} />);
        if (src1280) srcSet.push(<source media="(min-width: 1280px)" srcset={src1280} />);
        if (src728) srcSet.push(<source media="(min-width: 728px)" srcset={src728} />);
        if (src480) srcSet.push(<source media="(min-width: 480px)" srcset={src480} />);
        if (src375) srcSet.push(<source media="(min-width: 375px)" srcset={src375} />);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting ) {
                setIsLoaded(true);
                setRealSrc(src);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    });

    let objectPositionAttr = '';

    if (objectPositionX) {
        objectPositionAttr = objectPositionX;
    } else {
        objectPositionAttr = 'center';
    }

    if (objectPositionY) {
        objectPositionAttr += ' ' + objectPositionY;
    } else {
        objectPositionAttr = ' center';
    }

    return (
       <picture css={imageStyles}>
           {srcSet}
           <img 
           className={cx(
                `image__img`,
                { [`image__img--fit-${objectFit}`]: objectFit }
            )}
            src={realSrc}
            alt={alt}
            title={title}
            width={width}
            height={height}
            ref={ref}
            style={{objectPosition: objectPositionAttr}}
           />
           {caption &&
            <div className="image__caption">
                {caption}
            </div>
           }
       </picture>
    );
}

Image.propTypes = {
    /**
     * Path to image
     */
    src: PropTypes.string,
    /**
     * Path to image at 375px
     */
    src375: PropTypes.string,
    /**
     * Path to image at 480px
     */
    src480: PropTypes.string,
    /**
     * Path to image at 728px
     */
    src728: PropTypes.string,
    /**
     * Path to image at 1280px
     */
    src1280: PropTypes.string,
    /**
     * Path to image at 1600px
     */
    src1600: PropTypes.string,
    /**
     * Specifies alternate text for image
     */
    alt: PropTypes.string.isRequired,
    /**
     * Title text for image
     */
    title: PropTypes.string,
    /**
     * Caption for image
     */
    caption: PropTypes.string,
    /**
     * Width of image
     */
    width: PropTypes.string,
    /**
     * Height of image
     */
    height: PropTypes.string,
    /**
     * Define object fit property
     */
    objectFit: PropTypes.oneOf(['unset', 'cover', 'contain']),
    /**
     * Define object position x, percent, pixel or position
     */
    objectPositionX: PropTypes.string,
     /**
     * Define object position x, percent, pixel or position
     */
    objectPositionY: PropTypes.string,
    /**
     * Will the image be lazy loaded?
     */
    lazyLoad: PropTypes.bool
};

Image.defaultProps = {
    src: undefined,
    srcPreview: undefined,
    src375: undefined,
    src480: undefined,
    src728: undefined,
    src1280: undefined,
    src1600: undefined,
    title: undefined,
    caption: undefined,
    width: undefined,
    height: undefined,
    objectFit: undefined,
    objectPosition: undefined,
    lazyLoad: false
};