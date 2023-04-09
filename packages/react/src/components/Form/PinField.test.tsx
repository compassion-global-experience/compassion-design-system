import { render } from '@testing-library/react';

import PinField from './PinField';

describe('PinField', () => {
  it('should render `Small` size', () => {
    const { container } = render(<PinField label="Small" size="small" />);
    expect(container).toMatchSnapshot();
  });

  it('should render 8 inputs', () => {
    const { container } = render(<PinField label="Longer" length={8} />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Error` state', () => {
    const { container } = render(<PinField label="Error" state="error" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` state', () => {
    const { container } = render(
      <PinField label="Disabled" state="disabled" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render `Secret` mode (hidden values)', () => {
    const { container } = render(
      <PinField label="Secret" value="1234" secret />,
    );
    expect(container).toMatchSnapshot();
  });
});
