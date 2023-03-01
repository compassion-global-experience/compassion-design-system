import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render `Primary` mode with `Medium` size', () => {
    const { container } = render(<Button label="Click Me!" mode="primary" />);
    const classNames = ['primary', 'medium'];

    const result = classNames.every(className => {
      return container.getElementsByClassName(className);
    });

    expect(result).toBe(true);
  });

  it('should render `Secondary` mode with `Small` size', () => {
    const { container } = render(<Button label="Click Me!" mode="secondary" size="small" />);
    const classNames = ['secondary', 'small'];

    const result = classNames.every(className => {
      return container.getElementsByClassName(className);
    });

    expect(result).toBe(true);
  });

  it('should render `Tertiary` mode with `Large` size', () => {
    const { container } = render(<Button label="Click Me!" mode="tertiary" size="large" />);
    const classNames = ['tertiary', 'large'];

    const result = classNames.every(className => {
      return container.getElementsByClassName(className);
    });

    expect(result).toBe(true);
  });

  it('should render `Disabled` variant', () => {
    const { container } = render(<Button label="Disabled" mode="primary" disabled />);
    const button = container.getElementsByTagName('button')[0];

    expect(button.disabled).toBe(true);
  });
});
