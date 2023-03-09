import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('should render `Small` size', () => {
    const { container } = render(<TextField id="small-field" label="Small" size="small" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Success` state with `Large` size', () => {
    const { container } = render(<TextField id="success-field" label="Success" state="success" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Error` state', () => {
    const { container } = render(<TextField id="error-field" label="Error" state="error" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` state', () => {
    const { container } = render(<TextField id="disabled-field" label="Disabled" state="disabled" />);
    expect(container).toMatchSnapshot();
  });
});
