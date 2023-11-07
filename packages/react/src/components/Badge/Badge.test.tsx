import { render } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('should render default props correctly', () => {
    const { container } = render(<Badge label="Test Badge" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a badge with an icon', () => {
    const { container } = render(<Badge label="Test Badge" icon="church" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a badge with an icon at the end', () => {
    const { container } = render(
      <Badge label="Test Badge" icon="church" iconPosition="end" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a badge with a pill border radius', () => {
    const { container } = render(
      <Badge label="Test Badge" borderRadius="pill" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an icon only badge', () => {
    const { container } = render(
      <Badge label="Test Badge" icon="church" showLabel={false} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
