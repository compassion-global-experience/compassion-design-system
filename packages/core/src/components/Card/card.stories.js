import './card.scss';
import '../Icon/icon.scss';
import '../TextBox/textBox.scss';

export default {
  title: 'Components/Card',
};

const createCard = ({
  imagePath,
  imageDescription,
  title,
  titleHref,
  smallText = false,
  subtitle,
  description,
  customCardContent,
  buttonText,
  centerContent = false,
}) => {
  const card = document.createElement('div');
  card.className = 'cds-card';

  const isImageOnlyCard =
    !customCardContent && !title && !subtitle && !description && !buttonText;

  if (imagePath) {
    const cardImage = document.createElement('img');
    cardImage.className = 'cds-card__image';
    cardImage.src = imagePath;
    cardImage.alt = imageDescription;
    card.appendChild(cardImage);

    if (isImageOnlyCard) {
      cardImage.classList.add('cds-card__image--only');
    }
  }

  if (!isImageOnlyCard) {
    const cardContentContainer = document.createElement('div');
    cardContentContainer.className = 'cds-card__content';
    if (centerContent) {
      cardContentContainer.classList.add('centered');
    }

    if (title) {
      const cardTitle = document.createElement(titleHref ? 'a' : 'h3');
      cardTitle.className = `cds-card__title ${smallText ? 'small' : ''}`;
      cardTitle.innerText = title;
      if (titleHref) {
        cardTitle.href = titleHref;
      }
      cardContentContainer.appendChild(cardTitle);
    }

    if (subtitle) {
      const cardSubtitle = document.createElement('h4');
      cardSubtitle.className = 'cds-card__subtitle';
      cardSubtitle.innerText = subtitle;
      cardContentContainer.appendChild(cardSubtitle);
    }

    if (description) {
      const cardDescription = document.createElement('p');
      cardDescription.className = `cds-card__description ${
        smallText ? 'small' : ''
      }`;
      cardDescription.innerText = description;
      cardContentContainer.appendChild(cardDescription);
    }

    if (customCardContent) {
      const cardCustomContent = document.createElement('div');
      cardCustomContent.className = 'cds-text-box';
      cardCustomContent.innerHTML = customCardContent;
      cardContentContainer.appendChild(cardCustomContent);
    }

    if (buttonText) {
      const cardButtonContainer = document.createElement('div');
      const cardButton = document.createElement('button');
      cardButton.classList.add('cds-button--primary', 'cds-button--medium');
      cardButton.innerText = buttonText;
      cardButtonContainer.appendChild(cardButton);
      cardContentContainer.appendChild(cardButtonContainer);
    }

    card.appendChild(cardContentContainer);
  }

  return card;
};

const Template = (args) => {
  return createCard(args);
};

const defaultCardContent = `
    <div class="cds-icon__container" style="width: 72px; height: 72px;background-color: lightskyblue; padding: 20px; margin: 20px; border-radius: 36px;">
    <i class="ph-backpack cds-icon__svg--lg cds-icon__svg--primary" aria-hidden="true"></i>
    <span class="cds-icon__description">Backpack</span>
    </div>
    <p>Custom content</p>
`;

export const Default = Template.bind({});
Default.args = {
  imagePath: './assets/images/kidsLaughing.png',
  imageDescription: 'Children laughing',
  title: 'Card Title',
  titleHref: '#',
  subtitle: 'Card Subtitle',
  description:
    'Cards can be used to showcase different types of content, including text, images, and videos. They provide a clear and concise way to present information, while also allowing users to easily interact with the content by clicking or tapping on the card to view more details.',
  buttonText: 'Learn more',
  buttonHref: '#',
  centerContent: false,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: 'Card Title',
  titleHref: '#',
  subtitle: 'Card Subtitle',
  description:
    'Cards can be used to showcase different types of content, including text, images, and videos. They provide a clear and concise way to present information, while also allowing users to easily interact with the content by clicking or tapping on the card to view more details.',
  customCardContent: defaultCardContent,
  buttonText: 'Learn more',
  buttonHref: '#',
  centerContent: true,
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
  imagePath: './assets/images/kidsLaughing.png',
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
  title: 'Card Title',
  titleHref: '#',
  subtitle: 'Card Subtitle',
  centerContent: false,
  description:
    'Cards can be used to showcase different types of content, including text, images, and videos. They provide a clear and concise way to present information, while also allowing users to easily interact with the content by clicking or tapping on the card to view more details.',
};
