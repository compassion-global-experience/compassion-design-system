import { Meta } from '@storybook/react';
import Card from './Card';
import Icon from '../Icon';
import imageFile from '../../stories/assets/kidsLaughing.png';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

const customCardContent = (
  <div>
    <div
      style={{
        width: 72,
        height: 72,
        backgroundColor: 'lightskyblue',
        padding: 20,
        margin: 20,
        borderRadius: 36,
      }}
    >
      <Icon icon="lightbulb" description="Lightbulb" size="lg" />
    </div>
    <p>Custom content</p>
  </div>
);

export const Default = (args) => (
  <Card {...args}>
    <div>Custom content - Children rendered here</div>
  </Card>
);
Default.args = {
  imagePath: imageFile,
  imageDescription: 'Children laughing',
  title: 'Card Title',
  titleHref: '#',
  subtitle: 'Card Subtitle',
  smallText: false,
  description: 'Description',
  buttonText: 'Learn more',
  buttonOnClick: () => {
    console.log('Button clicked');
  },
  centerContent: false,
};

export const CustomContent = (args) => (
  <Card {...args}>{customCardContent}</Card>
);
CustomContent.args = {
  title: 'Card Title',
  titleHref: '#',
  subtitle: 'Card Subtitle',
  description:
    'Cards can be used to showcase different types of content, including text, images, and videos. They provide a clear and concise way to present information, while also allowing users to easily interact with the content by clicking or tapping on the card to view more details.',
  buttonText: 'Learn more',
  buttonHref: '#',
  centerContent: true,
};

export const ImageOnly = {
  args: {
    imagePath: imageFile,
  },
};

export const ContentOnly = {
  args: {
    title: 'Card Title',
    titleHref: '#',
    subtitle: 'Card Subtitle',
    description:
      'Cards can be used to showcase different types of content, including text, images, and videos. They provide a clear and concise way to present information, while also allowing users to easily interact with the content by clicking or tapping on the card to view more details.',
    buttonText: 'Learn more',
    buttonHref: '#',
    centerContent: false,
  },
};
