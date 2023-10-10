import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should renders props correctly', () => {
    const { container } = render(
      <Card
        imagePath="imagePath/image.jpg"
        imageDescription="Children laughing"
        imageClassName="testImageClassName"
        title="Card Title"
        titleHref="#"
        subtitle="Card Subtitle"
        smallText={false}
        description="Description"
        buttonText="Learn more"
        buttonOnClick={() => {
          console.log('Button clicked');
        }}
        centerContent={false}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render custom content', () => {
    const { container } = render(
      <Card>
        <div>Custom content</div>
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should center content', () => {
    const { container } = render(
      <Card description="Description" centerContent />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small text for title and description', () => {
    const { container } = render(
      <Card title="Card Title" description="Description" smallText />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
