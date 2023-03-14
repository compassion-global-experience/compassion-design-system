import { render } from '@testing-library/react';

import TextArea from './TextArea';

describe('TextArea', () => {
  it('should render `Small` size', () => {
    const { container } = render(<TextArea id="small-field" label="Small" size="small" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Success` state with `Large` size', () => {
    const { container } = render(<TextArea id="success-field" label="Success" state="success" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Error` state', () => {
    const { container } = render(<TextArea id="error-field" label="Error" state="error" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` state', () => {
    const { container } = render(<TextArea id="disabled-field" label="Disabled" state="disabled" />);
    expect(container).toMatchSnapshot();
  });

  it('should render counter with `maxLength: 100`', () => {
    const { container } = render(<TextArea id="with-counter" label="With Counter" maxLength={100} showCounter />);
    expect(container).toMatchSnapshot();
  });
});
