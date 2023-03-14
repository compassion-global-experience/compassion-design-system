import { render } from '@testing-library/react';

import SelectGroup from './SelectGroup';

describe('SelectGroup', () => {
  it('should render `Small` size', () => {
    const { container } = render(<SelectGroup id="small-field" label="Small" size="small" options={OPTIONS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Success` state with `Large` size', () => {
    const { container } = render(<SelectGroup id="success-field" label="Success" state="success" options={OPTIONS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Error` state', () => {
    const { container } = render(<SelectGroup id="error-field" label="Error" state="error" options={OPTIONS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render `Disabled` state', () => {
    const { container } = render(<SelectGroup id="disabled-field" label="Disabled" state="disabled" options={OPTIONS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render left aligned adornment with text', () => {
    const { container } = render(
      <SelectGroup
        id="adorned-field"
        label="Adorned"
        adornmentPosition="start"
        adornmentText="Text"
        options={OPTIONS}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});


const OPTIONS = [
  { value: 'option_1', label: 'Option 1' },
  { value: 'option_2', label: 'Option 2' },
  { value: 'option_3', label: 'Option 3' },
  { value: 'option_4', label: 'Option 4' },
  { value: 'option_5', label: 'Option 5' },
];
