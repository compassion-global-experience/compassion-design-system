import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render `Primary` mode with `Medium` size', () => {
    const { container } = render(<Button label="Click Me!" mode="primary" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Secondary` mode with `Small` size', () => {
    const { container } = render(<Button label="Click Me!" mode="secondary" size="small" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Tertiary` mode with `Large` size', () => {
    const { container } = render(<Button label="Click Me!" mode="tertiary" size="large" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` variant', () => {
    const { container } = render(<Button label="Disabled" mode="primary" disabled />);
    expect(container).toMatchSnapshot();
  });
});
