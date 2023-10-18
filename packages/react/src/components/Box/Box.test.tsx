import { render } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
  it('should render default props correctly', () => {
    const { container } = render(<Box>Default Box</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add the correct background color classes', () => {
    const { container } = render(
      <Box backgroundColor="primary" backgroundTint="subtle">
        Default Box
      </Box>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add the correct border classes', () => {
    const { container } = render(
      <Box borderColor="primary" borderRadius="rounded">
        Default Box
      </Box>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add the correct text color class', () => {
    const { container } = render(<Box textColor="accent">Default Box</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add the given classname', () => {
    const { container } = render(
      <Box className="testClassName">Default Box</Box>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
