import { render } from '@testing-library/react';

import InputGroup from './InputGroup';

describe('InputGroup', () => {
  it('should render `Small` size', () => {
    const { container } = render(<InputGroup id="small-field" label="Small" size="small" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Success` state with `Large` size', () => {
    const { container } = render(<InputGroup id="success-field" label="Success" state="success" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Error` state', () => {
    const { container } = render(<InputGroup id="error-field" label="Error" state="error" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` state', () => {
    const { container } = render(<InputGroup id="disabled-field" label="Disabled" state="disabled" />);
    expect(container).toMatchSnapshot();
  });

  it('should render left aligned adornment with text', () => {
    const { container } = render(<InputGroup id="adorned-field" label="Adorned" adornmentPosition="start" adornmentText="Text" />);
    expect(container).toMatchSnapshot();
  });
});
