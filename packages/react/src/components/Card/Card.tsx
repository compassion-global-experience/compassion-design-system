import { ReactNode } from 'react';
import styles from '@compassion-design-system/core/src/components/Card/card.module.css';
import { getClasses } from '../../utils/classes';
import Button from '../Button';
import TextBox from '../TextBox';

export interface CardProps {
  imagePath?: string;
  imageDescription?: string;
  imageClassName?: string;
  title?: string;
  titleHref?: string;
  smallText?: boolean;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  buttonText?: string;
  buttonOnClick?: () => void;
  centerContent?: boolean;
}

const Card = ({
  imagePath,
  imageDescription,
  imageClassName,
  title,
  titleHref,
  smallText = false,
  subtitle,
  description,
  children,
  buttonText,
  buttonOnClick,
  centerContent = false,
}: CardProps) => {
  const isImageOnlyCard =
    !children && !title && !subtitle && !description && !buttonText;
  const titleClasses = ['cds-card__title'];
  const descriptionClasses = ['cds-card__description'];
  if (smallText) {
    titleClasses.push('small');
    descriptionClasses.push('small');
  }
  const contentClasses = ['cds-card__content'];
  if (centerContent) {
    contentClasses.push('centered');
  }
  const imageClasses = ['cds-card__image'];
  if (imageClassName) {
    imageClasses.push(imageClassName);
  }

  const CardTitle = () => {
    if (titleHref) {
      return (
        <a className={getClasses(styles, titleClasses)} href={titleHref}>
          {title}
        </a>
      );
    } else {
      return <h3 className={getClasses(styles, titleClasses)}>{title}</h3>;
    }
  };

  return (
    <div className={getClasses(styles, 'cds-card')}>
      {imagePath && (
        <img
          className={getClasses(styles, imageClasses)}
          src={imagePath}
          alt={imageDescription || 'Card image'}
        />
      )}
      {!isImageOnlyCard && (
        <div className={getClasses(styles, contentClasses)}>
          {title && <CardTitle />}
          {subtitle && (
            <h4 className={getClasses(styles, 'cds-card__subtitle')}>
              Card Subtitle
            </h4>
          )}
          {description && (
            <p className={getClasses(styles, descriptionClasses)}>
              Cards can be used to showcase different types of content,
              including text, images, and videos. They provide a clear and
              concise way to present information, while also allowing users to
              easily interact with the content by clicking or tapping on the
              card to view more details.
            </p>
          )}
          {children && <TextBox>{children}</TextBox>}
          {buttonText && (
            <div>
              <Button
                label={buttonText}
                emphasis="primary"
                size="medium"
                onClick={buttonOnClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
