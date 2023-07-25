import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  it('should render with default props', () => {
    const { container } = render(<Icon icon="skippy" description="Skippy" />);
    expect(container).toMatchSnapshot();
  });

  it('should render a large icon', () => {
    const { container } = render(
      <Icon icon="skippy" description="Skippy" size="lg" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a muted icon', () => {
    const { container } = render(
      <Icon icon="skippy" description="Skippy" color="muted" />,
    );
    expect(container).toMatchSnapshot();
  });
});
