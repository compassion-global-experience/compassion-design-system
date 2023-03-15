import { render } from '@testing-library/react';

import ChoiceInput from './ChoiceInput';

describe('ChoiceInput', () => {
  it('should render `radio` in `Error` state', () => {
    const { container } = render(<ChoiceInput id="error-field" label="Error" state="error" type="radio" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `radio` in `Disabled` state', () => {
    const { container } = render(<ChoiceInput id="disabled-field" label="Disabled" state="disabled" type="radio" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `checkbox` in `Error` state', () => {
    const { container } = render(<ChoiceInput id="error-field" label="Error" state="error" type="checkbox" />);
    expect(container).toMatchSnapshot();
  });

  it('should render `checkbox` in `Disabled` state', () => {
    const { container } = render(<ChoiceInput id="disabled-field" label="Disabled" state="disabled" type="checkbox" />);
    expect(container).toMatchSnapshot();
  });
});
