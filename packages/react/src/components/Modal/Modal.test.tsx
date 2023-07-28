import { render } from '@testing-library/react';

import Modal from './Modal';
import Button from '../Button';

describe('Modal', () => {
  it('should render `Default` size with `Header` and `Footer`', () => {
    const { container } = renderComponent({ size: 'default' });
    expect(container).toMatchSnapshot();
  });

  it('should render `Wide` size without `Header`', () => {
    const { container } = renderComponent({ size: 'wide', title: undefined });
    expect(container).toMatchSnapshot();
  });

  it('should render `Small` size without `Footer`', () => {
    const { container } = renderComponent({
      size: 'small',
      footerSlot: undefined,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render `Default` size without `Header` and `Footer`', () => {
    const { container } = renderComponent({
      size: 'small',
      footerSlot: undefined,
    });
    expect(container).toMatchSnapshot();
  });

  const renderComponent = (props) =>
    render(
      <Modal
        title="Title"
        footerSlot={<ModalFooter />}
        onClose={() => undefined}
        {...props}
      >
        <div>Slot</div>
      </Modal>,
    );
});

const ModalFooter = () => (
  <>
    <Button label="Button 2" emphasis="secondary" />
    <Button label="Button 1" emphasis="primary" />
  </>
);
